
document.getElementById("reportBtn").addEventListener("click", function(e) {
    e.preventDefault();
  
    let fecha = document.getElementById("fecha").value;
    let identificador = document.getElementById("identificador").value;
    let titulo = document.getElementById("titulo").value;
    let tipo = document.querySelector('select[name="tipo"]').value;
    let frecuencia = document.querySelector('select[name="frecuencia"]').value;
    let prioridad = document.querySelector('select[name="prioridad"]').value;
    let dispositivo = document.querySelector('select[name="dispositivo"]').value;
    let navegador = document.querySelector('select[name="navegador"]').value;
    let pasos = document.querySelector('textarea[name="pasos"]');
    let esperado = document.getElementById("esperado").value;
    let actual = document.getElementById("actual").value;

    let esperadoCapitalizado = capitalizarPrimeraLetra(esperado)
    let actualCapitalizado = capitalizarPrimeraLetra(actual)
      
    let dataArea = pasos.value.trim();
    let lineas = dataArea.split('\n');
    

    const textosLabel = guardarTexto('label')
    const textosH1 = guardarTexto('h1')
    console.log(textosH1[0])
  
    // Crea el contenido del archivo de Word
    var content = `
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
        body {
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
          background-color: white;
          margin: 0;
          padding: 9px;
          padding-left: 40px;
        }
        h2 {
          color: #9D8420;
          text-align: center;
        }
        p {
          color: #33312E;
          font-weight: bold;
          font-size: 0.9em;
        }
        .values{
          color: #942911;
          font-size: 0.8em;
          font-weight: 500;
        }
        ol, li{
          color: #942911;
          font-size: 0.8em;
          font-weight: 500;
        }
      </style>
        </head>
        <body>
          <h2>📝 ${textosH1[0]}</h2>
          <p>${textosLabel[0]}</p>
           <p class="values">${identificador}</p>
          <br>
          <p>${textosLabel[1]}</p>
           <p class="values">${titulo}</p>
          <br>
          <p>${textosLabel[2]}</p>
           <p class="values">${tipo}</p>
          <br>  
          <p>${textosLabel[3]}</p>
          <p class="values">${frecuencia}</p>
          <br>
          <p>${textosLabel[4]}</p>
           <p class="values">${prioridad}</p>
          <br>
          <p>${textosLabel[5]}</p>
           <p class="values">${dispositivo} - ${navegador}</p>
          <br>
          <p>${textosLabel[6]}</p>
           <p class="values">${fecha}</p>
          <br> 
          <p>${textosLabel[7]}</p>
           <ol>${generarElementosListados(lineas)}</ol>
          <br>
          <p>${textosLabel[8]}</p>
           <p class="values">${esperadoCapitalizado}</p>
          <br>
          <p>${textosLabel[9]}</p>
           <p class="values">${actualCapitalizado}</p>
          </body>
          <br><br><br><br><br><br><br>
          <body>
            <head>
              <meta charset="UTF-8">
            <head>
            <p>Impresión de Pantalla / Videos:</p> 
          <body/>
      </html>
    `;

    function generarElementosListados(elementos) {
        var listaHTML = '';
        for (var i = 0; i < elementos.length; i++) {
          listaHTML += `<li>${elementos[i]}</li>`;
        }
        return listaHTML;
      }

    var formulario = document.getElementById("myForm");
    var limpiarBtn = document.getElementById("limpiarBtn");
    limpiarBtn.addEventListener("click", function() {
        formulario.reset();
      });

    function guardarTexto(etiqueta){
        const elementos = document.querySelectorAll(etiqueta)
        const datosTexto = []
        elementos.forEach(e =>{
          const texto = e.innerText;
          datosTexto.push(texto)
        })
        return datosTexto
      } 

    function capitalizarPrimeraLetra(cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
      }       
   
      // Crea un objeto Blob con el contenido y el tipo MIME
      var blob = new Blob([content], { type: "application/msword" });
    
      // Crea un enlace para descargar el archivo de Word
      var link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Test_Report.doc";
      link.click();
});