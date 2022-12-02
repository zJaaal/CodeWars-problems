function countHours(year, holidays) {
  return holidays.reduce((count, day) => {
    let weekDay = new Date(day + '/' + year).getDay();
    if (day != '12/31' && weekDay > 0 && weekDay < 6) count += 2;
    if (day == '12/31' && year % 4 == 0 && weekDay == 4) count += 2;
    return count;
  }, 0);
}

console.log(countHours(2020, ['01/06', '04/01', '12/31']));
