const Fah = document.getElementById('fahInput');
const Cel = document.getElementById('CelInput');

;


Cel.addEventListener('input',function(){
  if(Cel.value === ""){
    Fah.value ="";
    return 0;    
  }
 let c = parseFloat(Cel.value);
   let f = (c * 9 / 5) + 32;
  
  Fah.value = f.toFixed(2);
});


Fah.addEventListener('input',function(){
  if(Fah.value === ""){
    Cel.value ="";
    return 0;    
  }
 let f = parseFloat(Fah.value);
   let c = (f - 32) * 5/9;
  
  Cel.value = c.toFixed(2);
});
