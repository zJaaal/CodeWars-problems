const getDateFromTemplate = (template) => {
  let result = template;

  const date = Date.now();

  const options = {
    dateStyle: 'short',
    timeStyle: 'medium',
  };

  const dateTimeFormat = new Intl.DateTimeFormat('es-UR', options);

  dateTimeFormat.formatToParts(date).forEach(({ type, value }) => {
    result = result.replace(type, value.padStart(2, '0'));
  });

  return result;
};

const createInfo = (data) => {
  return `${getDateFromTemplate(
    'yearmonthday hour:minute:second'
  )} - ${Object.keys(data)
    .map((key) => `${key}:${data[key]}`)
    .join(' ')} \n`;
};

const parseLogToObject = (log) => {
  let [date, keyValue] = log.split('-');
  return keyValue.split(' ').reduce(
    (acc, data) => {
      let [key, value] = data.split(':');

      if (value) {
        acc[key] = isNaN(+value) ? value : +value;
      }
      return acc;
    },
    {
      date: date.trim(),
    }
  );
};

let log1 = createInfo({ idClinica: 2, idUsuario: 1, idPaciente: 3 });
let log2 = createInfo({ idProveedor: 2, idPaciente: 1, idUsuario: 3 });
let log3 = createInfo({
  idProevedor: 2,
  nombreUsuario: 'Javier',
  idPaciente: 3,
});

console.log(parseLogToObject(log1), log1);
console.log(parseLogToObject(log2), log2);
console.log(parseLogToObject(log3), log3);
