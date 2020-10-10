const add = require('./functions');

test('working in here', () =>{
  expect(add.add(10,4)).toBe(14);
});
