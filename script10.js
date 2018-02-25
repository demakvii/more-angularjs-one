var app = angular.module('mainApp',[]);

app.directive('myFirstScript', function() {

    return {
    	// templateUrl :
    	template: 'Hello World!',
    	restrict: 'EA'
    	
    };
});
app.controller('app',function(){});