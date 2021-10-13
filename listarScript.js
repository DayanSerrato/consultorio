function listar(){
    $.ajax({
        url:"https://g9fad60bbd39894-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/empleado/empleado",
        data:datosPeticion,
        type:'GET',
        datatType:'jason',
    
        success:function (respuesta){
            console.log("Insertado");

            listarRespuesta(respuesta.items);
        },
    

        error:function(xhr, status){
            console.log(status);
        }
    });

}

function listarRespuesta(items){

    var tabla= `<table border="1">
    <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Ciudad</th>
        <th>Salario</th>
        <th colspan="2">Acciones</th>

        <7tr>`;

        for (let i = 0; i < items.length; i++){
            tabla+=`<tr>
            
            <td>$(items[i].id </td>
            <td>$(items[i].nombre </td>
            <td>$(items[i].edad </td>
            <td>$(items[i].ciudad </td>
            <td>$(items[i].salario </td>
            <td><button onclick="">Editar
                </tr>`;

        }

        table+=`</table>`
        console.log(tabla);

        $("#listado").html(tabla)
}
