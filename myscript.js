$(document).ready(function(){

  var table = document.createElement('table');
  var size = 9;
  var time = 60;

  var score = 0;
  var timer;
  var kutu;

  $(".secim1").css("background", "#e43f5a");
  $(".secim1").click(function(){
    $(".secim1").css("background", "#e43f5a");
    $(".secim2").css("background", "#1f4068");
    $(".secim3").css("background", "#1f4068");
    size = 9;
  });

  $(".secim2").click(function(){
    $(".secim2").css("background", "#e43f5a");
    $(".secim1").css("background", "#1f4068");
    $(".secim3").css("background", "#1f4068");
    size = 16;
  });

  $(".secim3").click(function(){
    $(".secim3").css("background", "#e43f5a");
    $(".secim2").css("background", "#1f4068");
    $(".secim1").css("background", "#1f4068");
    size = 25;
  });
  
  $(".yuksek_skor").text("Yüksek Skor: " + localStorage.getItem("high_score"));
  $(".anlik_skor").text("Skor: " + localStorage.getItem("score"));
  $(".basla").click(function(){
    basla();
    createTable();
  });
  

  function createTable(){
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
  
    kutu = document.querySelectorAll(".ana_kutu")[0];
  
    kutu.style.backgroundColor  = getRandomTDColor(table);
  }
  
  function basla(){
    $(".sure_kapsayan").css("display", "flex");
    $(".ana_kutu").css("display", "block");
    $(".kutular").css("display", "block");
    $(".oyun_oncesi").css("display", "none");

    score = 0;
    $(".skor").text("0");

    timer = setInterval(function(){
      time--;
      if(time < 10){
        $(".sure").text("00:0"+time);
      }else{
        $(".sure").text("00:"+time);
      }
      if(time <= 0){
        finishGame();
      }
  
    },1000);
  }

  function refresh(){
    for (var i = 0; i < size; i++){      
      for(var j = 0; j < size; j++){        
        table.rows[i].cells[j].bgColor = getRandomColor();
      }
    }
    kutu.style.backgroundColor  = getRandomTDColor(table);
  }

  function finishGame(){    
    time = 60;
    localStorage.setItem("score",score);

    if(localStorage.getItem("high_score") < score){
      localStorage.setItem("high_score", score);
    }

    $(".sure_kapsayan").css("display", "none");
    $(".ana_kutu").css("display", "none");
    $(".kutular").css("display", "none");
    $(".oyun_oncesi").css("display", "block");

    $(".yuksek_skor").text("Yüksek Skor: " + localStorage.getItem("high_score"));
    $(".anlik_skor").text("Skor: " + localStorage.getItem("score"));

    clearInterval(timer);
    refresh();
    location.reload();
  }


  function tdclickFunc(x){
    if(x == kutu.style.backgroundColor){
      refresh(); 
      score++;
      $(".skor").text("" + score);
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