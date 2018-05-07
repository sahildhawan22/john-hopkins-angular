 'use strict';
    angular.module("myFirstApp", [])
        .controller("firstController", ["$scope", function ($scope) {
            $scope.name = "Sahil";
            $scope.sayHello = function(){
                return "Hello  Sahil";
            };
        }]);
    