
document.getElementById("imagen").onchange = function(){
    const ul = document.getElementById("mostrarImagen");
    const imagen = document.createElement("img");
    const read = new FileReader();
    const file = this.files;
    
    read.onload = function(){
      const result = this.result;
      const url = result;
      imagen.width = 250;
      imagen.src = url;
      ul.appendChild(imagen);
    }
    
    read.readAsDataURL(file[0]);
  }