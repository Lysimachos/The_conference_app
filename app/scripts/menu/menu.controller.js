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

	 $scope.inputVal={text: ''};
	 $scope.ipObj1 = {
		callback: function (val) {  //Mandatory
			$scope.ipObj1.inputDate = val; //TODO html button update bug
		},
		from: new Date(2012, 1, 1), //Optional
		to: new Date(2016, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		closeOnSelect: false,       //Optional
		templateType: 'popup'       //Optional
	 };
	 $scope.openDatePicker = function(){
		 ionicDatePicker.openDatePicker($scope.ipObj1);
	 };
	 $scope.passSearchParameters = function(){
		 console.log('Return value from the datepicker popup is : ' + new Date($scope.ipObj1.inputDate));
		 console.log($scope.inputVal.text);
	 };

	 $scope.broadcastToChildren = function(){
		 //$scope.$emit("rmFav");
		 console.log($scope.$parent);
	 };



	 //

	}
})();
