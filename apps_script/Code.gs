function irAProductos() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PRODUCTOS").activate();
}

function irAProveedores() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROVEEDORES").activate();
}

function irAVentas() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("VENTAS").activate();
}

function mostrarFormularioProducto() {
  const html = HtmlService.createHtmlOutputFromFile('FormularioProducto')
    .setWidth(450)
    .setHeight(450);
  SpreadsheetApp.getUi().showModalDialog(html, 'Registro de Producto');
}

function guardarProducto(data) {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PRODUCTOS");

  const fila = hoja.getLastRow() + 1;

  hoja.getRange(fila, 1, 1, 4).setValues([
    [data.id, data.codigo, data.producto, data.precio]
  ]);

  const rango = hoja.getRange(fila, 1, 1, 4);

  rango.setHorizontalAlignment("center");

  rango.setBorder(true, true, true, true, true, true);
}