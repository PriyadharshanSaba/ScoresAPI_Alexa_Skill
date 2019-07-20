

var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope) {
        
        var dat = [
            {name:"pd",age:21},
            {name:"ravil",age:21}   
        ];

        $scope.message = "AngularJS tutorial";
        $scope.dat = dat;
        $scope.limit = 3;

    });


//myApp.controller("myController", myController);
