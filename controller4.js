var fileX = {

    "records": [{
            "Name": "Mayur",
            "Age": "21",
            "Fav_color": 'Red'
        }, {
            "Name": "Mak",
            "Age": "20",
            "Fav_color": 'Blue'
        }, {
            "Name": "Akshay",
            "Age": "24",
            "Fav_color": 'Green'
        }, {
            "Name": "Ronaldo",
            "Age": "29",
            "Fav_color": 'White'
        }, {
            "Name": "Unknown",
            "Age": "17",
            "Fav_color": 'Black'
        }


    ]

};




var app = angular.module('mainApp', []);

app.controller('people', function($scope) {
    $scope.persons = fileX.records;
});
