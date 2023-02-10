let baseURL =
  'https://demo.dotcms.com/api/content/render/false/query/+contentType:Blog%20';

let baseURLDesc =
  'https://demo.dotcms.com/api/content/render/false/query/+contentType:Blog/orderby/modDate%20desc';

let baseURLID = 'https://demo.dotcms.com/api/content/id';

const blogByYear = async (year) => {
  let template = `[${year}0101140000 TO ${year}1231160000] `;

  let identifier = '';

  let res = await fetch(baseURL + '+Blog.postingDate:' + encodeURI(template));

  let response = '';
  let idResponse = '';

  if (res.ok) response = await res.json();

  identifier = response.contentlets[0].identifier;

  let idRes = await fetch(baseURLID + '/' + identifier);

  if (idRes.ok) idResponse = await idRes.json();
  console.log(idResponse.contentlets[0]);
};

await blogByYear(2019);
