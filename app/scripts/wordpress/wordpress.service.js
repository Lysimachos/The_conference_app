(function() {
	'use strict';
	
	angular
	.module('supermodular.wordpress')
	.factory('db', [function() {
		return new Firebase('https://business-directory.firebaseio.com/');
	}])
	.factory('wordpressService', wordpressService);	
	wordpressService.$inject = ['$http', '$q', '_', 'htmlToPlainText', '$firebaseArray', '$firebaseObject'];
	
	/* @ngInject */
	function wordpressService($http, $q, _, htmlToPlainText, $firebaseArray, $firebaseObject) {
		var url = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
		var articles = [];
		var example_json=[{
			id: 1234,
			title: 'Advanced Fluid Statics kai arkoudes kai oti allo thes gia na gemisei tin seira',
			logo: 'http://innochain.net/wp-content/uploads/102_01.jpg',
			date_start: '18/5/2016',
			date_end: '18/5/2016',
			location: 'Xanthi',
			coordinates: 'Map Location',
			venue: 'Duth Lobby',
			contact: 'Call me @ 6987654321',
			about: 'This is a non existent conferece',
			organizer: 'Somebody',
			link: 'url',
			schedule: {
				1: {
					sub_id: 1,
					start_time: '12:00',
					end_time: '13:00',
					date: '2016-05-18',
					title: 'Entry Level Fluid Dynamics',
					speaker: 'Romaidis Orfeas',
					description: 'Text description.. This course signifies the importance of lorem ipsum text. Which is realy important to showcase large portions of text. Incuded in a description box for testing purposes',
					file: 'url',
					vanue: 'Loby A',
					image: 'https://www.newton.ac.uk/files/covers/968361.jpg',
				},	
				2: {
					sub_id: 2,
					start_time: '13:00',
					end_time: '14:00',
					date: '2016-05-18',
					title: 'Secondary Level Fluids',
					speaker: 'Polychronis Christos',
					description: 'Text description.. This course signifies the importance of lorem ipsum text. Which is realy important to showcase large portions of text. Incuded in a description box for testing purposes',
					file: 'url',
					vanue: 'Loby A',
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
			return $http.get(url)
			.then(function(response) {
				articles=example_json;
				return example_json;
			});
			
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
