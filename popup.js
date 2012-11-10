
var data;

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


function grabInfo()
{
data = document.getElementById("notes").value;
data=data.replace("<","&lt;");
data=data.replace(">","&gt;");

if(localStorage.loc1==undefined)

{
	localStorage.loc1=data;
} else
 if(localStorage.loc1!==undefined && localStorage.loc2==undefined)
 { 
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3==undefined)
 {
 	localStorage.loc3=localStorage.loc2;
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4==undefined)
 {
 	localStorage.loc4=localStorage.loc3;
 	localStorage.loc3=localStorage.loc2;
 	localStorage.loc2=localStorage.loc1;
 	localStorage.loc1=data;
 } else
 if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5==undefined)
{
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
} else
if (localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6==undefined) {
  localStorage.loc6=localStorage.loc5; 
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
} else
if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6!==undefined&&localStorage.loc7==undefined)
{
  localStorage.loc7=localStorage.loc6;
  localStorage.loc6=localStorage.loc5;
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
} else
if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6!==undefined&&localStorage.loc7!==undefined&&localStorage.loc8==undefined)
{

  localStorage.loc8=localStorage.loc7;
  localStorage.loc7=localStorage.loc6;
  localStorage.loc6=localStorage.loc5;
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
}
else
if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6!==undefined&&localStorage.loc7!==undefined&&localStorage.loc8!==undefined&&localStorage.loc9==undefined)
{
  localStorage.loc9=localStorage.loc8;
  localStorage.loc8=localStorage.loc7;
  localStorage.loc7=localStorage.loc6;
  localStorage.loc6=localStorage.loc5;
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
}else
if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6!==undefined&&localStorage.loc7!==undefined&&localStorage.loc8!==undefined&&localStorage.loc9!==undefined&&localStorage.loc10==undefined)
{localStorage.loc10=localStorage.loc9;
  localStorage.loc9=localStorage.loc8;
  localStorage.loc8=localStorage.loc7;
  localStorage.loc7=localStorage.loc6;
  localStorage.loc6=localStorage.loc5;
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
}


else

if(localStorage.loc1!==undefined && localStorage.loc2!==undefined && localStorage.loc3!==undefined && localStorage.loc4!=undefined && localStorage.loc5!==undefined&&localStorage.loc6!==undefined&&localStorage.loc7!==undefined&&localStorage.loc8!==undefined&&localStorage.loc9!==undefined&&localStorage.loc10!==undefined)
{
localStorage.loc10=localStorage.loc9;
localStorage.loc9=localStorage.loc8;
  localStorage.loc8=localStorage.loc7;
  localStorage.loc7=localStorage.loc6;
  localStorage.loc6=localStorage.loc5;
  localStorage.loc5=localStorage.loc4;
  localStorage.loc4=localStorage.loc3;
  localStorage.loc3=localStorage.loc2;
  localStorage.loc2=localStorage.loc1;
  localStorage.loc1=data;
}

getInfo();
}


document.addEventListener('DOMContentLoaded', function () {
document.getElementById('button').addEventListener('click', clickHandler);
});

document.addEventListener('DOMContentLoaded', function () { 
bodyOnLoad();
});

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close1').addEventListener('click', close1s);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close2').addEventListener('click', close2);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close3').addEventListener('click', close3);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close4').addEventListener('click', close4);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close5').addEventListener('click', close5);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close6').addEventListener('click', close6);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close7').addEventListener('click', close7);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close8').addEventListener('click', close8);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close9').addEventListener('click', close9);
});
document.addEventListener('DOMContentLoaded', function () {
document.getElementById('close10').addEventListener('click', close10);
});

document.addEventListener('DOMContentLoaded', function () {
document.getElementById('flush').addEventListener('click', flushNotes);
});

function clickHandler() {
  grabInfo();
}

function bodyOnLoad() 
{
  getInfo();
}

function close1s(){
 if(localStorage.loc1!==undefined)
  { 
    localStorage.loc1=localStorage.loc2;
    localStorage.loc2=localStorage.loc3;
    localStorage.loc3=localStorage.loc4;
    localStorage.loc4=localStorage.loc5;
    localStorage.loc5=localStorage.loc6;
    localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close2(){
    if(localStorage.loc2!==undefined)
  {  
    localStorage.loc2=localStorage.loc3;
    localStorage.loc3=localStorage.loc4;
    localStorage.loc4=localStorage.loc5;
    localStorage.loc5=localStorage.loc6;
    localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close3(){
    if(localStorage.loc3!==undefined)
  { localStorage.loc3=localStorage.loc4;
    localStorage.loc4=localStorage.loc5;
    localStorage.loc5=localStorage.loc6;
    localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close4(){
  if(localStorage.loc4!==undefined)
  { localStorage.loc4=localStorage.loc5;
    localStorage.loc5=localStorage.loc6;
    localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close5(){
   if(localStorage.loc5!==undefined)
  { localStorage.loc5=localStorage.loc6;
    localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close6(){
 if(localStorage.loc6!==undefined)
  { localStorage.loc6=localStorage.loc7;
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close7(){
if(localStorage.loc7!==undefined)
  {
    localStorage.loc7=localStorage.loc8;
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close8(){
  if(localStorage.loc8!==undefined)
  {
    localStorage.loc8=localStorage.loc9;
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close9(){
  if(localStorage.loc9!==undefined)
  {
    localStorage.loc9=localStorage.loc10;
    localStorage.loc10='';
    getInfo();
  }
}
function close10(){
  if(localStorage.loc10!==undefined)
  {
    localStorage.loc10='';
    getInfo();
  }
}

function flushNotes()
{
  {

var r=confirm("Are you sure you want to delete all notes?");
if (r==true)
  {
   localStorage.loc10='';
   localStorage.loc9='';
   localStorage.loc8='';
   localStorage.loc7='';
   localStorage.loc6='';
   localStorage.loc5='';
   localStorage.loc4='';
   localStorage.loc3='';
   localStorage.loc2='';
   localStorage.loc1='';

  }

}
}