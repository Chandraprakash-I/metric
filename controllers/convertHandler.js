function ConvertHandler() {


  this.getNum = function(input) {
    let input1=input;
    let result;
    //digits    //2.5/2.5                          .2/2.3                          .1/2.               2.3/4                  4/2.3              3/4            3.5      .5      5
  const r2 = /[0-9]+\.[0-9]+\/[0-9]+\.[0-9]+|\.[0-9]+\/[0-9]+\.[0-9]+|\.[0-9]+\/[0-9]+\.|[0-9]+\.[0-9]+\/[0-9]+|[0-9]+\/[0-9]+\.[0-9]+|[0-9]+\/[0-9]+|[0-9]+\.[0-9]+|\.[0-9]+|[0-9]+/;
  let r=input1.match(r2);
  console.log("digit:"+r);
    //- sign
    const r3=/[\+\-\/\*]/;
    let sign=input1.match(r3);
    console.log(sign);

    // /sign count
  const regex = /\//g;
  const matches = input1.match(regex);
  let  length=(!matches)?null:matches.length;

  // .count
let input3=input1;
let  length1=0;


if(sign && sign[0]==='/'){
  input3=input3.split('/');
  console.log('input3:'+input3);
  const regex1 = /\./g;
  for(let i=0; i<2; i++){
  let matches1 = input3[i].match(regex1);
  let  l=(!matches1)?null:matches1.length;
  console.log("l: "+matches1);
  console.log("l:"+l);
  if(l>1){
    console.log('here3');
    length1=3;
  }
  }
}



  
  let val=(!r)?1:r[0];
  console.log(val);

  result=eval(val);
  console.log( result);
  
  if( (sign && sign[0]!='/' || length >1) || length1){
    result="invalid number"
  }
    console.log('getNumres: '+result);
    return result;
  };
  


this.getUnit = function(input) {
    let result;
  const arr=['gal','l','lbs','kg','mi','km'];
//unit
  const r1=/[a-z]+/;
  let result1=input.match(r1);
  input=(!result1)?"":result1[0];
  console.log("unit:"+input);
   if( !(arr.includes(input)) ){
    result="invalid unit";
  }else{
    result=input;
  }
    console.log('getUnitres: '+result);
    // result=(result === "l")?'L':result;
    return result
  };
  
  this.getReturnUnit = function(initUnit) {
    let ref={
      gal: 'L',l: 'gal',kg: 'lbs',lbs: 'kg',mi: 'km',km: 'mi'
    }
    let result=ref[initUnit];
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let abb={
    km:"kilometers",
    mi: "miles",
    gal:"gallons",
    l:"liters",
    L:"liters", 
    lbs: "pounds",
    kg: "kilograms"
  }
    let result=abb[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
      let string=initUnit+'to'+this.getReturnUnit(initUnit);  
    switch(string){
          case 'galtoL':
            result=initNum*3.78541;
            break;
          case 'ltogal':
            result=initNum/3.78541;
            break;
          case 'kgtolbs':
              result=initNum/0.453592;
              break;
          case 'lbstokg':
              result=initNum*0.453592 ;
              break;
          case 'mitokm':
                result=initNum*1.60934;
                break;
          case 'kmtomi':
                result=initNum/1.60934;
                break;
          default:
            break;

        }

   console.log('convertres: '+result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    let result= initNum+' '+this.spellOutUnit(initUnit)+' converts to '+parseFloat(returnNum).toFixed(5)+" "+this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
