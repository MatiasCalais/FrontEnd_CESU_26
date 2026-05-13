const Fº = document.getElementById('fahInput');
const Cº = document.getElementById('CelInput');
const ConvertBunton = document.getElementById('convert');


ConvertBunton.addEventListener('click',function(){
  
  
  let F1º = Number(Fº.value);
  let C1º = Number(Cº.value);
  
  
  let Cov = F1º * 2;
  
    
  
  Cº.value = Cov
  
  
  
  
});