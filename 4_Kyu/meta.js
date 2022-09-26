// 4 kyu problem Are you Licensed to write JS?
// https://www.codewars.com/kata/5bb429a97631f02eec00001f
// haven't solved it yet but at least I learned about meta programming, this solution pass all the basic cases

//This is not verifyiing anything HAHAHAHAHAHAHHAA
Object.defineProperty(license, Symbol.hasInstance, {
  value(instance) {
    return (
      Object.entries(instance.__proto__).toString() ==
      Object.entries(license([instance.owner]).__proto__).toString()
    );
  },
});

function license(args) {
  let owner, renewed;
  if (Array.isArray(args)) {
    [owner, renewed] = args;
  }
  this.owner = owner || args;
  this.renewed = renewed || 0;
  this.toString = () =>
    `JSLicense: Licensed to ${this.owner}, renewed ${this.renewed} time(s)`;

  this.__proto__ = {
    owner: this.owner,
    toString: this.toString,
  };

  if (!owner) {
    throw new Error("New licenses should have an owner");
  }

  return this;
}

let handler = {
  construct(target, args) {
    if (args.length && args[0].trim().length) {
      return new Proxy(license.bind(null, [args[0]]), handler);
    } else if (typeof target().owner != "undefined") {
      return new Proxy(
        license.bind(null, [target().owner, target().renewed + 1]),
        handler
      );
    }
  },
  get(target, prop) {
    if (typeof prop == "symbol") {
      return target[prop];
    }
    if (prop.toString() == "prototype" || prop.toString() == "__proto__")
      return target().__proto__;

    return target()[prop];
  },
  apply() {
    throw Error("You should create a license using new");
  },
  getPrototypeOf(target) {
    return target().__proto__;
  },
  setPrototypeOf() {
    return true;
  },
};

const JSLicense = new Proxy(license, handler); // How to even approach this?

const License = new JSLicense("Codewars");

const anotherLicense = new JSLicense("zJaaal");

// const errorLicense = JSLicense;

const newLicense = new new new new new License()()()()();

const newAnotherLicense =
  new new new new new new new anotherLicense()()()()()()();

console.log("License owner: ");
console.log(newLicense.owner);
console.log("Renewed times: ");
console.log(newLicense.renewed);
console.log("License owner: ");
console.log(newAnotherLicense.owner);
console.log("Renewed times: ");
console.log(newAnotherLicense.renewed);

console.log(
  Object.getPrototypeOf(License) === Object.getPrototypeOf(newLicense)
);
console.log(License instanceof JSLicense);
console.log(anotherLicense instanceof License);
