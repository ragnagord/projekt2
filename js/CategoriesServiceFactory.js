angular.module("myApp.factoryCategoriesService", ["firebase"])

.factory('CategoriesService',function($firebase,FIREBASE_URI){
    var ref = new Firebase(FIREBASE_URI+"/categories");
    var sync = $firebase(ref);
    var categories = sync.$asArray();
    
    var getCategories = function(){
        return categories;
    };
    
        return{
        getCategories: getCategories,

    }
})