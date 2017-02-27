var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginController"
    }).when("/register", {
        templateUrl: "partials/register.html",
        controller: "LoginController"
    }).otherwise("/", {
        templateUrl: "partials/index.html",
        controller: "IndexController"
    })
});
