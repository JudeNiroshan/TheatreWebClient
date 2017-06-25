myApp.controller('SampathBankController',
    ['$scope',
        '$rootScope',
        '$location',
        'MovieService',
        'BookingService',
        'PaymentService',
        'BankService',
        function ($scope, $rootScope, $location, MovieService, BookingService, PaymentService, BankService) {

            $scope.receivedData = PaymentService.get();

            $scope.sampathBankTransaction = function () {
                
                console.log('Going to call the Sampath bank API');
                BankService.sampathBankTransaction($scope.cardNumber, $scope.holderName, $scope.price, $scope.cvc, function(response){

                    if (response.status == 200) {
                        alert('Payment Success!');
                        $location.path('/dashboard');
                    } else {
                        alert('Error Occured! Please contact administrator');
                        $location.path('/dashboard');
                    }
                });
                
            }
        }
    ]
);