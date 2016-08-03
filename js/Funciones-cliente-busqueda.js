

//Metodo al cargar la pagina/componente
function InicializaPaginaBusqueda() {

  $("#tbBusquedaNombre").keypress(keypressHandler);
  $("#tbBusquedaDNI").keypress(keypressHandler);
  $("#tbBusquedaTelefono").keypress(keypressHandler);
  $("#tbBusquedaEmail").keypress(keypressHandler);

  $("#btBuscar").click(function () {
    BuscarClientes();
  });

  $("#btNuevo").click(function () {
    location.href = '/Clientes/AltaCliente'; //'@Url.Action("AltaCliente", "Clientes")'; //
  });
}



//Metodo que busca los clientes por nombre, dni, telefono o email
function BuscarClientes() {
  var param1 = $('#bscli').get(0).nombre;
  var param2 = $('#bscli').get(0).dni;
  var param3 = $('#bscli').get(0).telefono;
  var param4 = $('#bscli').get(0).email;

  OcultarControlesHide("dMensajeRellene");
  OcultarControlesHide("dMensajeNoResultados");

  if ((param1 != undefined && param1.length > 0) || (param2 != undefined && param2.length > 0) || (param3 != undefined && param3.length > 0) || (param4 != undefined && param4.length > 0)) {
    
    $.ajax({
      url: "../../Clientes/BusquedaClientes",
      contentType: "application/x-www-form-urlencoded",
      dataType: 'json',
      data: { nom: param1, dni: param2, tel: param3, email: param4 },
      type: "POST",
      cache: false,
      asyn: false,

      success: function (data) {
        if (data != null && data.length > 2) {
          //var losdatos = JSON.parse(data); 
          //$('#bscli').get(0).datos = losdatos.Clientes[0];
          $('#bscli').get(0).datos = JSON.parse(data).Clientes;
        }
        else {
          $('#bscli').get(0).datos = [];
          MostrarControlesShow("dMensajeNoResultados");
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $('#bscli').get(0).datos = [];
        MostrarControlesShow("dMensajeNoResultados");
      }
    });
  }
  else {
    MostrarControlesShow("dMensajeRellene");
  }
}




//function IrCliente(idcliente)
//{
//  window.open('/Clientes/DetalleCliente?IdDetalle=' + idcliente, '_blank');
//  //location.href = '/Clientes/DetalleCliente?IdDetalle=' + idcliente;
//}
