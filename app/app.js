var app = angular.module('ConsoleApplication', ['ngMaterial']);

app.controller('app', ['$scope', '$mdSidenav', function( $scope ){
    $scope.connection = {
        hostname: 'localhost',
        port: 8080,
        context: '/operations',
        username: ' ',
        password: ' ',
        secure: true,

        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043'
    };
}]);
