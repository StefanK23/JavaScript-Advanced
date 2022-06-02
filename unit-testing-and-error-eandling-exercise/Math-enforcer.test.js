const{ expect} = require('chai');
const {mathEnforcer} = require('./Math-enforcer');

describe('test mathEnforcer addFive functionality', () => {

    it('expect undefined on wrong input', () => {
      expect(mathEnforcer.addFive('')).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined; 
      expect(mathEnforcer.addFive('asdasdasdasdas')).to.be.undefined;    

    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);


    });
});

describe('Test mathEnforcer subtractTen functionality', ()=> {
    it('expect undefined on wrong input', () => {
        expect(mathEnforcer.subtractTen('')).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;    
      });
      it('expect proper number outcome', () => {
        expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
        


    });
    

});

describe('Test mathEnforcer summing functionality', () => {
    it('expect proper numver outcome', () => {
        expect(mathEnforcer.sum('5', 10)).to.be.undefined;
        expect(mathEnforcer.sum({}, {})).to.be.undefined;
        expect(mathEnforcer.sum([], [])).to.be.undefined;
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
     });

     it('expect the sum of two numbers', ()=> {
         expect(mathEnforcer.sum(5,5)).to.be.equal(10);
         expect(mathEnforcer.sum(-5,-5)).to.be.equal(-10);
         expect(mathEnforcer.sum(5.05,5.05)).to.be.closeTo(10.10,0.01);
         expect(mathEnforcer.sum(5.05,5)).to.be.closeTo(10.05,0.01);
         expect(mathEnforcer.sum(10,-10)).to.be.equal(0);



     });
    
});