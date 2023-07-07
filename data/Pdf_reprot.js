document.getElementById("reportBtnPdf").addEventListener("click", function(e) {
    e.preventDefault();
  
    let identificador = document.getElementById("identificador").value;
    let titulo = document.getElementById("titulo").value;
    let tipo = document.querySelector('select[name="tipo"]').value;
    let frecuencia = document.querySelector('select[name="frecuencia"]').value;
    let prioridad = document.querySelector('select[name="prioridad"]').value;
    let dispositivo = document.querySelector('select[name="dispositivo"]').value;
    let fecha = document.getElementById("fecha").value;
    let pasos = document.querySelector('textarea[name="pasos"]');
    let esperado = document.getElementById("esperado").value;
    let actual = document.getElementById("actual").value;
  
    let dataArea = pasos.value.trim();
    let lineas = dataArea.split('\n');
  
    // Crear instancia de jsPDF
    const doc = new jsPDF();

    //Estilos y Colores
    const restartColor = "0, 0, 0"
    const ColorValues = "#942911";
    const ColorBluedelft = "#1D3354"
  
    // Definir el contenido del reporte
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(ColorBluedelft)
    doc.text("Reporte de Bug:", 10, 20);
    doc.setTextColor(restartColor);
    doc.setFontSize(12);
    doc.text("Id:", 10, 45);
    doc.setTextColor(ColorValues)
    doc.text(identificador, 63, 45);
    doc.setTextColor(restartColor);
    doc.text("Titulo:", 10, 55);
    doc.setTextColor(ColorValues)
    doc.text(titulo, 63, 55);
    doc.setTextColor(restartColor);
    doc.text("Tipo de Defecto:", 10, 65);
    doc.setTextColor(ColorValues)
    doc.text(tipo, 63, 65);
    doc.setTextColor(restartColor);
    doc.text("Frecuencia:", 10, 75);
    doc.setTextColor(ColorValues)
    doc.text(frecuencia, 63, 75);
    doc.setTextColor(restartColor);
    doc.text("Prioridad:", 10, 85);
    doc.setTextColor(ColorValues)
    doc.text(prioridad, 63, 85);
    doc.setTextColor(restartColor);
    doc.text("Dispositivo / Navegador:", 10, 95);
    doc.setTextColor(ColorValues)
    doc.text(dispositivo, 63, 95);
    doc.setTextColor(restartColor);
    doc.text("Fecha:", 10, 35);
    doc.setTextColor(ColorValues)
    doc.text(fecha, 63, 35);
    doc.setTextColor(restartColor);
    doc.text("Pasos de Ejecucion:", 10, 110);
    doc.setTextColor(ColorValues)
    doc.setFont("Helvetica");
    doc.setFontSize(12);
    let yPos = 120;
    for (var i = 0; i < lineas.length; i++) {
      doc.text( (i+1) + " -  " + lineas[i], 15, yPos);
      yPos += 10;
    }
    doc.setTextColor(restartColor);
    doc.text("Resultado Esperado:", 10, yPos);
    doc.setTextColor(ColorValues)
    doc.setFont("Helvetica", "bold");
    doc.text(esperado, 12, yPos + 10);
    doc.setTextColor(restartColor);
    doc.setFont("Helvetica", "bold");
    doc.text("Resultado Actual:", 10, yPos + 30);
    doc.setTextColor(ColorValues)
    doc.setFont("Helvetica");
    doc.text(actual, 12, yPos + 40);
    doc.setTextColor(restartColor);

    // Guardar el documento como archivo PDF
    doc.save("Test_Report.pdf");
  });
  