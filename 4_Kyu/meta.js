// 4 kyu problem Are you Licensed to write JS?
// https://www.codewars.com/kata/5bb429a97631f02eec00001f

function target(owner = "", renewed = 0) {
  this.owner = owner;
  this.renewed = renewed;
  this.toString = () =>
    `Licensed to ${this.owner}, renewed ${this.renewed} time(s)`;

  return this;
}

Object.freeze(target);

let handler = {
  construct(target, args) {
    if (args.length && args[0].trim().length) {
      return new target(args[0]);
    }
    return new target(target.owner, ++target.renewed);
  },
};

JSLicense = new Proxy(target, handler); // How to even approach this?

License = new JSLicense("Codewars");

console.log(License.owner);

// let newLicense = new new new new License()()()();

// console.log(newLicense.renewed);
