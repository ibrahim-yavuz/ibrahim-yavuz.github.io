$(document).ready(function(){

  var table = document.createElement('table');
  for (var i = 0; i < 16; i++){
      
    var tr = document.createElement('tr'); 
      
    for(var j = 0; j < 16; j++){  
  
      var td1 = document.createElement('td');
    
      td1.bgColor = getRandomColor();
      td1.style.width = "30px";
      td1.style.height = "30px";
      
      td1.onclick = function(){ tdclickFunc(this); };
      td1.onmouseover = function(){ tdOnMouseOver(this); };
      td1.onmouseleave = function(){ tdOnMouseLeave(this); };
    
      tr.appendChild(td1);
        
    }
    
    table.appendChild(tr);
  }
  document.body.appendChild(table);

  function tdclickFunc(x){
    alert("Merhaba");
  }

  function tdOnMouseOver(x){
    x.style.opacity = "0.5";
  }

  function tdOnMouseLeave(x){
    x.style.opacity = "1";
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
    
});