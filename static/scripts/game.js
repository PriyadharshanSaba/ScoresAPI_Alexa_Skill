

var app = angular.module("myModule",[])
    
app.controller("myController", function($scope) {

        $scope.data = [
            {name:"pd",age:21},
            {name:"ravil",age:21}   
        ];

        $scope.rowLimit = 3;
        
        $scope.rowArr = [
            {col:'1',pname:'PD'},
            {col:'2',pname:"Ramya"}
        ];

        $scope.addPlayer = function(user){
            var pno= $scope.rowArr.length +1;
            //$scope.rowArr.push({'col':'p'+pno})
            $scope.rowArr.push({col:pno,pname:user})
        };
    
    });



//myApp.controller("myController", myController);
