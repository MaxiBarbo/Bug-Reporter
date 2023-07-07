
document.getElementById("reportBtn").addEventListener("click", function(e) {
    e.preventDefault();
  
    let fecha = document.getElementById("fecha").value;
    let identificador = document.getElementById("identificador").value;
    let titulo = document.getElementById("titulo").value;
    let tipo = document.querySelector('select[name="tipo"]').value;
    let frecuencia = document.querySelector('select[name="frecuencia"]').value;
    let prioridad = document.querySelector('select[name="prioridad"]').value;
    let dispositivo = document.querySelector('select[name="dispositivo"]').value;
    let pasos = document.querySelector('textarea[name="pasos"]');
    let esperado = document.getElementById("esperado").value;
    let actual = document.getElementById("actual").value;
    let imagen = document.getElementById("preImagen");

    
    let dataArea = pasos.value.trim();
    let lineas = dataArea.split('\n');
    
    
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
          padding: 10px;
        }
        h2 {
          color: black;
          text-align: center;
        }
        p {
          color: #2E282A;
          font-weight: bold;
          font-size: 1em;
        }
        .values, ol{
            color: #942911;
            font-size: 0.9em;
            font-weight: 500;
        }
      </style>
        </head>
        <body>
          <h2>📝 Reporte de Bug:</h2>
          <p>Id:</p>
           <p class="values">${identificador}</p>
          <br>
          <p>Titulo:</p>
           <p class="values">${titulo}</p>
          <br>
          <p>Tipo de Defecto:</p>
           <p class="values">${tipo}</p>
          <br>  
          <p>Frecuencia:</p>
           <p class="values">${frecuencia}</p>
          <br>
          <p>Prioridad:</p>
           <p class="values">${prioridad}</p>
          <br>
          <p>Dispositivo:</p>
           <p class="values">${dispositivo}</p>
          <br>
          <p>Fecha:</p>
           <p class="values">${fecha}</p>
          <br> 
          <p>Pasos de Ejecucion:</p>
          <ol>${generarElementosListados(lineas)}</ol>
          <br>
          <p>Resultado Esperado:</p>
           <p class="values">${esperado}</p>
          <br>
          <p>Resultado Actual:</p>
           <p class="values">${actual}</p>
          
        </body>
      </html>
    `;
    function generarElementosListados(elementos) {
        var listaHTML = '';
        for (var i = 0; i < elementos.length; i++) {
          listaHTML += `<li>${elementos[i]}</li>`;
        }
        return listaHTML;
      }
        
    // Crea un objeto Blob con el contenido y el tipo MIME
    var blob = new Blob([content], { type: "application/msword" });
  
    // Crea un enlace para descargar el archivo de Word
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Test_Report.doc";
    link.click();
  });
  