var app = angular.module('mainApp', []);

app.controller('app', function($scope) {
    $scope.counter = -1;
    $scope.$watch('myText', function(newValue, oldValue) {
        // console.log('New value: ' + newValue);
        // console.log('Old value: ' + oldValue);
        $scope.counter++;
    });
});