myApp.controller('BookingController',
    ['$scope',
        '$rootScope',
        '$location',
        'MovieService',
        'BookingService',
        function ($scope, $rootScope, $location, MovieService, BookingService) {

            $scope.theatres = [];
            $scope.movies = [];
            $scope.showtimes = [];
            $scope.selectedSeats = [];

            //Fetch all theater data from the REST API
            MovieService.getTheaterData(function (response) {
                if (response.status == 200) {
                    $scope.theatres = response.data;
                } else {

                }
            });


            $scope.getTheatreMovies = function () {

                MovieService.getMovieDataByTheaterId($scope.selectedTheatre.id, function (response) {
                    if (response.status == 200) {
                        $scope.movies = response.data;
                    } else {

                    }
                });
            }

            $scope.getMovieShowTimes = function () {

                MovieService.getMovieShowTimesByTheaterIdMovieId($scope.selectedTheatre.id, $scope.selectedMovie.id, function (response) {
                    if (response.status == 200) {
                        $scope.showtimes = response.data;
                        console.log(JSON.stringify(response.data));
                    } else {

                    }
                });
            }


            $scope.saveBooking = function () {

                MovieService.saveBooking($scope.selectedTheatre, $scope.selectedMovie, $scope.selectedDate, $scope.selectedSeats, function (response) {
                    if (response.status == 200) {
                        BookingService.set(response.data);
                        $location.path('/payment');
                    } else {

                    }
                });
            }
        }
    ]
);