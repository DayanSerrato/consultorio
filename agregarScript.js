function agregar () {
    //capturo valores de los campos en el documento  html
    var datos={

        id:$("#numId").val(),
        nombre:$("#nombre").val(),
        edad:$("#edad").val(),
        ciudad:$("#ciudad").val(),
        salario:$("#salario").val(),

    }

    //convertimos a JSON

    let datospeticion=JSON.stringify(datos);

    // hacemos peticion Ajax

    $.ajax({
        url:"https://g9fad60bbd39894-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/empleado/empleado",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JASON",

        success:function (respuesta){
            console.log("Insertado");
            listar();
        },

        error:function(xhr, status){
            console.log(status);
        }
    });

}