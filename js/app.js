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
        
        $scope.removeBookmark = function(){
            BookmarksService.removeBookmark($scope.currentBookmark.id);
            $scope.startCreating();
        }
        
        function updateBookmark(bookmark) {
            BookmarksService.updateBookmark(bookmark);
            $scope.editedBookmark = null;
            $scope.isEditing = false;
            $scope.isCreating = true;
        }
        
        $scope.currentCategory = null;
        $scope.currentBookmark = null;
        $scope.editedBookmark = null;
        $scope.editedCategory = null;
        $scope.isCreating = true;
        $scope.isEditing = false;
        $scope.isCreatingCategory = true;
        $scope.isEditingCategory = false;
        
        function startCreating() {
            $scope.isCreating = true;
            $scope.isEditing = false;
        }
        
        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }
        
        function startCreatingCategory() {
            $scope.isCreatingCategory = true;
            $scope.isEditingCategory = false;
        }
        
        function startEditingCategory() {
            $scope.isCreatingCategory = false;
            $scope.isEditingCategory = true;
        }
        
        function shouldShowEditing() {
            return $scope.isEditing;
        }
        
        function shouldShowCreating() {
            return $scope.isCreating;
        }
        
        function shouldShowEditingCategory() {
            return $scope.isEditingCategory;
        }
        
        function shouldShowCreatingCategory() {
            return $scope.isCreatingCategory;
        }
        
        function setCurrentCategory(category) {
            $scope.currentCategory = category;
            $scope.currentBookmark = null;
        }
        
        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
        }
        
        function isCurrentBookmark(bookmark) {
            return $scope.currentBookmark !== null && bookmark.id === $scope.currentBookmark.id;
        }
        
        function setCurrentBookmark(bookmark) {
            $scope.currentBookmark = bookmark;
        }
        
        function setEditedBookmark() {
            $scope.editedBookmark = angular.copy($scope.currentBookmark);
        }
        
        function setEditedCategory() {
            $scope.editedCategory = angular.copy($scope.currentCategory);
        }
        
        function shouldShowBookmark(){
            return $scope.currentBookmark !== null;
        }
        
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.setCurrentBookmark = setCurrentBookmark;
        $scope.setEditedBookmark = setEditedBookmark;
        $scope.startCreating = startCreating;
        $scope.startEditing = startEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;
        $scope.updateBookmark = updateBookmark;
        $scope.isCurrentCategory = isCurrentCategory;
        $scope.isCurrentBookmark = isCurrentBookmark;
        $scope.shouldShowBookmark = shouldShowBookmark;
        $scope.setEditedCategory = setEditedCategory;
        $scope.startCreatingCategory = startCreatingCategory;
        $scope.startEditingCategory = startEditingCategory;
        $scope.shouldShowCreatingCategory = shouldShowCreatingCategory;
        $scope.shouldShowEditingCategory = shouldShowEditingCategory;
        $scope.updateCategory = updateCategory;
})