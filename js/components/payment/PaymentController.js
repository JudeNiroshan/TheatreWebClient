myApp.controller('PaymentController',
    ['$scope',
        '$rootScope',
        '$location',
        'MovieService',
        'BookingService',
        function ($scope, $rootScope, $location, MovieService, BookingService) {

            $scope.receivedData = BookingService.get();

            $scope.tName = $scope.receivedData.theater.name;
            $scope.mName = $scope.receivedData.movie.name;
            $scope.date = $scope.receivedData.bookingDate;
            $scope.timeslot = '7:00';
            $scope.seatCount = $scope.receivedData.seat.seatNo;
            $scope.price = $scope.seatCount * $scope.receivedData.seat.price;
        }
    ]
);