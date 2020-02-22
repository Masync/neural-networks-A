var Main = () => {
  //* Obteniendo la data del Html
  // *Declarando Variables de la and
  // *Declarando Variables de la Nor
  let w1 = parseFloat(document.getElementById("peso1").value);
  let _w1 = parseFloat(document.getElementById("_peso1").value);
  let w2 = parseFloat(document.getElementById("peso2").value);
  let _w2 = parseFloat(document.getElementById("_peso2").value);
  var umbral = parseFloat(document.getElementById("umbral").value);
  var _umbral = parseFloat(document.getElementById("_umbral").value);

  //* Logica de compuerta and
  var resulAnd = (((1 * w1) + (1 * w2) + (1 * umbral)));

  //* Resultado con 1 decimal
  resulAnd.toFixed(1);
  //* Condicional para que la salida sea 1 | 0
  if (resulAnd >= 0.5) {
    resulAnd = 1;
  } else {
    resulAnd = 0;
  }
  //* Logica de compuerta Nor
  var resulNor = (((1 * (-_w1)) + (1 * (-_w2)) + (1 * _umbral)));

  //* Resultado con 1 decimal
  resulNor.toFixed(1);

  //* Condicional para que la salida sea 1 | 0
  if (resulNor >= 0.5) {
    resulNor = 1;
  } else {
    resulNor = 0;
  }
  //* Llamado a la funcion  resultadoOr(); pasandole los resultado de and y Nor
  resultadoOr(resulAnd, resulNor, umbral);

};
resultadoOr = (x, y, z) => {
  //* Logica de compuerta Or
  var resulData = ((0 * x) + (0 * y) + (1 * z));
  //* Resultado con 1 decimal
  resulData.toFixed(1);
  //* Condicional para que la salida sea 1 | 0
  if (resulData >= 0.5) {
    resulData = 1;
  } else {
    resulData = 0;
  }
  //* Agregando la data del resultado al HTML
  document.getElementById("resFinal").value = resulData;
};