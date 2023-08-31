(function () {
    "use strict";
    angular
        .module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope) {
        $scope.foods = "";
        $scope.messageToShow = "";

        $scope.checkTooMuch = function () {
            var menu = $scope.foods;
            var listOfFoods = menu.split(",");

            var listArrange = listOfFoods.filter(function (food) {
                return food.trim() !== "";
            });

            if (listArrange.length === 0) {
                $scope.changeColor = "red";
                $scope.messageToShow = "Please enter data first";
            } else if (listArrange.length <= 3) {
                $scope.changeColor = "#32CD32";
                $scope.messageToShow = "Enjoy!";
            } else {
                $scope.changeColor = "#32CD32";
                $scope.messageToShow = "Too much!";
            }
        };
    }
})();
