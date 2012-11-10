function getInfo()
{
if(localStorage.loc1==undefined)
{
  localStorage.loc1='';
}  
if(localStorage.loc2==undefined)
{
  localStorage.loc2='';
}  
if(localStorage.loc3==undefined)
{
  localStorage.loc3='';
}  
if(localStorage.loc4==undefined)
{
  localStorage.loc4='';
}  
if(localStorage.loc5==undefined)
{
  localStorage.loc5='';
}  
if(localStorage.loc6==undefined)
{
  localStorage.loc6='';
}  
if(localStorage.loc7==undefined)
{
  localStorage.loc7='';
}  
if(localStorage.loc8==undefined)
{
  localStorage.loc8='';
}  
if(localStorage.loc9==undefined)
{
  localStorage.loc9='';
}  
if(localStorage.loc10==undefined)
{
  localStorage.loc10='';
}  
document.getElementById("result1").innerHTML=" " + localStorage.loc1;
document.getElementById("result2").innerHTML=" " + localStorage.loc2;
document.getElementById("result3").innerHTML=" " + localStorage.loc3;
document.getElementById("result4").innerHTML=" " + localStorage.loc4;
document.getElementById("result5").innerHTML=" " + localStorage.loc5;
document.getElementById("result6").innerHTML=" " + localStorage.loc6;
document.getElementById("result7").innerHTML=" " + localStorage.loc7;
document.getElementById("result8").innerHTML=" " + localStorage.loc8;
document.getElementById("result9").innerHTML=" " + localStorage.loc9;
document.getElementById("result10").innerHTML="  " + localStorage.loc10;
}

$(document).ready(function(){
  $("#showSettings").click(function(){
    $("#wrap").hide(1000);
    $("#settings").show(1000);
     getInfo();
  });
});

$(document).ready(function(){
  $("#back").click(function(){
    $("#settings").hide(1000);
    $("#wrap").show(1000);
     getInfo();
  });
});

