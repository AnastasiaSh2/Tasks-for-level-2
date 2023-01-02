// ES6 class IntBuilder:
class FirstIntBuilder {

  constructor(val){
      super();
      this.val = val;
      if(val === undefined){
          this.val = 0;
       }
  }
  plus(...n){
      for(let i =0; i < n.length; i++){
          this.val += n[i];
      }
      return this;
  }
  minus(...n){
      for(let i=0; i<n.length; i++){
      this.val -= n[i];
      }
      return this;
  }
  multiply(n){
      this.val *= n;
      return this;
  }
  divide(n){
      this.val /= n;
      this.val = Math.round(this.val);
      return this;
  }
  mod(n){
      this.val %= n;
      return this;
  }
  static random (from, to){
      let rand = Math.floor(Math.random() * to) + from;
      return rand;
  }

}

class IntBuilder extends FirstIntBuilder {}

let rand = IntBuilder.random(10, 100);
console.log(rand);

let intBuilder = new IntBuilder(10); // 10;
let result = intBuilder
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get(); // -> 1;
console.log(result);

// ES5 class StringBuilder
function StringBuilder(value = "") {
  this.value = value;
}

StringBuilder.prototype.plus = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this.value += args[i];
  }
  return this;
};

StringBuilder.prototype.minus = function (n) {
  this.value = this.value.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (int) {
  let str = "";
  for (let i = 0; i < int; i++) {
    str += this.value;
  }
  this.value = str;
  return this;
};

StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.value.length / n);
  this.value = this.value.slice(0, k);
  return this;
};

StringBuilder.prototype.remove = function (str) {
  this.value = this.value.split(str).join("");
  return this;
};

StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.slice(from, from + n);
  return this;
};

StringBuilder.prototype.get = function () {
  return this.value;
};

function StringBuilder(value) {
  StringBuilder.call(this, value);
}

StringBuilder.prototype = Object.create(StringBuilder.prototype);

let strBuilder = new StringBuilder("Hello"); // 'Hello';
let res = strBuilder
  .plus(" all", "!") // 'Hello all!'
  .minus(4) // 'Hello '
  .multiply(3) // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove("l") // 'He';
  .sub(1, 1) // 'e';
  .get(); // -> 'e';
console.log(res);
