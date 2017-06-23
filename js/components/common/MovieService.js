

myApp.factory('MovieService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};
        var SERVER_PATH = 'http://localhost:8088/rest';

        service.getTheaterData = function (callback) {

               $http({
                    method : "GET",
                    url : SERVER_PATH + '/theater',
                    dataType: 'json',
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                //    console.log(response);
                   callback(response);
               });

        };
 
        service.getMovieDataByTheaterId = function (theaterId, callback) {

               $http({
                    method : "GET",
                    url : SERVER_PATH + '/movieTheater/' + theaterId + '/movie',
                    dataType: 'json',
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                   callback(response);
               });

        };


        service.getMovieShowTimesByTheaterIdMovieId = function (theaterId, movieId, callback) {

               $http({
                    method : "GET",
                    url : SERVER_PATH + '/showtime/' + theaterId + '/' + movieId,
                    dataType: 'json',
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                   callback(response);
               });

        };
        
        
        
        service.getAvailableSeats = function (theaterId, movieId, date, callback) {

               $http({
                    method : "POST",
                    url : SERVER_PATH + '/showtime/' + theaterId + '/' + movieId + '/' + date,
                    dataType: 'json',
                    data: {theaterId, movieId, date},
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                   callback(response);
               });

        };

        service.saveBooking = function (theaterId, movieId, date, seats, callback) {

                console.log('inside the saveBooking() ::::: ');
               $http({
                    method : "POST",
                    url : SERVER_PATH + '/booking',
                    dataType: 'json',
                    data: {theatreId: theaterId, movieId: movieId, bookingDate: date, numberOfSeats: seats},
                    headers: {
                            "Content-Type": "application/json"
                        }
                }).then(function (response) {
                   callback(response);
               });

            
            
        };

        return service;
}]);