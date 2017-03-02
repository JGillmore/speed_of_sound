var app = angular.module("app", ["ngRoute",'angularSoundManager', 'ngFileUpload']);

app.config(function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginController"
    }).when("/upload", {
        templateUrl: "partials/uploadSong.html",
        controller: "UploadController"
    }).when("/myPlaylists", {
        templateUrl: "partials/myPlaylists.html",
        controller: "PlaylistController"
    }).when("/profile", {
        templateUrl: "partials/profile.html",
        controller: "IndexController"
    }).when("/register", {
        templateUrl: "partials/register.html",
        controller: "LoginController"
    }).otherwise({
        templateUrl: "partials/index.html",
        controller: "IndexController"
    })
});
