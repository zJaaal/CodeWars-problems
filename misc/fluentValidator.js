//Fluent implementation

function Schema(value) {
  this.value = value;
  this.errors = [];
  return this;
}

Schema.prototype.number = function () {
  if (typeof this.value != "number") {
    this.errors.push("Is not a number");
  }

  return this;
};

Schema.prototype.string = function () {
  if (typeof this.value != "string") {
    this.errors.push("Is not a string");
  }

  return this;
};

Schema.prototype.min = function (int) {
  if (
    (typeof this.value == "string" && this.value.length >= int) ||
    (typeof this.value == "number" && this.value >= int)
  )
    return this;

  this.errors.push("Is less than " + int);
  return this;
};
Schema.prototype.max = function (int) {
  if (
    (typeof this.value == "string" && this.value.length <= int) ||
    (typeof this.value == "number" && this.value <= int)
  )
    return this;

  this.errors.push("Is more than " + int);
  return this;
};
Schema.prototype.required = function () {
  if (typeof this.value != "undefined") return this;
  this.errors.push("Schema is required");
  return this;
};

Schema.prototype.test = function (regex) {
  if (regex.test(this.value)) {
    return this;
  }
  this.errors.push("Regex failed");
  return this;
};

Schema.prototype.validate = function (callback) {
  if (callback(this.value)) {
    return this;
  }
  this.errors.push("Validate failed");
  return this;
};

const age = new Schema("Jal");

console.log(age);
const a = age
  .string()
  .test(/a/)
  .min(3)
  .max(5)
  .validate((x) => x == "Jal")
  .required();

console.log(a);
