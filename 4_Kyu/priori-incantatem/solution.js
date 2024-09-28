//https://www.codewars.com/kata/574d0b01b4b769b207000ca3

const handler = {
    get: function (target, prop) {
        const majorSpells = {
            prioriIncantatem: function () {
                return target.spellsRecording.slice(1, MAX_PRIOR_SPELLS + 1);
            },
            deletrius: function () {
                target.spellsRecording = ['deletrius'];
            }
        };

        return majorSpells[prop] || typeof target[prop] === 'function'
            ? function () {
                  const currentTarget = majorSpells[prop] ? majorSpells : target;

                  target.spellsRecording.unshift(prop);

                  return currentTarget[prop].apply(this, arguments);
              }
            : target[prop];
    },
    getPrototypeOf: function () {
        return Wand.prototype;
    }
};

class Wand {
    constructor(spells) {
        return new Proxy({ spellsRecording: [], ...spells }, handler);
    }
}
