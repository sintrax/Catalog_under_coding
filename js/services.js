myApp.factory('DataService',
              ['$rootScope','$firebaseObject','$firebaseArray','DATA_URL',
        function($rootScope, $firebaseObject, $firebaseArray, DATA_URL){
             var ref = new Firebase(DATA_URL);        
             var dsObj = {
                 getItemsInCategory: function(catid){
                     var obj = $firebaseObject( ref.child('collection').child(catid) );
                     obj.$loaded().
                         then( function(data){
                            $rootScope.genre = data.genre;
                            $rootScope.items = data.items;                         
                         }).//Success
                        catch( function(error){
                            $rootScope.message = error.message;
                        }); //on error
                 }, //get the list of items in category catid
                 getCategories: function(){
                     var arr = $firebaseArray( ref.child('collection'));
                     arr.$loaded().
                         then(function(data){
                            $rootScope.collection = data;    
                        }).//success
                        catch(function(error){
                            $rootScope.message = error.message;
                        });//on error
                     
                 }// get the list of categories
             }; //Data Service Return Object
            
             return dsObj;
}]);//Data Service