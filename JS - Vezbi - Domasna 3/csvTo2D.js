arr = () => {  

  const csvTo2D = (input, delimiter = ',', omittingTheFirstLine = false) => 
  
    input
    .slice(omittingTheFirstLine ? input.indexOf('\n') + 1 : 0).split('\n').map(v => v.split(delimiter));
    
    console.log(csvTo2D('a,b\nc,d')); 
    console.log(csvTo2D('a;b\nc;d', ';')); 
  }

arr();