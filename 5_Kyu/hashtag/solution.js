//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    if (str.trim().length == 0) return false;
    let newStr = '#';
    str.split(' ').forEach((x) => {
        x = x.replace(/^\w/, (c) => c.toUpperCase());
        newStr += x;
    });
    if (newStr.length > 140) return false;
    return newStr;
}
