const quotes = {
  'Kaylynn Philips · Freelance Developer': {
    quote:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc enim, consequat id semper et, gravida in urna. Vestibulum pellentesque, eros a laoreet semper, libero nisl venenatis odio, vel porta felis nunc vel urna. Proin tincidunt velit ac dolor sodales vulputate. Vivamus in tincidunt nulla. Quisque quis consectetur felis, eu tincidunt eros. Pellentesque ultricies imperdiet nibh, non pharetra arcu semper efficitur”.',
    person: 'Kaylynn Philips · Freelance Developer',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  'Jaylon Torff · CEO Compt Bikes': {
    quote:
      '“ Praesent lobortis sed enim vel placerat. Aliquam malesuada bibendum arcu, at vehicula metus. Suspendisse vel gravida urna. Duis nec orci tempus enim pellentesque ultricies nec in massa. Quisque mollis mattis nibh ac dapibus. Morbi lobortis magna enim, euismod accumsan urna finibus ac. In vitae sapien quis magna tincidunt congue sed a dui”.',
    person: 'Jaylon Torff · CEO Compt Bikes',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  'Talan Stanton · UX/UI Designer': {
    quote:
      '“Carlos es uno de esos compañeros con los que es un placer trabajar. Comprometido, profesional y honesto, siempre dispuesto a dar lo mejor de sí mismo con cada uno de sus clientes. Si no tiene la solución a un problema, no para hasta que la encuentra. No lo dudes, si necesitas un profesional que te ayude en la gestión contable de tu negocio, Carlos es la persona que buscas”.',
    person: 'Talan Stanton · UX/UI Designer',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  'Madelyn Vaccaro · Design Director North Studio': {
    quote:
      '“Vivamus nisl dui, sollicitudin vel augue quis, blandit tincidunt tellus. Donec molestie rhoncus sem in efficitur. Proin sollicitudin risus at rhoncus bibendum. Cras blandit ut mauris at convallis. Nunc aliquet dolor quis vehicula efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque et ante cursus tempor”.',
    person: 'Madelyn Vaccaro · Design Director North Studio',
    linkedin: 'https://www.linkedin.com/feed/',
  },
};

function createQuoteTemplate(person, quote, linkedin) {
  return `<div class="elementor-widget-wrap elementor-element-populated animate-quote">
  <div class="elementor-element elementor-element-8afa66f elementor-widget elementor-widget-text-editor" data-id="8afa66f" data-element_type="widget" data-widget_type="text-editor.default" style="animation: 0s ease 0s 1 normal none running none;">
<div class="elementor-widget-container">
<p>${quote}</p>						</div>
</div>
<div class="elementor-element elementor-element-03ae8a0 elementor-widget elementor-widget-heading" data-id="03ae8a0" data-element_type="widget" data-widget_type="heading.default" style="animation: 0s ease 0s 1 normal none running none;">
<div class="elementor-widget-container">
<h5 class="elementor-heading-title elementor-size-default">${person}</h5>		</div>
</div>
<div class="elementor-element elementor-element-4f397c8 elementor-widget elementor-widget-text-editor" data-id="4f397c8" data-element_type="widget" data-widget_type="text-editor.default" style="animation: 0s ease 0s 1 normal none running none;">
<div class="elementor-widget-container">
<p><a href="${linkedin}" target="_blank" style="text-decoration: underline;">View LinkedIn</a></p>						</div>
</div>
</div>`;
}
//Container of names
const peopleContainer = document.querySelectorAll('.person');
//List of html to get the names
const people = document.querySelectorAll('.person > div > h5');

//Container where the new info will be inserted
const container = document.querySelector('div[data-id="d549b94"]');

peopleContainer.forEach((el, i) => {
  //get properties for the new info
  const { person, quote, linkedin } = quotes[people[i].innerText];

  //now we add the event
  el.addEventListener('click', () => {
    //Remove the active classname
    document.querySelector('.person.active').classList.remove('active');

    //Add the active classname
    el.classList.add('active');

    //Add the new info
    container.innerHTML = createQuoteTemplate(person, quote, linkedin);
  });
});
