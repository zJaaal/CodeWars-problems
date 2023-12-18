// https://www.codewars.com/kata/5571d9fc11526780a000011a/train/javascript The builder of things
// Solved. And as my cognitive complexity extensions says... Bloody hell...
// Not sure if I'm proud or ashamed of this one. I'm leaning towards proud.

class Thing {
  name;

  isAData = {};

  shouldSetIsAData = null;

  shouldSetIsThe = false;

  isTheProp = null;

  shouldSetHa$data = null;

  shouldSetCanFunction = false;

  data = {};

  accessedProp = '';

  constructor(name, pluralName) {
    this.name = name;
    this.pluralName = pluralName;

    let _thingInstance = new Proxy(this, {
      get(target, prop) {
        target.accessedProp = [
          'is_a',
          'is_not_a',
          'has',
          'having',
          'each',
          'accessedProp',
          'is_the',
        ].includes(prop)
          ? target.accessedProp
          : prop;

        if (target.shouldSetIsAData) {
          target.isAData[prop] = target.shouldSetIsAData.is;
          target.shouldSetIsAData = null;
        }

        if (target.shouldSetHa$data) {
          target[prop] =
            target.shouldSetHa$data.amount > 1
              ? Array.from(
                  { length: target.shouldSetHa$data.amount },
                  () => new Thing(prop.slice(0, -1), prop)
                )
              : new Thing(prop);
          target.shouldSetHa$data = null;
        }

        if (target.shouldSetIsThe) {
          target.shouldSetIsThe = false;
          target.isTheProp = prop;

          return _thingInstance;
        }

        if (target.shouldSetCanFunction) {
          target.shouldSetCanFunction = false;

          target[prop] = function (...args) {
            globalThis.name = target.name;
            let fnName;
            let callback;

            if (args.length == 1) callback = args[0];
            else {
              [fnName, callback] = args;
              target[fnName] = [];
            }

            target[prop] = (...args) => {
              let result = callback(...args);
              target[fnName]?.push(result);

              return result;
            };
          };

          return target[prop];
        }

        if (target.isTheProp) {
          target[target.isTheProp] = prop;
          target.isTheProp = null;

          return _thingInstance;
        }

        if (prop.includes('is_a')) {
          let [is, a, thing] = prop.split('_');

          if (!thing) {
            target.shouldSetIsAData = {
              is: true,
            };
            return _thingInstance;
          }
          return target.isAData[thing];
        }

        if (prop.includes('is_not_a')) {
          let [is, not, a, thing] = prop.split('_');

          if (!thing) {
            target.shouldSetIsAData = {
              is: false,
            };
            return _thingInstance;
          }
          return !target.isAData[thing];
        }

        if (prop.includes('has') || prop.includes('having')) {
          return function (amount) {
            target.shouldSetHa$data = {
              amount,
            };

            return _thingInstance;
          };
        }

        if (prop.includes('can')) {
          target.shouldSetCanFunction = true;

          return _thingInstance;
        }

        if (
          prop.includes('is_the') ||
          prop.includes('being_the') ||
          prop.includes('and_the')
        ) {
          target.shouldSetIsThe = true;

          return _thingInstance;
        }

        return target[prop];
      },
    });

    globalThis.having = _thingInstance.having;

    Array.prototype.each = function (callback) {
      Object.assign(
        this,
        this.map((element, i) => {
          globalThis.being_the = new Proxy(
            {
              new: true,
              shouldSetData: true,
              setProp: '',
            },
            {
              get(target, prop, proxy) {
                if (prop == 'and_the') {
                  target.shouldSetData = true;
                  return proxy;
                }

                if (target.shouldSetData) {
                  target.shouldSetData = false;
                  target.setProp = prop;
                  return proxy;
                } else if (target.setProp.length) {
                  target[target.setProp] = prop;
                  target.setProp = '';

                  return proxy;
                }

                return target[prop];
              },
            }
          );

          let thing = callback();

          if (thing.new) {
            let thingValues = Object.keys(thing)
              .filter(
                (key) => ['new', 'shouldSetData', 'setProp'].indexOf(key) == -1
              )
              .reduce((acc, key) => {
                acc[key] = thing[key];
                return acc;
              }, {});

            return {
              ...element,
              ...thingValues,
            };
          }

          if (Array.isArray(thing)) {
            return {
              ...element,
              [thing[0].pluralName]: [...thing],
            };
          } else {
            return {
              ...element,
              [thing.name]: thing,
            };
          }
        })
      );

      return this;
    };

    return _thingInstance;
  }
}

const car = new Thing('Mercedes');

console.log(car.name);
console.log(car.is_a.mercedes);
console.log(car.is_a_mercedes);
console.log(car.is_not_a_mercedes);
console.log(car.is_a_ferrari);
console.log(car.is_a.ferrari);
console.log(car.is_a_ferrari);
car.has(4).wheels;

car.wheels.each(() => having(4).rubber_tyres);

// console.log(car.wheels[0]);
car.is_the.rival_of.ferrari;
console.log(car.rival_of);
car.wheels[0].rubber_tyres[0].being_the.color.white.and_the.size.xl;

car.wheels.each(() => being_the.color.white.and_the.size.xl);
console.log(car.wheels[0].color, car.wheels[0].size);
car.can.drift((corner) => `${name} drifts round ${corner}`);
console.log(car.drift('Monaco'));
car.can.vroom(
  'vroomed',
  (lap) => `${name} is VROOOOOOOOOM through lap ${lap}!`
);

car.vroom(1);

console.log(car.vroomed);
