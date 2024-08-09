

  function hacerclic (){
    //document.getElementsByTagName('p')[0].onclick=mostrarAlerta;
//     document.getElementsByTagName('p')[1].onclick=mostrarAlerta;
    //document.querySelector("#principal p:first-child").onclick=mostrarAlerta;
    // var lista=document.getElementById('principal').querySelectorAll("p")
    // lista[0].onclick=mostrarAlerta()
    var elemento=document.getElementsByTagName('p')[0];
        elemento.addEventListener('click',mostrarAlerta,false)
     
}
function mostrarAlerta(){
    alert('hizo click');
}
//window.onload=hacerclic ;
window.addEventListener('load',hacerclic,false)


//  var lista=document.querySelectorAll('#principal p');
    //  lista[0].onclick=mostrarAlerta;
    //  document.write(lista[0])