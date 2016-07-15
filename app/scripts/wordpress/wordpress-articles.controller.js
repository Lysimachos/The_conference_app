(function() {
	'use strict';

	angular
	.module('supermodular.wordpress')
	.controller('WordpressArticlesController', WordpressArticlesController);

	WordpressArticlesController.$inject = ['$rootScope', '$state', 'wordpressService'];

	/* @ngInject */
	function WordpressArticlesController($rootScope, $state, wordpressService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			addFavorite: addFavorite,
			removeFavorite: removeFavorite,
			isFavorite: false
		});

		function activate() {
			getArticles();
		}
		activate();

		// ********************************************************************

		function getArticles() {
			wordpressService.getArticles()
			.then(function(articles) {
				vm.articles = articles;
			});
		}

		function navigate(articleId) {
			$state.go('app.wordpress-article', { articleId: articleId });
		}

		function addFavorite(article){
			vm.isFavorite = (!vm.isFavorite);
			wordpressService.addFavorites(article);
			$rootScope.$broadcast('addFav');
		}

		function removeFavorite(article){
			vm.isFavorite = (!vm.isFavorite);
			wordpressService.removeFavorite(article);
			$rootScope.$broadcast('rmFav');
		}
	}
})();
