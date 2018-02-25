var appX = angular.module('mainApp', []);



appX.controller('app', function($scope) {
    $scope.tasks = [];
    $scope.task = "";

    var taskData = localStorage['tasksList'];

    if (taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    $scope.searchEnter = function(event) {

        if (event.which == 13 && $scope.task != "") {
            $scope.addTask();
        }

    };
    $scope.addTask = function() {
        $scope.tasks.push({ 'taskMessage': $scope.task, 'status': false });
        console.log($scope.tasks)
        $scope.task = '';
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
        console.log(localStorage)
    }

    $scope.contentEdit = function(event, msg) {

        for (var i = 0; i < $scope.tasks.length; i++) {
            if ($scope.tasks[i].taskMessage == msg) {
                $scope.tasks[i].taskMessage = event.target.innerText;
            }
        }


        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
        localStorage['tasksList'] = JSON.stringify($scope.tasks);

    }
    $scope.enterAgain = function(event, msg) {
        if (event.which == 13 && msg != "") {
            $scope.contentEdit(event, msg);
        }
    }

    $scope.saveCheck = function(event, msg) {
        event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
        localStorage['tasksList'] = JSON.stringify($scope.tasks);

    }
});
