
myApp.controller('CategoriesController', ['$scope','DataService',
                    function($scope, DataService){
                        DataService.getCategories(); 
}]); // Categories

myApp.controller('ItemsController',
                 ['$scope','$routeParams','DataService','$sce', 
                    function($scope, $routeParams, DataService, $sce){
                        var cid = $routeParams.catidx;
                        if ( cid >= 0 )
                        {
                            DataService.getItemsInCategory(cid);        
                        }
                        
                         
}]); // Items Controller

myApp.controller('ItemDetailsController',
                 ['$scope','$routeParams','DataService','$sce', 
                    function($scope, $routeParams, DataService, $sce){
                       
}]); // Item Details Controller