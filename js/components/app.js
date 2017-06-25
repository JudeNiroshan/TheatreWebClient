'use strict';

//WSO2 ESB host location; All APIs will be invoked to this host.
var SERVER_PATH = 'http://192.168.57.1:8280/movie_esb';


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
    .when('/payment', {
        templateUrl: 'js/components/payment/views/paymentChoosePanel.htm',
        controller: 'PaymentController'
    })
    .when('/sampathBankForm', {
        templateUrl: 'js/components/payment/views/sampathBankPanel.htm',
        controller: 'SampathBankController'
    })
    .otherwise({
        redirectTo: '/login'
    });

}]);