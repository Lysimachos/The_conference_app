(function() {
  'use strict';

  angular
    .module('supermodular.wordpress')
    .controller('WordpressArticlesController', WordpressArticlesController);

  WordpressArticlesController.$inject = ['$scope', '$rootScope', '$state', 'wordpressService'];

  /* @ngInject */
  function WordpressArticlesController($scope, $rootScope, $state, wordpressService) {
    var vm = angular.extend(this, {
      articles: [],
      navigate: navigate,
      addFavorite: addFavorite,
      removeFavorite: removeFavorite,
      isFavorite: isFavorite
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
      $state.go('app.wordpress-article', {
        articleId: articleId
      });
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
