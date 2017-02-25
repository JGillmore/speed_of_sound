var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginController"
    }).when("/home", {
        templateUrl: "partials/index.html",
        controller: "HomeController"
    })
});
