const daysUntilChristmas = () => {
  let date1 = new Date('01/07/2021');
  let date2 = new Date();
  
  let difference = date1.getTime() - date2.getTime();
  
  let days = Math.ceil(difference / (1000 * 3600 * 24));
  return days
  }
  
  console.log(daysUntilChristmas() + ' days until Christmas')
  
