'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  //Index page (static HTML)
app.route('/')
.get(function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


//GET ROUTE
app.route('/api/convert').get(function(req,res){

  let input=req.query.input.toLowerCase();
  let initNum=convertHandler.getNum(input);
  let initUnit=convertHandler.getUnit(input);

  let returnNum=0;
  let returnUnit=0;
  let string='';
  let obj={};
  if(initNum !== "invalid number" && initUnit !== 'invalid unit'){
    returnNum=parseFloat(convertHandler.convert(initNum,initUnit).toFixed(5));
    returnUnit=convertHandler.getReturnUnit(initUnit);
    string=convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    obj={
      initNum: initNum,
      initUnit: ((initUnit === "l")?"L":initUnit),
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string
}
  }
  


  if(initNum === "invalid number"){
    obj="invalid number"
  }
  if(initUnit === "invalid unit"){
    obj="invalid unit";
  }
  if(initNum === "invalid number" && initUnit === "invalid unit"){
    obj="invalid number and unit"
  }
      
console.log('Object: '+obj);
res.send(obj);

});



  





};
