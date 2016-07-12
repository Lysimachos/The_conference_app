(function() {
	'use strict';

	angular
	.module('supermodular.wordpress')
	.controller('FavoritesController', FavoritesController);

	FavoritesController.$inject = ['$state', 'wordpressService'];

	/* @ngInject */
	function FavoritesController($state, wordpressService) {
		var vm = angular.extend(this, {
			articles: new Array(),
			navigate: navigate
		});

    // ***************************************************
    function activate() {
			getFavorites();
		}
		activate();

    function navigate(articleId) {
			$state.go('app.wordpress-article', { articleId: articleId });
		}

    function getFavorites() {
			vm.articles = wordpressService.getFavorites();      
		}

	}
})();
