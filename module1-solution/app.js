(function () {
    'use strict';

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", ["$scope", function($scope){
            $scope.liststring = new String();
            $scope.items = 0;
            $scope.checkNumberOfItems = function(){
                if($scope.liststring === "")
                {
                    $scope.items = 0;
                    return 0;
                }
                var arrayOfStrings = $scope.liststring.split(",");
                $scope.items = arrayOfStrings.length;
                return $scope.items;
            };
            $scope.sayMessage = function (num) {
                if(num === 0)
                    return "Please enter data first";
                else if(num <= 3)
                {
                    return "Enjoy!";
                }
                else
                  return "Too much!";
            
            };

        }]);

})();