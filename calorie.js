    function calsPerDay() {
      function find(id) { return document.getElementById(id) }

      var age = find("age").value;
      var height = find("height").value ;
      var weight = find("weight").value ;
      var result = 0;
      var value=find("exercise").value;
      res=0;
      if (find("male").checked) {
        result = (13.397*weight) + (4.799*height) - (5.677*age) + 88.362;
      }
      else if (find("female").checked){
        result = (9.247*weight) + (3.098*height) - (4.330*age) + 447.593;
      }
      find("totalCals").innerHTML = Math.round( result )+"calories/day";

       if (value==1){
         res=1.3*result;
       }
       else if (value==2){
         res=1.55*result;
       }
       else if (value==3){
         res=1.65*result;
       }
       else if (value==4){
         res=1.80*result;
       }
       else if (value==5){
         res=2.00*result;
       }
       find("netCals").innerHTML=Math.round(res)+"calories/day";
    }





function addele(string,fat,carb,protein) {
  if ((string == "")||(fat==0)||(carb==0)){
    console.log("Field cannot be empty");
  }
  else {
    var text = document.createTextNode(string);
    var F=document.createTextNode(fat);
    var C=document.createTextNode(carb);
    var P=document.createTextNode(protein);
    var delbutton = document.createElement("button");
    var delbutton1=document.createElement("button");
    var delbutton2=document.createElement("button");
    var delbutton3=document.createElement("button");
    delbutton.innerHTML = 'delete';
    delbutton.onclick = function() {
      console.log("delbutton pressed");
      this.parentElement.parentElement.removeChild(delbutton.parentElement);
    }
    delbutton1.innerHTML = 'delete';
    delbutton1.onclick = function() {
      console.log("delbutton1 pressed");
      this.parentElement.parentElement.removeChild(delbutton1.parentElement);
    }
    delbutton2.innerHTML = 'delete';
    delbutton2.onclick = function() {
      console.log("delbutton1 pressed");
      this.parentElement.parentElement.removeChild(delbutton2.parentElement);
    }
    delbutton3.innerHTML = 'delete';
    delbutton3.onclick = function() {
      console.log("delbutton1 pressed");
      this.parentElement.parentElement.removeChild(delbutton3.parentElement);
    }
    var note = document.createElement("li");
    var x=document.createElement("li");
    var y=document.createElement("li");
    var z=document.createElement("li");
   
    note.appendChild(text);
    note.appendChild(delbutton2);
    noteList.appendChild(note);

    x.appendChild(F);
    x.appendChild(delbutton1);
    fatList.appendChild(x);

    y.appendChild(C);
    y.appendChild(delbutton);
    carbList.appendChild(y);


    z.appendChild(P);
    z.appendChild(delbutton3);
    proteinList.appendChild(z);
    console.log("memo added successfully");
  }
}

function Compare(){
    
    function fats(){
    var list=document.getElementsByTagName("ol")[1];
    var x=list.getElementsByTagName('li').length;
    var sum=0;

    for (var i=0;i<x;i++){
        sum=sum+parseInt(list.getElementsByTagName("li")[i].innerText);
    }
    return sum;
  }
  function carbs(){
    var list=document.getElementsByTagName("ol")[2];
    var x=list.getElementsByTagName('li').length;
    var sum=0;

    for (var i=0;i<x;i++){
        sum=sum+parseInt(list.getElementsByTagName("li")[i].innerText);
    }
    return sum;
  }
  
  function proteins(){
    var list=document.getElementsByTagName("ol")[3];
    var x=list.getElementsByTagName('li').length;
    var sum=0;

    for (var i=0;i<x;i++){
        sum=sum+parseInt(list.getElementsByTagName("li")[i].innerText);
    }
    return sum;
  }
  
  var sumProteins=proteins();
  var sumFats=fats();
  var sumCarb=carbs();
  var cal=0
  cal=(sumProteins*4)+(sumCarb*4)+(sumFats*9);

  if (cal<res){
    
    document.getElementById("message").innerHTML="Insufficient Calories";
     alert("Calorie intake is lesser than minimum requirement");
    
  }
  else if ((cal>=res)&&(cal<10000)){

    document.getElementById("message").innerHTML="Sufficient Calorie Intake";
    return false;
  }
  else{
    alert("Calorie intake has exceeded 10k calories");
    document.getElementById("message").innerHTML="Excess calorie intake";

  }
}
var res=0;
document.getElementById("calculate").addEventListener("click",function(){
  calsPerDay();
});
noteList = document.getElementById("notes");
fatList=document.getElementById("fat");
carbList=document.getElementById("carb");
proteinList=document.getElementById("protein");
document.getElementById("add").addEventListener("click", function() {
  var food = document.getElementById("memo").value;
  var fat=document.getElementById("fats").value;
  var carb=document.getElementById("carbs").value;
  var protein=document.getElementById("proteins").value;
  addele(food,fat,carb,protein);
});

document.getElementById("test").addEventListener("click",function(){
  Compare();
});
  

