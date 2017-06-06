// print numbers 1 to 100
// if number div by 3 return "Fizz"
// if number div by 5 return "Buzz"
// if number div by 3 and by 5 return "FizzBuzz"

describe('fizzbuzz', function() {
  it("should print 'fizz' when given a number divisible by 3", function() {
     expect(fizzbuzz(3)).toEqual("fizz");
  });

  it("should print 'buzz' when given a number divisible by 5", function() {
      expect(fizzbuzz(5)).toEqual("buzz");
  });

  it("should print 'fizz' when given a number divisible by 3", function() {
      expect(fizzbuzz(9)).toEqual("fizz");
  });

  it("should print 'buzz' when given a number divisible by 5", function() {
      expect(fizzbuzz(20)).toEqual("buzz");
  });

  it("should print 'fizzbuzz' when given a number divisible by 5 and by 3", function() {
     expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });

   it("should print the number if not divisible by 3 or by 5", function() {
     expect(fizzbuzz(7)).toEqual(7);
   });
});
