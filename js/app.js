angular.module('myApp',["ui.router", "myApp.factoryBookmarksService","myApp.factoryCategoriesService"])

.config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('bookmark', {
                url: '/bookmark',
                templateUrl: 'templates/bookmark.html'
            })
          $urlRouterProvider.otherwise('/bookmark');
    })
    
.constant('FIREBASE_URI', 'https://projekt2-pokrywka.firebaseio.com/')

.controller('MainCtrl', function($anchorScroll, $location, $scope,  CategoriesService, BookmarksService){
       
       

    
        $scope.gotoAnchor = function(x) {
          var newHash = 'anchor' + x;
          if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
          } else {
            $anchorScroll();
          }
        }
        
        $scope.categories = CategoriesService.getCategories();
        $scope.bookmarks = BookmarksService.getBookmarks();
        
        $scope.addCategory = function(category){
            CategoriesService.addCategory(category);
        }
        
         $scope.removeCategory = function(){
            CategoriesService.removeCategory($scope.currentCategory.name);
            BookmarksService.removeBookmarksForCategory($scope.currentCategory);
        }
        
        $scope.addBookmark = function(bookmark){
            BookmarksService.addBookmark(bookmark);
        }
        
        
        $scope.currentCategory = null;
        $scope.currentBookmark = null;
        $scope.editedBookmark = null;
        $scope.editedCategory = null;
        $scope.isCreating = true;
        $scope.isEditing = false;
        $scope.isCreatingCategory = true;
        $scope.isEditingCategory = false;
        
         function shouldShowBookmark(){
            return $scope.currentBookmark !== null;
        }
        $scope.shouldShowBookmark = shouldShowBookmark;
})