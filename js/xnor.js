// * Funcion Principal
function main() {
  /**
  *  @let Variables Locales
  *  @var Varibles Globales
  **/
  let w1 = parseFloat(document.getElementById("peso1").value);
  let _w1 = parseFloat(document.getElementById("_peso1").value);
  let w2 = parseFloat(document.getElementById("peso2").value);
  let _w2 = parseFloat(document.getElementById("_peso2").value);
  var umbral = parseFloat(document.getElementById("umbral").value);
  var _umbral = parseFloat(document.getElementById("_umbral").value);

  // *  @param {number} y return a bool 0|1
  function validation(data) {
    data.toFixed(1);
    if (data >= 0.6) {
       return data = 1;
      } else {
       return data = 0;
      }        
    };

    // * @param {bool,number} y return resultado de la compuerta AND
    function and(comp1,w1,comp2,w2,comp3,umbral) {
      let data = (((comp1 *w1) + (comp2 *w2) + (comp3 *umbral)));
      return resul = validation(data);
    };

    // * @param {bool,number} y return resultado de la compuerta NOR
    function nor(comp1,_w1,comp2,_w2,comp3,_umbral) {
      let data = (((comp1 + (-_w1)) + (comp2 + (-_w2)) + (comp3 + _umbral)));
      return resul = validation(data);
  
    };
    // * @param {bool,number} y return resultado de la compuerta  AND y NOR
    function Or(comp1,resulAnd1,comp2,resulNor1,comp3,umbral) {
      let data = ((comp1 + resulAnd1) + (comp2 + resulNor1) + (comp3 + umbral));
      return resul = validation(data);
    };
     // * @param {string,number} y return el resultado de las compuerta XNOR en HTML
    function resultado(dataname,data) {
      return document.getElementById(dataname).value = data; 
    };
     // * @param {string,number} y return el resultado de las compuerta XNOR en HTML
     function cumple(dataname,data, data2) {
       if (data === data2) {
        document.getElementById(dataname).style.border = '2px solid #21bf73';
         return document.getElementById(dataname).value = "Cumple"; 
       } else {
        document.getElementById(dataname).style.border = '2px solid #e32249';
        return document.getElementById(dataname).value = "No cumple"; 
       }
    };
  
  //* Cargando valores en la funcion and()
  let and1 = and(0,w1,0,w2,1,umbral);
  let and2 = and(0,w1,1,w2,1,umbral);
  let and3 = and(1,w1,0,w2,1,umbral);
  let and4 = and(1,w1,1,w2,1,umbral);

  //* Cargando valores en la funcion nor()
  let nor1 = nor(0,_w1,0,_w2,1,_umbral);
  let nor2 = nor(0,_w1,1,_w2,1,_umbral);
  let nor3 = nor(1,_w1,0,_w2,1,_umbral);
  let nor4 = nor(1,_w1,1,_w2,1,_umbral);

  //* Cargando valores en la funcion Or() con los resulados de and() y nor()
  let _or1 = Or(0,and1,0,nor1,1,umbral);
  let _or2 = Or(0,and2,1,nor2,1,umbral);
  let _or3 = Or(1,and3,0,nor3,1,umbral);
  let _or4 = Or(1,and4,1,nor4,1,umbral);
  
  //* Cargando resultados en la funcion  resultado()
  resultado("r1",_or1);
  resultado("r2",_or2);
  resultado("r3",_or3);
  resultado("r4",_or4);

    //* Cargando resultados en la funcion  cumple()
  cumple("v1",_or1,1);
  cumple("v2",_or2,0);
  cumple("v3",_or3,0);
  cumple("v4",_or4,1);
  };