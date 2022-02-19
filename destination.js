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

function mostrarCiudades(array){
    $("#paisesD").change(function(){
        let paisSelect = $("#paisesD option:selected").text()
        console.log(paisSelect)
        
        array.forEach(country =>{
            console.log(country.pais)
            
            if (country.pais == paisSelect){
                console.log("hola")
                $("#ciudadesD").html( "<option selected disabled> ciudad </option>")
                country.ciudades.forEach(city =>{
                    $("#ciudadesD").append(`<option>${city}</option>`)
                })
                $("#ciudadesD").append(`<option> ${country.pais} </option>`)

        }
        })
    
    console.log("termino")
    })
}

mostrarCiudades(paises)



