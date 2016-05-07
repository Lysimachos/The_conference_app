(function() {
	'use strict';

	angular
		.module('supermodular.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope', '$ionicPopover'];

	/* @ngInject */
	function MenuController($scope, $ionicPopover) {

		$ionicPopover.fromTemplateUrl('scripts/menu/popover.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });

	}
})();
