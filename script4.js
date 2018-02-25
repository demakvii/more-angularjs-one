var app = angular.module('mainApp', []);

app.provider('date', function() {
    var greet;
    return {

        setGreeting: function(value) {
            greet = value;
        },
        $get: function() {
            return {
                showDate: function() {
                    var date = new Date();
                    return greet + " Its " + date.getHours();
                },
                devshowDate: function() {
                    var date = new Date();
                    return date.getHours();
                }
            }
        }
    }
});


app.config(function(dateProvider) {
    var time = dateProvider.$get().devshowDate();
    if (time > 0 && time <= 12)
        dateProvider.setGreeting('Good Morning!');
    else if (time > 12 && time < 17)
        dateProvider.setGreeting('Good day!');
    else if (time > 17 && time < 19)
        dateProvider.setGreeting('Good evening!');
    else
        dateProvider.setGreeting('Good Night!');

});


app.controller('app', function($scope, date) {
    $scope.greetMessage = date.showDate();
});
