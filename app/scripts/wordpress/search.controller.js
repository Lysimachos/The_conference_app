(function() {
	'use strict';

	angular
	.module('supermodular.wordpress')
	.controller('SearchController', SearchController);

	SearchController.$inject = ['$rootScope', '$state', 'wordpressService'];

	/* @ngInject */
	function SearchController($rootScope, $state, wordpressService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			onSwipeLeft: onSwipeLeft,
			onSwipeRight: onSwipeRight,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      isFavorite: isFavorite
		});

    // ***************************************************
    function activate() {
			//$scope.passSearchParameters();
			getSearchResults();

			//$rootScope.$on("addFav", function(event, data) { getSearchResults(); } );
		}
		activate();

    function navigate(articleId) {
			$state.go('app.wordpress-article', { articleId: articleId });
		}

    function getSearchResults() {
			vm.articles = wordpressService.getSearchResults();
		}

		function onSwipeLeft(article){
			wordpressService.removeFavorite(article);
			getSearchResults();
		}

		function onSwipeRight(article){
			wordpressService.removeFavorite(article);
			getSearchResults();
		}

    function isFavorite(article) {
      return wordpressService.isFavorite(article);
    }

    function addFavorite(article) {
      wordpressService.addFavorites(article);
      //$scope.$broadcast('addFav');
      $rootScope.$broadcast('addFav');
    }

    function removeFavorite(article) {
      wordpressService.removeFavorite(article);
      $rootScope.$broadcast('rmFav');
    }

	}
})();
