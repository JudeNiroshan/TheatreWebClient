 

myApp.controller('LoginController',
    ['$scope', 
    '$rootScope', 
    '$location', 
    'LoginService',
    function ($scope, $rootScope, $location, LoginService) {
        // reset login status
        LoginService.ClearUserData();
 
       $scope.login = function () {
            $scope.enableDataLoadingIcon = true;
            LoginService.Login($scope.username, $scope.password, function(response) {
                if(response.status == 200) {
                    //Login is successfull
                    
                    LoginService.StoreUserData(response.data.jwtToken);
                    $rootScope.showNavBar = true;
                    $location.path('/dashboard');//Redirecting to '/' path which has defined under routes 
                } else {
                    $scope.error = response.message;
                    $scope.enableDataLoadingIcon = false;
                    $rootScope.showNavBar = false;
                }
            });
        };
    }]);