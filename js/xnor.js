function main() {
      let w1 = parseFloat(document.getElementById("peso1").value);
      let _w1 = parseFloat(document.getElementById("_peso1").value);
      let w2 = parseFloat(document.getElementById("peso2").value);
      let _w2 = parseFloat(document.getElementById("_peso2").value);
      var umbral = parseFloat(document.getElementById("umbral").value);
      var _umbral = parseFloat(document.getElementById("_umbral").value);

      
      function validation(data) {
        data.toFixed(1);
        if (data >= 0.5) {
           return data = 1;
          } else {
           return data = 0;
          }
          
        }
        function and(comp1,w1,comp2,w2,comp3,umbral) {
          let data = (((comp1 *w1) + (comp2 *w2) + (comp3 *umbral)));
          return _rA1 = validation(data);

        };
        function nor(comp1,_w1,comp2,_w2,comp3,_umbral) {
          let data = (((comp1 * (-_w1)) + (comp2 * (-_w2)) + (comp3 * _umbral)));
          return resul = validation(data);
      
        };
        function Or(comp1,resulAnd1,comp2,resulNor1,comp3,umbral) {
          let data = ((comp1 * resulAnd1) + (comp2 * resulNor1) + (comp3 * umbral));
          return resul = validation(data);
        };
        function resultado(data,dataname) {
          return document.getElementById(`${dataname}`).value = data;
          
        }
      let and1 = and(0,w1,0,w2,1,umbral);
      let and2 = and(0,w1,1,w2,0,umbral);
      let and3 = and(1,w1,0,w2,0,umbral);
      let and4 = and(1,w1,1,w2,1,umbral);

      let nor1 = nor(0,_w1,0,_w2,1,_umbral);
      let nor2 = nor(0,_w1,1,_w2,0,_umbral);
      let nor3 = nor(1,_w1,0,_w2,0,_umbral);
      let nor4 = nor(1,_w1,1,_w2,0,_umbral);

      let _or1 = Or(0,and1,0,nor1,1,umbral);
      let _or2 = Or(0,and2,0,nor2,1,umbral);
      let _or3 = Or(0,and3,0,nor3,1,umbral);
      let _or4 = Or(0,and4,0,nor4,1,umbral);

      resultado(_or1,'resul1');
      resultado(_or2,'resul1');
      resultado(_or3,'resul1');
      resultado(_or4,'resul1');

      
      };