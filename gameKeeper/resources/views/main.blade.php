<!doctype html>
<html ng-app="myModule">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular.min.js"></script>
    <script src='scripts/game.js'></script>
    <script src='scripts/script.js'></script>

  </head>
  
  <body ng-controller="myController">
    <form id="addingPLayers">
      <label>Player Name <input type="text" ng-model="user" /> </label>
      <button id="addPlayers" ng-click="addPlayer(user)">Add Player</button>
    </form>
    
    <form action="backend.php" method="POST"> 
      <button type="submit" name="regis" id="regis" value="{{ rowArr }}">Done</button>
    </form>

    <h4 ng-repeat="pl in rowArr">{{ pl.pname }} </h4>
    <br><br>
    {{ dre }}
  </body>
</html>
