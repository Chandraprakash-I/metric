const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
//1
    test('convertHandler should correctly read a whole number input',function(){
        let input='10mi';
        console.log('here');
        assert.equal(convertHandler.getNum(input),10);
    });
//2
    test('convertHandler should correctly read a decimal number input',function(){
        let input='2.2mi';
        assert.equal(convertHandler.getNum(input),2.2);
    });
//3
    test('convertHandler should correctly read a fractional input',function(){
        let input='2/2mi';
        assert.equal(convertHandler.getNum(input),1);
    });
//4 
    test('convertHandler should correctly read a fractional input with a decimal',function(){
        let input='2.2/2mi';
        assert.equal(convertHandler.getNum(input),1.1);
    });
//5
    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)',function(){
        let input='2/2/2mi';
        assert.equal(convertHandler.getNum(input),"invalid number");
    });
//6
    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided',function(){
        let input='';
        assert.equal(convertHandler.getNum(input),1);
    });
//7
    test(' convertHandler should correctly read each valid input unit',function(){
        let input=['gal','l','lbs','kg','mi','km'];
        assert.equal(convertHandler.getNum(input[0]),1);
        assert.equal(convertHandler.getNum(input[1]),1);
        assert.equal(convertHandler.getNum(input[2]),1);
        assert.equal(convertHandler.getNum(input[3]),1);
        assert.equal(convertHandler.getNum(input[4]),1);
        assert.equal(convertHandler.getNum(input[5]),1);
    });
//8
    test('convertHandler should correctly return an error for an invalid input unit',function(){
        let input='mil';
        assert.equal(convertHandler.getUnit(input),'invalid unit');
    });
//9
    test('convertHandler should return the correct return unit for each valid input unit',function(){
        let input=['gal','l','lbs','kg','mi','km'];
        assert.equal(convertHandler.getReturnUnit(input[0]),'L');
        assert.equal(convertHandler.getReturnUnit(input[1]),'gal');
        assert.equal(convertHandler.getReturnUnit(input[2]),'kg');
        assert.equal(convertHandler.getReturnUnit(input[3]),'lbs');
        assert.equal(convertHandler.getReturnUnit(input[4]),'km');
        assert.equal(convertHandler.getReturnUnit(input[5]),'mi');
    });
//10
    test('convertHandler should correctly return the spelled-out string unit for each valid input unit',function(){
        let input=['gal','l','lbs','kg','mi','km'];
        assert.equal(convertHandler.spellOutUnit(input[0]),"gallons");
        assert.equal(convertHandler.spellOutUnit(input[1]),'liters');
        assert.equal(convertHandler.spellOutUnit(input[2]),"pounds");
        assert.equal(convertHandler.spellOutUnit(input[3]),"kilograms");
        assert.equal(convertHandler.spellOutUnit(input[4]),"miles");
        assert.equal(convertHandler.spellOutUnit(input[5]),"kilometers");
       
    });
//11
    test('convertHandler should correctly convert gal to L.',function(){
       
        assert.equal(convertHandler.convert(1,'gal'),3.78541);
    });    
//12
    test('convertHandler should correctly convert L to gal',function(){
        
        assert.equal(convertHandler.convert(1,"l"), 0.26417217685798894);
    });  
//13
    test('convertHandler should correctly convert mi to km',function(){
        
        assert.equal(convertHandler.convert(1,"mi"),1.60934); 
    }); 
//14
    test('convertHandler should correctly convert km to mi',function(){
        
        assert.equal(convertHandler.convert(1,"km"),0.6213727366498067);
    }); 
//15
    test('convertHandler should correctly convert lbs to kg',function(){
        
        assert.equal(convertHandler.convert(1,"lbs"), 0.453592 );
    }); 
//16
    test('convertHandler should correctly convert kg to lbs',function(){
        
        assert.approximately(convertHandler.convert(1,"kg"), 2.20462,0.2);
    }); 


});