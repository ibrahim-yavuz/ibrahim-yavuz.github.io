$(document).ready(function(){

  var table = document.createElement('table');
  for (var i = 0; i < 9; i++){
      
    var tr = document.createElement('tr'); 
      
    for(var j = 0; j < 9; j++){  
  
      var td1 = document.createElement('td');
      td1.style.color = "Yellow";
      tr.appendChild(td1);
        
    }
    
    table.appendChild(tr);
  }
  document.body.appendChild(table);


  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    
});