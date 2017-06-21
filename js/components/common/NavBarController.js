

myApp.controller('NavBarController', ['$scope', '$location', '$rootScope', 'LoginService', function($scope, $location, $rootScope, LoginService){


    $scope.logout = function () {
        
    $rootScope.showNavBar = false;
    alert('inside the logout function ' + $rootScope.showNavBar);
    $location.path('/login');
  };

  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

}]);