nextChristmas = () => { 

today=new Date(); // days until 07 January 2021
  let christmas=new Date(today.getFullYear(), 12, 07);
  if (today.getMonth()==12 && today.getDate()>01) 
  {
    christmas.setFullYear(christmas.getFullYear()+1); 
  }  
  let secondsInDay=1000*60*60*24;
console.log(Math.ceil((christmas.getTime()-today.getTime())/(secondsInDay))+" days left until Christmas!"); 
}
nextChristmas();

