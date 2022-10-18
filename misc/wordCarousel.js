//The most of this is made on CSS, i just added what i needed on the html with js
const carouselSection = document.querySelectorAll('.word-carousel>div>div');

[...carouselSection].forEach((section) => {
  section.innerHTML = `
	<div class="carousel-container">
    <div class="carousel">
      <h2>Let's Talk&nbsp;·&nbsp;</h2>
      <h2>Hablemos&nbsp;·&nbsp;</h2>
      <h2>Parlem&nbsp;·&nbsp;</h2>
      <h2>Parlons</h2>
    </div>
    <div class="carousel delay">
      <h2>Let's Talk&nbsp;·&nbsp;</h2>
      <h2>Hablemos&nbsp;·&nbsp;</h2>
      <h2>Parlem&nbsp;·&nbsp;</h2>
      <h2>Parlons</h2>
    </div>
  </div>
	`;
});
