{"filter":false,"title":"BookmarksServiceFactory.js","tooltip":"/js/BookmarksServiceFactory.js","undoManager":{"mark":6,"position":6,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":11,"column":6},"action":"insert","lines":["angular.module(\"myApp.factoryBookmarksService\", [\"firebase\"])","","",".factory('BookmarksService',function($firebase,FIREBASE_URI){","    var ref = new Firebase(FIREBASE_URI+\"/bookmarks\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    bookmarks.$","    var getBookmarks = function(){","        return bookmarks;","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":20,"column":6},"action":"insert","lines":["    return{","        getBookmarks: getBookmarks,","        addBookmark: addBookmark,","        removeBookmark: removeBookmark,","        updateBookmark: updateBookmark,","        removeBookmarksForCategory: removeBookmarksForCategory","    }","    })"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":18,"column":62},"action":"remove","lines":["        addBookmark: addBookmark,","        removeBookmark: removeBookmark,","        updateBookmark: updateBookmark,","        removeBookmarksForCategory: removeBookmarksForCategory"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":35},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":35},"end":{"row":14,"column":35},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1424716490569,"hash":"58d70761e17c9182ed7f76d30b0d8d43b9e84be4"}