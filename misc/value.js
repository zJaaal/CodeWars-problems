function useValue(initialValue, callback) {
  //El "_" es para decir que es privada
  //Como no es typescript no podemos usar private
  let _callback = callback;
  let _value = initialValue;

  let getValue = () => {
    //Para obtener el valor
    return _value;
  };

  let setValue = (newValue) => {
    //Seteamos el valor nuevo
    _value = newValue;

    //Ejecutamos el callback
    _callback(_value);
  };

  return [getValue, setValue];
}

function doLog(value) {
  console.log(`\nYour value is: ${value}\n`);
}

const [getValue, setValue] = useValue(2, doLog);

setValue(10);
console.log(getValue());
setValue('Hello world');
console.log(getValue());
setValue('Cada que cambio doLog se ejecuta');
console.log(getValue());
setValue('Cada que cambio doLog se ejecuta2');
console.log(getValue());
