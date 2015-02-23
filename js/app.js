angular.module('myApp',[])

.config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
            .state('bookmark', {
                url: '/bookmark',
                templateUrl: 'templates/bookmark.html'
            })
          $urlRouterProvider.otherwise('/bookmark');
    })
    
.constant('FIREBASE_URI', 'https://projekt2-pokrywka.firebaseio.com/')

.controller('MainCtrl', function($anchorScroll, $location, $scope){
       
       

    
        $scope.gotoAnchor = function(x) {
          var newHash = 'anchor' + x;
          if ($location.hash() !== newHash) {
            $location.hash('anchor' + x);
          } else {
            $anchorScroll();
          }
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