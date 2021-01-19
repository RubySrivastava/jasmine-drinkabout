describe("whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });    
    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it ("should return Sorry. I can’t tell what drink because that age is incorrect!",function(){
            expect(whatCanIDrink(-5)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it ("should return Drink Toddy",function(){
            expect(whatCanIDrink(10)).toBe("Drink Toddy");
        });
        it ("should return Drink Toddy",function(){
            expect(whatCanIDrink(15)).toBe("Drink Coke");
        });
        it ("should return Drink Toddy",function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it ("should return Drink Toddy",function(){
            expect(whatCanIDrink(100)).toBe("Drink Whisky");
        });
        it ("should return Sorry. I can’t tell what drink because that age is incorrect!",function(){
            expect(whatCanIDrink("abcd")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});
