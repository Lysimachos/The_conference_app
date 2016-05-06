(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.factory('wordpressService', wordpressService);

	wordpressService.$inject = ['$http', '$q', '_', 'htmlToPlainText'];

	/* @ngInject */
	function wordpressService($http, $q, _, htmlToPlainText) {
		var url = '';
		var articles = [];
		var example_json=[{
			id: 1234,
			title: 'Advanced Fluid Statics',
			logo: 'http://innochain.net/wp-content/uploads/102_01.jpg',
			date: '2016-05-18',
			location: 'Xanthi',
			coordinates: 'Map Location',
			venue: 'Duth Lobby',
			contact: 'Call me @ 6987654321',
			about: 'This is a non existent conferece',
			organizer: 'Somebody',
			scedule: {
				1: {
					sub_id: 1,
					start_time: '12:00',
					end_time: '13:00',
					date: '2016-05-18',
					title: 'Entry Level Fluid Dynamics',
					speaker: 'Romaidis Orfeas',
					description: 'Text description',
					file: 'url',
					vanue: 'Loby A',
					links: 'url',
					image: 'https://www.newton.ac.uk/files/covers/968361.jpg',
					},	
				2: {
					sub_id: 2,
					start_time: '13:00',
					end_time: '14:00',
					date: '2016-05-18',
					title: 'Secondary Level Fluids',
					speaker: 'Polychronis Christos',
					description: 'Text description',
					file: 'url',
					vanue: 'Loby A',
					links: 'url',
					image: 'http://feelgrafix.com/data_images/out/13/877592-random-wallpaper.jpg',
					},	
				},	
			
			},];
		var service = {
			getArticles: getArticles,
			getArticle: getArticle
		};
		return service;

		////////////////

		function getArticles() {
			return example_json;
		}

		function getArticle(articleId) {
			if (articles.length) {
				return $q.when(_.find(articles, 'id', articleId));
			} else {
				var deferred = $q.defer();

				getArticles()
					.then(function() {
						deferred.resolve(_.find(articles, 'id', articleId));
					});

				return deferred.promise;
			}
		}
	}
})();
