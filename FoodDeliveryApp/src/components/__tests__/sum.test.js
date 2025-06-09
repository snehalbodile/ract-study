import {sum} from "../sum";
test('This is testing sum of two veriable', () => {
    
    const result = sum(3,4);
    
    //Assertion
    expect(result).toBe(7);
});
