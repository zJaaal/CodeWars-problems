const quotes = {
  'Kaylynn Philips · Freelance Developer': {
    quote:
      '“Carloscopy2 es uno de esos compañeros con los que es un placer trabajar. Comprometido, profesional y honesto, siempre dispuesto a dar lo mejor de sí mismo con cada uno de sus clientes. Si no tiene la solución a un problema, no para hasta que la encuentra. No lo dudes, si necesitas un profesional que te ayude en la gestión contable de tu negocio, Carlos es la persona que buscas”.',
    person: 'Kaylynn Philips · Freelance Developer',
    linkedin: 'https://www.linkedin.com/feed/',
  },
  'Jaylon Torff · CEO Compt Bikes': {
    quote:
      '“Carloscopy1 es uno de esos compañeros con los que es un placer trabajar. Comprometido, profesional y honesto, siempre dispuesto a dar lo mejor de sí mismo con cada uno de sus clientes. Si no tiene la solución a un problema, no para hasta que la encuentra. No lo dudes, si necesitas un profesional que te ayude en la gestión contable de tu negocio, Carlos es la persona que buscas”.',
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
      '“Carloscopy3 es uno de esos compañeros con los que es un placer trabajar. Comprometido, profesional y honesto, siempre dispuesto a dar lo mejor de sí mismo con cada uno de sus clientes. Si no tiene la solución a un problema, no para hasta que la encuentra. No lo dudes, si necesitas un profesional que te ayude en la gestión contable de tu negocio, Carlos es la persona que buscas”.',
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
const peopleContainer = document.querySelectorAll('.person');
const people = document.querySelectorAll('.person > div > h5');
const container = document.querySelector('div[data-id="d549b94"]');

peopleContainer.forEach((el, i) => {
  const { person, quote, linkedin } = quotes[people[i].innerText];
  el.addEventListener('click', () => {
    document.querySelector('.person.active').classList.remove('active');
    el.classList.add('active');
    container.innerHTML = createQuoteTemplate(person, quote, linkedin);
  });
});
