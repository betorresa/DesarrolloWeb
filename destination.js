const listaPaises = document.getElementById('listaPaises');
const selectCountry = document.getElementById('paisesD');

selectCountry.addEventListener('click', ()=>{
    console.log(selectCountry.value)
    mostrarPaises(paises)
})

mostrarPaises(paises)

function mostrarPaises(array){
    listaPaises.innerHTML= "";
    array.forEach(country =>{
        let div = document.createElement('a')
        div.href = '#'
        div.innerHTML = `
                        ${country.pais}
                              `
        listaPaises.appendChild(div)
    })
}

