// .services-circle {
//   position: relative;
//   height: 430px;
//   width: 430px;
//   background: conic-gradient(#000 31deg, #FFF 0deg);
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .services-circle::before{
//   position: absolute;
//   content: "";
//   height: 428px;
//   width: 428px;
//   background-color: #FFF;
//   border-radius: 50%;
// }

//Services circle

// const serviciosCircle = document.querySelector('.servicios-imagen>div');
// serviciosCircle.innerHTML = `<div class="services-circle"></div>`;

// let serviceDeg = 30;
// let serviceSteps = 2;
// let serviceLastScroll = 0;

// const serviceCircle = document.querySelector('.services-circle');

// window.addEventListener('scroll', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (serviceLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (serviceCircle.getBoundingClientRect().y >= 90 && serviceDeg > 30) {
//       serviceDeg -= serviceSteps;
//       serviceCircle.style.background = `conic-gradient(#000 ${serviceDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (serviceCircle.getBoundingClientRect().y <= 500 && serviceDeg < 290) {
//       serviceDeg += serviceSteps;
//       serviceCircle.style.background = `conic-gradient(#000 ${serviceDeg}deg, #FFF 0deg)`;
//     }
//   }
//   serviceLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

// window.addEventListener('touchmove', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (serviceLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (serviceCircle.getBoundingClientRect().y >= 90 && serviceDeg > 30) {
//       serviceDeg -= serviceSteps;
//       serviceCircle.style.background = `conic-gradient(#000 ${serviceDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (serviceCircle.getBoundingClientRect().y <= 500 && serviceDeg < 290) {
//       serviceDeg += serviceSteps;
//       serviceCircle.style.background = `conic-gradient(#000 ${serviceDeg}deg, #FFF 0deg)`;
//     }
//   }
//   serviceLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

//Servicios laborales

// const laborServicesCircle = document.querySelector(
//   '.imagen-servicios-laborales>div'
// );
// laborServicesCircle.innerHTML = `<div class="labor-services-circle"></div>`;

// let laborServiceDeg = 30;
// let laborServiceSteps = 2;
// let laborServiceLastScroll = 0;

// const laborServiceCircle = document.querySelector('.labor-services-circle');

// window.addEventListener('scroll', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (laborServiceLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       laborServiceCircle.getBoundingClientRect().y >= 90 &&
//       laborServiceDeg > 30
//     ) {
//       laborServiceDeg -= laborServiceSteps;
//       laborServiceCircle.style.background = `conic-gradient(#000 ${laborServiceDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       laborServiceCircle.getBoundingClientRect().y <= 500 &&
//       laborServiceDeg < 290
//     ) {
//       laborServiceDeg += laborServiceSteps;
//       laborServiceCircle.style.background = `conic-gradient(#000 ${laborServiceDeg}deg, #FFF 0deg)`;
//     }
//   }
//   laborServiceLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

// window.addEventListener('touchmove', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (laborServiceLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       laborServiceCircle.getBoundingClientRect().y >= 90 &&
//       laborServiceDeg > 30
//     ) {
//       laborServiceDeg -= laborServiceSteps;
//       laborServiceCircle.style.background = `conic-gradient(#000 ${laborServiceDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       laborServiceCircle.getBoundingClientRect().y <= 500 &&
//       laborServiceDeg < 290
//     ) {
//       laborServiceDeg += laborServiceSteps;
//       laborServiceCircle.style.background = `conic-gradient(#000 ${laborServiceDeg}deg, #FFF 0deg)`;
//     }
//   }
//   laborServiceLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

//Solution first

// const solutionFirstImage = document.querySelector('.solution-first-image>div');
// solutionFirstImage.innerHTML = `<div class="solution-first-circle"></div>`;

// let solutionFirstDeg = 30;
// let solutionFirstSteps = 4;
// let solutionFirstLastScroll = 0;

// const solutionFirstCircle = document.querySelector('.solution-first-circle');

// window.addEventListener('scroll', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (solutionFirstLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       solutionFirstCircle.getBoundingClientRect().y >= 90 &&
//       solutionFirstDeg > 30
//     ) {
//       solutionFirstDeg -= solutionFirstSteps;
//       solutionFirstCircle.style.background = `conic-gradient(#000 ${solutionFirstDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       solutionFirstCircle.getBoundingClientRect().y <= 500 &&
//       solutionFirstDeg < 200
//     ) {
//       solutionFirstDeg += solutionFirstSteps;
//       solutionFirstCircle.style.background = `conic-gradient(#000 ${solutionFirstDeg}deg, #FFF 0deg)`;
//     }
//   }
//   solutionFirstLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

// window.addEventListener('touchmove', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (solutionFirstLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       solutionFirstCircle.getBoundingClientRect().y >= 90 &&
//       solutionFirstDeg > 30
//     ) {
//       solutionFirstDeg -= solutionFirstSteps;
//       solutionFirstCircle.style.background = `conic-gradient(#000 ${solutionFirstDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       solutionFirstCircle.getBoundingClientRect().y <= 500 &&
//       solutionFirstDeg < 200
//     ) {
//       solutionFirstDeg += solutionFirstSteps;
//       solutionFirstCircle.style.background = `conic-gradient(#000 ${solutionFirstDeg}deg, #FFF 0deg)`;
//     }
//   }
//   solutionFirstLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

//Solution second

// const solutionSecondImage = document.querySelector(
//   '.solution-second-image>div'
// );
// solutionSecondImage.innerHTML = `<div class="solution-second-circle"></div>`;

// let solutionSecondDeg = 30;
// let solutionSecondSteps = 2;
// let solutionSecondLastScroll = 0;

// const solutionSecondCircle = document.querySelector('.solution-second-circle');

// window.addEventListener('scroll', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (solutionSecondLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       solutionSecondCircle.getBoundingClientRect().y >= 90 &&
//       solutionSecondDeg > 30
//     ) {
//       solutionSecondDeg -= solutionSecondSteps;
//       solutionSecondCircle.style.background = `conic-gradient(#000 ${solutionSecondDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       solutionSecondCircle.getBoundingClientRect().y <= 500 &&
//       solutionSecondDeg < 200
//     ) {
//       solutionSecondDeg += solutionSecondSteps;
//       solutionSecondCircle.style.background = `conic-gradient(#000 ${solutionSecondDeg}deg, #FFF 0deg)`;
//     }
//   }
//   solutionSecondLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

// window.addEventListener('touchmove', () => {
//   //Get the current position of the viewport on the page
//   let currentPos = window.pageYOffset || document.documentElement.scrollTop;
//   if (solutionSecondLastScroll > currentPos) {
//     //going up
//     //90 is a acceptable position where it can start to change to undraw
//     if (
//       solutionSecondCircle.getBoundingClientRect().y >= 90 &&
//       solutionSecondDeg > 30
//     ) {
//       solutionSecondDeg -= solutionSecondSteps;
//       solutionSecondCircle.style.background = `conic-gradient(#000 ${solutionSecondDeg}deg, #FFF 0deg)`;
//     }
//   } else {
//     //going down
//     //500 is a acceptable position where it can start to draw
//     if (
//       solutionSecondCircle.getBoundingClientRect().y <= 500 &&
//       solutionSecondDeg < 200
//     ) {
//       solutionSecondDeg += solutionSecondSteps;
//       solutionSecondCircle.style.background = `conic-gradient(#000 ${solutionSecondDeg}deg, #FFF 0deg)`;
//     }
//   }
//   solutionSecondLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
// });

//Big circle

const bigImage = document.querySelector('.big-image>div');
bigImage.innerHTML = `<div class="big-circle"></div>`;

let bigCircleDeg = 30;
let bigCircleSteps = 2;
let bigCircleLastScroll = 0;

const bigCircle = document.querySelector('.big-circle');

window.addEventListener('scroll', () => {
  //Get the current position of the viewport on the page
  let currentPos = window.pageYOffset || document.documentElement.scrollTop;
  if (bigCircleLastScroll > currentPos) {
    //going up
    //90 is a acceptable position where it can start to change to undraw
    if (bigCircle.getBoundingClientRect().y >= 90 && bigCircleDeg > 30) {
      bigCircleDeg -= bigCircleSteps;
      bigCircle.style.background = `conic-gradient(#000 ${bigCircleDeg}deg, #FFF 0deg)`;
    }
  } else {
    //going down
    //500 is a acceptable position where it can start to draw
    if (bigCircle.getBoundingClientRect().y <= 500 && bigCircleDeg < 200) {
      bigCircleDeg += bigCircleSteps;
      bigCircle.style.background = `conic-gradient(#000 ${bigCircleDeg}deg, #FFF 0deg)`;
    }
  }
  bigCircleLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
});

window.addEventListener('touchmove', () => {
  //Get the current position of the viewport on the page
  let currentPos = window.pageYOffset || document.documentElement.scrollTop;
  if (bigCircleLastScroll > currentPos) {
    //going up
    //90 is a acceptable position where it can start to change to undraw
    if (bigCircle.getBoundingClientRect().y >= 90 && bigCircleDeg > 30) {
      bigCircleDeg -= bigCircleSteps;
      bigCircle.style.background = `conic-gradient(#000 ${bigCircleDeg}deg, #FFF 0deg)`;
    }
  } else {
    //going down
    //500 is a acceptable position where it can start to draw
    if (bigCircle.getBoundingClientRect().y <= 500 && bigCircleDeg < 200) {
      bigCircleDeg += bigCircleSteps;
      bigCircle.style.background = `conic-gradient(#000 ${bigCircleDeg}deg, #FFF 0deg)`;
    }
  }
  bigCircleLastScroll = currentPos <= 0 ? 0 : currentPos; //To control negative values
});
