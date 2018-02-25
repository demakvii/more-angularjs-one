var app = angular.module('mainApp', []);
app.service('fromService', function() {
    this.message = "This is from Service!";
});
//in factory u have to return object n can't use this
app.factory('fromFactory', [function() {

    var factory = {};
    factory.message = "This is from factory!";
    return factory;
}]);

app.provider('fromProvider', function() {
    m1 = "This is from Provider!";
    return {
        setAName: function(name) {
            m1 += " " + name;
        },
        $get: function() {
            return {
                message: m1
            }
        }
    }


    /*

this.m1 = "This is from Provider!";
    this.$get: function() {
            return {
                message:this.m1;
            }
        }
    

    */
});

app.controller('app', function($scope, fromService, fromFactory, fromProvider) {

    $scope.greetMessage = [fromService.message, fromProvider.message, fromFactory.message];

});
//provider_name[Provider]
app.config(function(fromProviderProvider) {
    fromProviderProvider.setAName('mayur');
});
