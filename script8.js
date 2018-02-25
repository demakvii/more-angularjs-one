var app = angular.module('mainApp', []);


app.filter('base', function() {

    var something = function(input, base) {

        var parsed = parseInt(input, 10);
        var based = parseInt(base, 10);

        if (isNaN(parsed) || isNaN(based) || based<=1 || based>=37) return 'Error!! Invalid base';


        return parsed.toString(based);
    }
    return something;

});
app.controller('app', function() {});
