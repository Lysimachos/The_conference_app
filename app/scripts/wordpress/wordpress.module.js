(function() {
	'use strict';

	angular
	.module('supermodular.wordpress', [
		'ionic',
		'supermodular.common'
	])
	.config(function($stateProvider) {
		$stateProvider
		.state('app.wordpress-articles', {
			url: '/wordpress-articles',
			views: {
				'menuContent': {
					templateUrl: 'scripts/wordpress/wordpress-articles.html',
					controller: 'WordpressArticlesController as vm'
				}
			}
		})
		.state('app.wordpress-article', {
			url: '/wordpress-articles/:articleId',
			views: {
				'menuContent': {
					templateUrl: 'scripts/wordpress/wordpress-article.html',
					controller: 'WordpressArticleController as vm'
				}
			}
		})
		.state('app.favorites', {
			url: '/favorites',
			views: {
				'menuContent': {
					templateUrl: 'scripts/wordpress/favorites.html',
					controller: 'FavoritesController as vm'
				}
			}
		})
		.state('app.search', {
			url: '/search',
			views: {
				'menuContent': {
					templateUrl: 'scripts/wordpress/search.html',
					controller: 'SearchController as vm'
				}
			}
		});
	});
})();
