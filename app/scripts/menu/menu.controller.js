(function() {
	'use strict';

	angular
		.module('supermodular.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$scope', '$ionicPopover','ionicDatePicker'];

	/* @ngInject */
	function MenuController($scope, $ionicPopover,ionicDatePicker) {

		/*pop over code*/
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

	 $scope.ipObj1 = {
		callback: function (val) {  //Mandatory
			console.log('Return value from the datepicker popup is : ' + val, new Date(val));
		},
		from: new Date(2012, 1, 1), //Optional
		to: new Date(2016, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		closeOnSelect: false,       //Optional
		templateType: 'popup'       //Optional
	 };
	 $scope.openDatePicker = function(){
		 var ipObj1=$scope.ipObj1;
		 ionicDatePicker.openDatePicker(ipObj1);
	 };



	 //

	}
})();
