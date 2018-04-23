(function() {
    
    var CustomersController = function ($scope,customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        $scope.customers=[];

        function init() {
            $scope.customers=customersFactory.getCustomers();
        }
        init();

    };
    
    CustomersController.$inject = ['$scope','customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());