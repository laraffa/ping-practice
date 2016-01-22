describe('pingpong', function() {
  it("returns numbers 1,2 when 2 is selected", function() {
    expect(pingPong(2)).to.eql([1,2]);
  });

  it("replaces multiples of 3 with 'ping' in a number range", function() {
    expect(pingPong(3)).to.eql([1,2,'ping']);
  });

  it("replaces multiples of 5 with 'pong' in a number range", function() {
    expect(pingPong(5)).to.eql([1,2,'ping',4,'pong']);
  });

  it("replaces multiples of 15 with 'pingpong' in a number range", function() {
    expect(pingPong(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']);
  });

  it("only accepts positive integers as input (not negative integer)", function() {
    expect(pingPong(-2)).to.eql(["Please enter a number over 0."])
  });

  it("only accepts positive integers as input (not strings)", function() {
    expect(pingPong("qwerty")).to.eql(["Please enter a number over 0."]);
  });
});
