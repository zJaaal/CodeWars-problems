let c = '';

window.addEventListener('keypress', (e) => {
  c += String.fromCharCode(e.which);
  console.log(c);
});

let a = setInterval(() => {
  console.log('Write some expressions. You have 10 seconds');

  if (c.length) {
    try {
      console.log('result: ' + eval(c));
    } catch (error) {
      console.log('?');
    }
  }
  c = '';
}, 10000);
