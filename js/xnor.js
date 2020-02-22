function Main() {
   var w1 = document.getElementById("peso1").value;
   var w2 = document.getElementById("peso2").value;
   var umbral = document.getElementById("umbral").value;
   var _w1 = document.getElementById("_peso1").value;
   var _w2 = document.getElementById("_peso2").value;
   var _umbral = document.getElementById("_umbral").value;
    
    compuertaand(w1,w2,umbral);
    CompuertaNor(_w1,_w2,_umbral);
    
    
  }
    function compuertaand(w1, w2, umbral) {

      var resultadoAnd;
      resultadoAnd = parseFloat(((0*w1)+(1*w2)+(1*umbral)));
      if(resultadoAnd >= 0.5) {
        resultadoAnd = 1;

      }else{
        resultadoAnd = 0;
      }
      console.log(`El resultado de la compuerta And es ${resultadoAnd}`);
      CompuertaOr(resultadoAnd);
      return resultadoAnd;

    }

    function CompuertaNor(w1,w2, umbral) {
      var resultadoNor;
      resultadoNor = parseFloat(((0*(-w1))+(1*(-w2))+(1*umbral)));
      if(resultadoNor >= 0.5) {
        resultadoNor = 1;
      }else{
        resultadoNor = 0;
      }
      console.log(`El resultado de la compuerta Nor es ${resultadoNor}`);
      CompuertaOr(resultadoNor);
      return resultadoNor;

    }

    function CompuertaOr(resultadoAnd, resultadoNor,umbral) {
      var resultadoOr;
      console.log(CompuertaOr);

      resultadoOr = parseFloat(((0*resultadoAnd)+(1*resultadoNor)+(1*umbral)));
      if(resultadoOr >= 0.5) {
        resultadoOr = 1;
      }else{
        resultadoOr = 0;
      }
      console.log(`El resultado de la compuerta Or es ${resultadoOr}`);
      document.getElementById("resFinal").value = resultadoOr;
      return resultadoOr;
    }
    console.log(CompuertaOr);

    

    