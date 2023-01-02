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