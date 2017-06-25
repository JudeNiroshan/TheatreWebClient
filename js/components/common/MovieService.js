

myApp.factory('MovieService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
        function ($http, $cookieStore, $rootScope, $timeout) {
            var service = {};

            service.getTheaterData = function (callback) {

                $http({
                    method: "GET",
                    url: SERVER_PATH + '/rest' + '/theater',
                    dataType: 'json',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    callback(response);
                });

            };

            service.getMovieDataByTheaterId = function (theaterId, callback) {

                $http({
                    method: "GET",
                    url: SERVER_PATH + '/rest' + '/movieTheater/' + theaterId + '/movie',
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
                    method: "GET",
                    url: SERVER_PATH + '/rest' + '/showtime/' + theaterId + '/' + movieId,
                    dataType: 'json',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    callback(response);
                });

            };



            // service.getAvailableSeats = function (theaterId, movieId, date, callback) {

            //        $http({
            //             method : "POST",
            //             url : SERVER_PATH + '/showtime/' + theaterId + '/' + movieId + '/' + date,
            //             dataType: 'json',
            //             data: {theaterId, movieId, date},
            //             headers: {
            //                     "Content-Type": "application/json"
            //                 }
            //         }).then(function (response) {
            //            callback(response);
            //        });

            // };


            service.saveBooking = function (tId, mId, date, seats, callback) {

                $http({
                    method: "POST",
                    url: SERVER_PATH + '/sampathbank' + '/booking' + '/createData',
                    dataType: 'json',
                    data: {
                        theatre: tId,
                        movie: mId,
                        bookingDate: date,
                        numberOfSeats: seats
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    callback(response);
                });
            };

            return service;
        }]);