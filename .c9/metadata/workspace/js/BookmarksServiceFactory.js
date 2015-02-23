{"filter":false,"title":"BookmarksServiceFactory.js","tooltip":"/js/BookmarksServiceFactory.js","undoManager":{"mark":11,"position":11,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":11,"column":6},"action":"insert","lines":["angular.module(\"myApp.factoryBookmarksService\", [\"firebase\"])","","",".factory('BookmarksService',function($firebase,FIREBASE_URI){","    var ref = new Firebase(FIREBASE_URI+\"/bookmarks\");","    var sync = $firebase(ref);","    var bookmarks = sync.$asArray();","    ","    bookmarks.$","    var getBookmarks = function(){","        return bookmarks;","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":20,"column":6},"action":"insert","lines":["    return{","        getBookmarks: getBookmarks,","        addBookmark: addBookmark,","        removeBookmark: removeBookmark,","        updateBookmark: updateBookmark,","        removeBookmarksForCategory: removeBookmarksForCategory","    }","    })"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":18,"column":62},"action":"remove","lines":["        addBookmark: addBookmark,","        removeBookmark: removeBookmark,","        updateBookmark: updateBookmark,","        removeBookmarksForCategory: removeBookmarksForCategory"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":35},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":4},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":4},"end":{"row":16,"column":6},"action":"insert","lines":["var addBookmark = function(bookmark){","        bookmark.id = bookmarks.length;","        bookmarks.$add(bookmark); ","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":35},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":8},"end":{"row":20,"column":33},"action":"insert","lines":["addBookmark: addBookmark,"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":33},"end":{"row":20,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1424718333047,"hash":"c4b857c6c3f7cb0ed1642611f317e7bd37b80c6c"}