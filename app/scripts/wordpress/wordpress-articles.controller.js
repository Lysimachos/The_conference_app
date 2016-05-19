(function() {
	'use strict';
	
	angular
	.module('supermodular.wordpress')
	.controller('WordpressArticlesController', WordpressArticlesController);
	
	WordpressArticlesController.$inject = ['$state', 'wordpressService'];
	
	/* @ngInject */
	function WordpressArticlesController($state, wordpressService) {
		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate,
			addFavorite: addFavorite
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
		
		function addFavorite(id){
			console.log('i did somehting');
		}
	}
})();
