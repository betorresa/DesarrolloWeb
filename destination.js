$(document).ready(function(){
    console.log("El DOM está listo.")
})

$("#paisesD");

// const listaPaises = document.getElementById('listaPaises');
// const selectCountry = document.getElementById('paisesD');

$("#paisesD").ready(function()
{
    console.log($("#paisesD").val())
    mostrarPaises(paises)

}
)
mostrarPaises(paises)

// selectCountry.addEventListener('click', ()=>{
//     console.log(selectCountry.value)
//     mostrarPaises(paises)
// })



function mostrarPaises(array){
    $("#paisesD").html( "<option selected disabled> País </option>")
    array.forEach(country =>{

        $("#paisesD").append(`<option>${country.pais}</option>`)
        
    })
}


function mostrarCiudades(array,array2){
    console.log(array)
    $("#paisesD").change(function(){
        let paisSelect = $("#paisesD option:selected").text()
        console.log("hola1")
        array.forEach(country =>{
            if (country.pais == paisSelect){
                $("#ciudadesD").html( "<option selected disabled> Ciudad </option>")
                country.ciudades.forEach(city =>{
                    $("#ciudadesD").append(`<option>${city}</option>`)
                })
                console.log("hola")
                
                array2.forEach(activity=>{
                    if (paisSelect == activity.pais){
                        $("#tarjetas").append(`
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="images/${activity.imagen}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${activity.nombre}</h5>
                                <p class="card-text">${activity.descripcion}</p>
                                <hr/>
                                <p class="card-text">Precio:$${activity.precio}</p>
                                <a href="#" class="btn btn-primary">Agregar</a>
                            </div>
                        </div>
                        `)
                    }
                })
        }
        })
    console.log("termino")
    })
}


mostrarCiudades(paises, atracciones)



