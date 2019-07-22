

var myApp = angular
    .module("myModule",[])
    .controller("myController", function($scope) {
        
        var dat = [
            {name:"pd",age:21},
            {name:"ravil",age:21}   
        ];

        $scope.dat = dat;
        $scope.rowLimit = 3;

    });



//myApp.controller("myController", myController);



/*
<form id="players" method='POST' action="/players" >
            <div>
                <label>Name:&nbsp;</label>
                <input type="text" name="name">
            </div>
            <br>
            <button type="submit" >Add</button> 
          </form>
    
*/