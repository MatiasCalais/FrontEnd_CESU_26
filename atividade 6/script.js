const cria =document.getElementById("b");
const btn = document.getElementById("btn");


const estados = {
    normal: "norma.webp",
    bravo : "brav.webp",
    morto: "morte.webp",
    comendo: "come.webp",
    alimento: "CM.webp",
    feliz:"fiz.webp",
}
let contador = 0;
let intervalo = null;
let time_out = null;
let time_click = null;

function controlador() {
    if (intervalo) clearInterval(intervalo)

        intervalo = setInterval(() => {
            contador++;
            
            console.log("tempo: ", contador);
            
            if(contador == 7){
                cria.src = estados.bravo;
            }
            if(contador == 14){
                cria.src = estados.morto;
            }

        },1000);
} 
function alimentar(){
    
    cria.src = estados.comendo;
     contador = 0;

     console.log("comendo");

     if (time_click) clearTimeout(time_click);
        
     time_click = setTimeout(() => {
            cria.src = estados.feliz;

            time_out = setTimeout(() => {
                cria.src = estados.normal;
            },2000);
        },1000);

}



controlador();