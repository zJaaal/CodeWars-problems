//7 kyu Problem Categorize New Member
//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    data = data.map((member) =>{ 
      return member[0] >= 55 && member[1] > 7 ? "Senior": "Open";
    })
    return data;
}