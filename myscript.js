$(document).ready(function(){

  var table = document.createElement('table');
  for (var i = 0; i < 16; i++){
      
    var tr = document.createElement('tr'); 
      
    for(var j = 0; j < 16; j++){  
  
      var td1 = document.createElement('td');
    
      td1.bgColor = getRandomColor();
      td1.style.width = "20px";
      td1.style.height = "20px";
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