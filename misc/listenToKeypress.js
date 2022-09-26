let c = "";

window.addEventListener("keypress", (e) => {
  c += String.fromCharCode(e.which);
  console.log(c);
});

setInterval(() => (c = ""), 3000);
