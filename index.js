const endPoint = `https://private-3923c4-santandercoders809.apiary-mock.com/stations`;

function trateLine(line){
  let tratedLineParcial = line._linha.split('-');
  let tratedLineParcial2 = tratedLineParcial.join()
  let tratedLineParcial3 = tratedLineParcial2.split(' ')
  let tratedLine = tratedLineParcial3[0].split(',')
  
  if(tratedLine[1]===undefined){
    return tratedLine[0]
  }
  return tratedLine[0] + '-'+ tratedLine[1];
}

function groupByLines() {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        const result = data.estacoes.estacao.reduce((acc, cur) => {
          
          const line = trateLine(cur);
          acc[line] = acc[line] || [];
          acc[line].push(cur);
          
          return acc;
        }, {});
        console.log(result);
      });
  }
  groupByLines();