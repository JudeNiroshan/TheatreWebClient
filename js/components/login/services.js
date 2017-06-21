'use strict';
 
 
myApp.factory('LoginService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {


        var SERVER_PATH = 'http://localhost:8088/rest';
        var service = {};

        service.Login = function (username, password, callback) {

            /* For testing purposes */
            // $timeout(function(){
            //     var response = { success: username === 'test' && password === 'test' };
            //     if(!response.success) {
            //         response.message = 'Username or password is incorrect';
            //     }
            //     callback(response);
            // }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            // $http.post(SERVER_PATH + '/login', { username: username, password: password } )
            //    .success(function (response) {
            //        console.log(response);
            //        callback(response);
            //    });

               $http({
                    method : "POST",
                    url : SERVER_PATH + '/login',
                    dataType: 'json',
                    data: { username: username, password: password },
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                   console.log(response.data.jwtToken);
                   callback(response);
               });

        };
 
        service.StoreUserData = function (token) {
            
            $rootScope.globals = {
                authdata:  token
            };
 
            //saving the token in the http header for subsequent requests
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.authdata;
            //store the token in the coockie
            $cookieStore.put('globals', $rootScope.globals);
        };
 
        service.ClearUserData = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = '';
        };
 
        return service;
}]);