(function() {

    var CustomersController = function ($scope,customersService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

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

    CustomersController.$inject = ['$scope','customersService'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);

}());