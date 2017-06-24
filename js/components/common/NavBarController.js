

myApp.controller('NavBarController',
    ['$scope',
        '$location',
        '$rootScope',
        'LoginService',
        function ($scope, $location, $rootScope, LoginService) {

            $scope.logout = function () {
                $rootScope.showNavBar = false;
                $location.path('/login');
            };

            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };

        }]);