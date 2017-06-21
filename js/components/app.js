'use strict';





var myApp = angular.module('TheatreWebClient', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when('/login', {
        templateUrl: 'js/components/login/views/loginPage.html',
        controller: 'LoginController'
    })
    .when('/dashboard', {
        templateUrl: 'js/components/home/views/homePanel.htm',
        controller: 'home'
    })
    .when('/reserve', {
        templateUrl: 'js/components/reserve/views/bookingPanel.htm',
        controller: 'BookingController'
    })
    .otherwise({
        redirectTo: '/login'
    });

}]);