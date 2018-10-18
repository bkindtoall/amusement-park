$(document).ready(function() {
  var height = parseInt(prompt("Please enter your height in inches"));
  if (height<=36) {
    $(".carousel").hide();
    $(".condor").hide();
    $(".evolution").hide();
    $(".caterpillar").hide();
    $(".kiddieride").show();
    $(".kiddieride1").css("background-color","yellow");
  } else if (height<=48){
    $(".carousel").hide();
    $(".condor").hide();
    $(".evolution").hide();
    $(".kiddieride").show();
    $(".caterpillar").show();
    $(".kiddieride1").css("background-color","yellow");
    $(".caterpillar1").css("background-color","yellow");
  } else if (height<=52) {
    $(".kiddieride").hide();
    $(".condor").hide();
    $(".evolution").hide();
    $(".caterpillar").show();
    $(".carousel").show();
    $(".caterpillar1").css("background-color","yellow");
    $(".carousel1").css("background-color","yellow");
  } else if (height<=56){
    $(".kiddieride").hide();
    $(".condor").hide();
    $(".caterpillar").hide();
    $(".carousel").show();
    $(".evolution").show();
    $(".carousel1").css("background-color","yellow");
    $(".evolution1").css("background-color","yellow");
  } else {
    $(".kiddieride").hide();
    $(".caterpillar").hide();
    $(".carousel").show();
    $(".evolution").show();
    $(".condor").show();
    $(".carousel1").css("background-color","yellow");
    $(".evolution1").css("background-color","yellow");
    $(".condor1").css("background-color","yellow");
  }
});
