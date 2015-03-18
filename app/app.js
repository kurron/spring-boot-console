var app = angular.module('ConsoleApplication', ['ngMaterial']);

app.controller('app', ['$scope', '$mdSidenav', function( $scope ){
    $scope.connection = {
        hostname: 'localhost',
        port: 8080,
        context: '/operations',
        username: ' ',
        password: ' ',
        secure: false,
        autoconfig: true,
        beans: true,
        configprops: true,
        dump: true,
        env: true,
        health: true,
        info: true,
        metrics: true,
        mappings: true,
        trace: true
    };
}]);
