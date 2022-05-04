function addNumbers(a, b) {
  return a + b;
}

describe('Example test', () => { 
  it('equals true', () => { 
    expect(true).toEqual(true);
    expect('test').toEqual('test');
  });
});

describe('addNumbers', () => {
  it('adds two numbers', () => { 
    expect(addNumbers(2, 2)).toEqual(4);
  });
 });