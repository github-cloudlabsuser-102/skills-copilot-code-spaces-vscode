function add(num1, num2) {
    return num1 + num2;
}

describe('add', () => {
  it('should return the sum of two positive numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(add(2, -3)).toEqual(-1);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-2, -3)).toEqual(-5);
  });

  it('should return the sum of two decimal numbers', () => {
    expect(add(2.5, 3.5)).toEqual(6);
  });
});