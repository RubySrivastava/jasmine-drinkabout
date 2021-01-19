describe("FizzBuzz function", function() {
    beforeEach(function() {
        number = new FizzBuzz();
    });    
    describe("Checks number", function() {
        it("should exist", function() {
            expect(FizzBuzz).toBeDefined();
        });
        it ("Fizz",function(){
            expect(FizzBuzz(6)).toEqual("Fizz");
        });
        it ("Buzz",function(){
            expect(FizzBuzz(10)).toEqual("Buzz");
        });
        it ("FizzBuzz",function(){
            expect(FizzBuzz(15)).toEqual("FizzBuzz");
        });
        it ("Buzz",function(){
            expect(FizzBuzz(20)).toEqual("Buzz");
        });
        it (7,function(){
            expect(FizzBuzz(7)).toEqual(7);
        });
       
        
    });
});
