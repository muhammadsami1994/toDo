angular
    .module('StarterApp',['ngRoute','ngMaterial','firebase'])
//angular
//    .module('StarterApp', ['ngMaterial'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/signin.html',
                controller  : 'signInCtrl'
            })

            .when('/signUp', {
                templateUrl : 'views/signup.html',
                controller  : 'signUpCtrl'
            })
            // route for the about page
            .when('/home', {
                templateUrl : 'views/home.html',
                controller  : 'homeCtrl'
            })
            .when('/listPage', {
                templateUrl : 'views/listPage.html',
                controller  : 'listPage'
            })

            // route for the contact page
    });