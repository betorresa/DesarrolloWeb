$(document).ready(function(){

    var cantidad=0
    $('.quantity-right-plus').click(function(e){
            
        e.preventDefault()
        var cantidad = parseInt($('#quantity').val())
            
                
        $('#quantity').val(cantidad + 1)
    
              
                // Increment
            
    })
    
    $('.quantity-left-minus').click(function(e){
        e.preventDefault()
    
        var cantidad = parseInt($('#quantity').val())
            
        if(cantidad>0){
            $('#quantity').val(cantidad - 1)
        }
    })
    
    $(".btnComprar").click(function (e) { 
        
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        //Animaciòn de respuesta de compra
        $(e.target).parent().slideUp("slow");
    })
})