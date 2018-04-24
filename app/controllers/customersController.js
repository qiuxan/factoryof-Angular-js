(function() {

    var CustomersController = function ($scope,customersService, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.appSettings=appSettings;

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };

        $scope.customers=[];

        function init() {
            $scope.customers=customersService.getCustomers();
        }
        init();

    };

    CustomersController.$inject = ['$scope','customersService','appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);

}());