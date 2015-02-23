angular.module("myApp.factoryBookmarksService", ["firebase"])


.factory('BookmarksService',function($firebase,FIREBASE_URI){
    var ref = new Firebase(FIREBASE_URI+"/bookmarks");
    var sync = $firebase(ref);
    var bookmarks = sync.$asArray();
    
    bookmarks.$
    var getBookmarks = function(){
        return bookmarks;
    };
    
    return{
        getBookmarks: getBookmarks,
    }
    })