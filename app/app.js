var app = angular.module('ConsoleApplication', ['ngMaterial']);

app.controller('app', ['$scope', '$mdSidenav', function( $scope ){
    $scope.connection = {
        hostname: 'localhost',
        port: 8080,
        context: '/operations',
        username: ' ',
        password: ' ',
        secure: false
    };
}]);
