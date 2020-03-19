//Crear nodos de DOM

//1.- Crear el elemento (crear un elemento p , b, etc)
//2.- Crear un nodo de texto (crear el texto que irá dentro de aquel parrafo)
//3.- Añadir el noo de texto al elemento (unir el texto con el elemento)
//4.- Agregar atributos al elemento (embellezer el elemento)
//5.- agregar el elemento al documento (insertar el elemento)


// //1.- Crear el elemento (crear un elemento p , b, etc)
// var elemento = document.createElement("h2");
// //2.- Crear un nodo de texto (crear el texto que irá dentro de aquel parrafo)
// var contenido =document.createTextNode("Este es el titular del h2")
// //3.- Añadir el noo de texto al elemento (unir el texto con el elemento)
// elemento.appendChild(contenido);
// //4.- Agregar atributos al elemento (embellezer el elemento)
// elemento.setAttribute("align" , 'center');
// //5.- agregar el elemento al documento (insertar el elemento)
// document.getElementById("subtitulo").appendChild(elemento);

 function zoom(){
    var thumb = document.getElementById("thumb");

    if(thumb.className == "thumb"){
        thumb.className = "thumb grande";
    }else{
        thumb.className = "thumb";
    }

 }
