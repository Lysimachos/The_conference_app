(function() {
	'use strict';

	angular
		.module('supermodular.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = ['$state', '$rootScope', '$scope', '$ionicPopover','ionicDatePicker'];

	/* @ngInject */
	function MenuController($state, $rootScope, $scope, $ionicPopover,ionicDatePicker) {

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
			callbackDate(val);
		},
		from: new Date(2008, 10, 30), //Optional
		to: new Date(2018, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		closeOnSelect: false,       //Optional
		templateType: 'popup'       //Optional
	 };

	 $scope.pickedDate = new Date();

	 var callbackDate = function (val) {
		 if (typeof(val) === 'undefined') {
			 console.log('No date selected');
		 } else {			 
			 $scope.pickedDate = val;
		 }
	 };

	 $scope.openDatePicker = function(){
		 ionicDatePicker.openDatePicker($scope.ipObj1);
	 };

	 $scope.inputVal = {text: ''};

	 $scope.passSearchParameters = function(){
		 var data = {date: $scope.pickedDate, text: $scope.inputVal.text};
		 $scope.closePopover();
		 $state.go('app.search').then(function(){
			 $rootScope.$broadcast('search', data);
		 });
	 };





	 //

	}
})();
