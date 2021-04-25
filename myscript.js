$(document).ready(function(){

  var table = document.createElement('table');
  var size = 4;
  var time = 60;

  setInterval(function(){
    time--;
    $(".sure").text(time + "");
    if(time <= 0){
      time = 60;
    }

  },1000);

  for (var i = 0; i < size; i++){ 
    var tr = document.createElement('tr');     
    for(var j = 0; j < size; j++){  

      var td1 = document.createElement('td'); 
      td1.bgColor = getRandomColor();
      var genislik = 500 / size;

      td1.style.width = genislik + "px";
      td1.style.height = genislik + "px";
      
      td1.onclick = function(){ tdclickFunc($(this).css("background-color")); };
    
      tr.appendChild(td1);
        
    }
    
    table.appendChild(tr);
  }
  $(".kutular").append(table);

  var kutu = document.querySelectorAll(".ana_kutu")[0];

  kutu.style.backgroundColor  = getRandomTDColor(table);


  function refresh(){
    for (var i = 0; i < size; i++){      
      for(var j = 0; j < size; j++){        
        table.rows[i].cells[j].bgColor = getRandomColor();      
      }
    }
    kutu.style.backgroundColor  = getRandomTDColor(table);
  }


  function tdclickFunc(x){
    if(x == kutu.style.backgroundColor){
      refresh();
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomTDColor(table){
    var satir = Math.floor(Math.random() * size);
    var sutun = Math.floor(Math.random() * size);

    return table.rows[satir].cells[sutun].bgColor;

  }
    
});