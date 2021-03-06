(function() {
	'use strict';

	angular
	.module('supermodular.wordpress')
	.controller('FavoritesController', FavoritesController);

	FavoritesController.$inject = ['$rootScope', '$state', 'wordpressService'];

	/* @ngInject */
	function FavoritesController($rootScope, $state, wordpressService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			onSwipeLeft: onSwipeLeft,
			onSwipeRight: onSwipeRight
		});

    // ***************************************************
    function activate() {
			//$scope.passSearchParameters();
			getFavorites();
      $rootScope.$on('rmFav', function(event, data) { getFavorites(); } );
			$rootScope.$on('addFav', function(event, data) { getFavorites(); } );
		}
		activate();

    function navigate(articleId) {
			$state.go('app.wordpress-article', { articleId: articleId });
		}

    function getFavorites() {
			vm.articles = wordpressService.getFavorites();
		}

		function onSwipeLeft(article){
			wordpressService.removeFavorite(article);
			getFavorites();
		}

		function onSwipeRight(article){
			wordpressService.removeFavorite(article);
			getFavorites();
		}

	}
})();
