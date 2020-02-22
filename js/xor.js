
        function Main() {
          var w1 = document.getElementById("peso1").value;
          var w2 = document.getElementById("peso2").value;
          var umbral = document.getElementById("umbral").value;
           
          compuertaAnd(w1,w2,umbral);
           
         }
         
           function compuertaAnd(w1, w2, umbral) {
       
             var resultadoAnd;
             resultadoAnd = parseFloat(((0*w1)+(1*w2)+(1*umbral)));
             console.log(`El resultado de la compuerta And es ${resultadoAnd}`);
             CompuertaNor(resultadoAnd,w2,umbral);
             return resultadoAnd;
       
           }
       
           function CompuertaNor(resultadoAnd,w2, umbral) {
             var resultadoNor;
             resultadoNor = parseFloat(((0*(-resultadoAnd))+(1*(-w2))+(1*umbral)));
             console.log(`El resultado de la compuerta Nor es ${resultadoNor}`);
             CompuertaOr(resultadoNor,w2,umbral);
             return resultadoNor;
           }
       
           function CompuertaOr(resultadoNor,w2,umbral) {
             var resultadoOr;
             resultadoOr = parseFloat(((0*resultadoNor)+(1*w2)+(1*umbral)));
             console.log(`El resultado de la compuerta Or es ${resultadoOr}`);
             document.getElementById("resFinal").value = resultadoOr;
             return resultadoOr;
            
           }
       
           
       
           