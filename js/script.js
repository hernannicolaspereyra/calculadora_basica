let botones = document.querySelectorAll(".boton")
let display = document.getElementById("display")

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        let botonPulsado = boton.textContent

        

        //funcionamiento tecla C
        if (boton.id === "c"){
            display.textContent = 0
            return
        }

        //funcionamiento tecla borar
        if (boton.textContent === "←"){

            if(display.textContent.length === 1){

                display.textContent = "0"


            }else {

                display.textContent = display.textContent.slice(0, -1)

            }
            
            return

        }

        if (boton.id === "igual"){
            try{
                
                display.textContent = eval(display.textContent)

            } catch {
                display.textContent = "error"
            }

            return

        }

        
        //funcionamiento del display
        if (display.textContent === "0") {

            if( display.textContent === "0")

            display.textContent = botonPulsado

        } else {

            display.textContent += botonPulsado

        }

    })
})