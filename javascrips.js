let paginas=1


document.addEventListener('DOMContentLoaded',function(){
    iniciarapp()
});

function iniciarapp(){

    mostrarseccion()
    inicando()

}
function mostrarseccion() {
    const seccion =document.querySelector(`#paso-${paginas}`)
    seccion.classList.add('mostrar')
 
    
}





function inicando() {
    const capas =document.querySelectorAll('.capas1')
    capas.forEach( capa=>{
        capa.addEventListener('click',function(e){
            e.preventDefault()

        
            if(e.target.tagName === "P" ){
                   paginas=parseInt(e.target.parentElement.dataset.paso)

            }
                else{
                    paginas=parseInt(e.target.dataset.paso)
            }
          const agregar =document.querySelector(`#paso-${paginas}`)
              
          document.querySelector('.mostrar').classList.remove('mostrar')

          agregar.classList.add('mostrar')

             
          

        })

    })
}




