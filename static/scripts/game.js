

var app = angular.module("myModule",[])
    
app.controller("myController", function($scope,$http) 
{
        $scope.data = [
            {name:"pd",age:21},
            {name:"ravil",age:21}   
        ];

        $scope.rowLimit = 3;
        
        $scope.rowArr = [
            {col:1,pname:'PD'},
            {col:2,pname:"Ramya"}
        ];

        $scope.addPlayer = function(user)
        {
            var pno= $scope.rowArr.length +1;
            //$scope.rowArr.push({'col':'p'+pno})
            $scope.rowArr.push({col:pno,pname:user})
        };

        var dre = $scope.rowArr;
        
        $scope.subpl = function (plData) {
            var plData = plData;
            $http.post('/players', JSON.stringify(plData)).then(function (response) {
                if (response)
                $scope.msg = "Post Data Submitted Successfully!";
                }, function (response) {
                $scope.msg = "Service not Exists";
                $scope.statusval = response.status;
                $scope.statustext = response.statusText;
                $scope.headers = response.headers();
        });

        amplify.store("PlData", dre);
    };
    });

