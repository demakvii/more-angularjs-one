var appX = angular.module('mainApp', []);
appX.controller('app', function($scope,$roo) {

    $scope.show = 'msg1';
    $scope.toggle = function() {
        $scope.show = $scope.show == 'msg1' ? 'msg2' : 'msg1';
    }
});
