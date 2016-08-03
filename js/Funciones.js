


function CargarComboJSON(nombreControl, lista) {
  var $select = $('#' + nombreControl);
  $select.html('');
  $.each(lista, function (key, val) {
    $select.append('<option id="' + val.ID + ' ">' + val.NOMBRE + '</option>');
  })
}



function MostrarControlesShow(controles) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    $("#" + nControl[i]).show();
  }
}


function OcultarControlesHide(controles) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    $("#" + nControl[i]).hide();
  }
}



function CambiarClase(controles, claseAntigua, claseNueva) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    $("#" + nControl[i]).removeClass(claseAntigua);
    $("#" + nControl[i]).addClass(claseNueva);
  }
}


function CambiarCSS(controles, propiedad, valor) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    $("#" + nControl[i]).css(propiedad, valor);
  }
}


function EstablecerError(controlDIV, correcto)
{  
  if (correcto)
    $("#" + controlDIV).removeClass("has-error");
  else
    $("#" + controlDIV).addClass("has-error");
  return correcto;
}


function EstablecerErrorConToolTip(controlDIV, correcto, controlInput, textoToolTip) {
  if (correcto) {
    $("#" + controlDIV).removeClass("has-error");
    $("#" + controlInput).attr('title', "");
  }
  else {
    $("#" + controlDIV).addClass("has-error");
    $("#" + controlInput).attr('title', textoToolTip);
  }
  return correcto;
}


function ObtenerTexto(control) {
  return $("#" + control).val();
}


function ObtenerValorCheckBox(control) {
  var envio = 0;
  if ($("#" + control + ":checked").length > 0)
    envio = 1;
  return envio;
}


function ObtenerTextoCombo(control) {  
  return $("#" + control).val();
}


function ObtenerValorCombo(control) {
  return $("#" + control).find(':selected').prop('id')
}


 



function ValidarDNIOpcional(dni)
{
  var okDNI = true;
  if (dni.length > 0)
    if (!ValidarDNI(dni)) {
      okDNI = false;
      ok = false;
    }
  return okDNI;
}


function ValidarDNI(value) {
  var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
  var str = value.toString().toUpperCase();

  if (!nifRexp.test(str) && !nieRexp.test(str))
    return false;

  var nie = str
      .replace(/^[X]/, '0')
      .replace(/^[Y]/, '1')
      .replace(/^[Z]/, '2');

  var letter = str.substr(-1);
  var charIndex = parseInt(nie.substr(0, 8)) % 23;

  if (validChars.charAt(charIndex) === letter)
    return true; 

  return false;
}





function isNull(valorActual, valorDefecto) {
  if (valorActual == null || valorActual == "") {
    valorActual = valorDefecto;
  }
  return valorActual;
}


function SoloNumeros(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31
    && (charCode < 48 || charCode > 57))
    return false;

  return true;
}


function SoloDouble(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31
    && (charCode < 48 || charCode > 57))
    return false;

  return true;
}




function BloquearPantalla(str) {
  var lock = document.getElementById('skm_LockPane');
  if (lock)
    lock.className = 'LockOn';
  lock.innerHTML = str;
}


function DesbloquearPantalla() {
  var lock = document.getElementById('skm_LockPane');
  if (lock)
    lock.className = 'LockOff';
}

//<div id="skm_LockPane" class="LockOff"></div>



function Reemplazar(cadena, caracter, nuevocaracter) {
  while ((cadena.indexOf(caracter) > -1)) {
    cadena = cadena.replace(caracter, nuevocaracter);
  }
  return cadena;
}




function MostrarControles(controles) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    var control = document.getElementById(nControl[i]);
    if (control != null) {
      control.style.display = 'inherit';
    }
  }
}


function OcultarControles(controles) {
  var nControl = controles.split(";");
  for (i = 0; i < nControl.length; i++) {
    var control = document.getElementById(nControl[i]);
    if (control != null) {
      control.style.display = 'none';
    }
  }
}



function pad(pad, str, padLeft) {
  if (typeof str === 'undefined')
    return pad;

  if (padLeft) {
    return (pad + str).slice(-pad.length);
  }
  else {
    return (str + pad).substring(0, pad.length);
  }
}

//function VaciarTabla(nombre_control) {
//  var target = $("#nombre_control");
//  target.empty();
//}