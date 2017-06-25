myApp.factory('BankService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
        function ($http, $cookieStore, $rootScope, $timeout) {

            var service = {};

            
            service.sampathBankTransaction = function (cNO, name, price, cvc, callback) {

                $http({
                    method: "POST",
                    url: SERVER_PATH + '/sampathbank' + '/payment' + '/chargeMoney',
                    dataType: 'json',
                    data: {
                        cCNumber: tId,
                        owner: mId,
                        amount: date,
                        cvcNumber: seats
                    },
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function (response) {
                    callback(response);
                });
            };

            return service;
        }
    ]
);