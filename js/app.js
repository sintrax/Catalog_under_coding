var myApp = angular.module('webApp', [
    'ngRoute',
    'ngSanitize',
    'firebase'
]).
constant('DATA_URL', 'https://music-catalog-simo.firebaseio.com/'); //[] - се зависмости, т.е. други модули


myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'views/list-categories.html',
            controller: 'CategoriesController'
        }).
        when('/items/:catidx',{
            templateUrl: 'views/list-items.html',
            controller: 'ItemsController'
        }).
        when('/item/:id',{
            tempalteUrl: 'views/item-details.html',
            controller:  'ItemDetailsController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]); //application routing