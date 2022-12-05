function countHours(year, holidays) {
  return holidays.reduce((count, day) => {
    let weekDay = new Date(day + '/' + year).getDay();
    return weekDay > 0 && weekDay < 6 ? (count += 2) : count;
  }, 0);
}

console.log(countHours(2020, ['01/06', '04/01', '12/31']));
