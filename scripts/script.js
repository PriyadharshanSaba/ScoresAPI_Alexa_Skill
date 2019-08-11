$(document).ready(function(){
    $('players').on('submit', function(){
        var name = $('name');
        var received = {name: name.val()};
        $.ajax({
          type: 'POST',
          url: '/players',
          data: received,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
        return false;
  
    });
 
});


