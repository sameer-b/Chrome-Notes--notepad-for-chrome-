$(document).ready(function(){
  $("#showSettings").click(function(){
    $("#wrap").hide(1000);
    $("#settings").show(1000);
  });
});

$(document).ready(function(){
  $("#back").click(function(){
    $("#settings").hide(1000);
    $("#wrap").show(1000);
  });
});