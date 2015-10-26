var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
    
    $scope.friends = ["Gui", "Jared", "Leno", "Mike"];
    
    
    $scope.addFriend = function(name) {
        $scope.friends.push(name);
    };
    
});
    
