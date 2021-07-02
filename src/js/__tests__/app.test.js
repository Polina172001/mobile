import Mobile from '../app';

test('check validateMobile', () => {
  const phone = new Mobile('8 (927) 000-00-00');
  expect(phone.validateMobile()).toBe(true);
});

test('check validateMobile', () => {
  const phone = new Mobile('8 (927) 0hh-00-00');
  expect(phone.validateMobile()).toBe(false);
});

test('check format', () => {
  const phone = new Mobile('8 (927) 000-00-00');
  expect(phone.format()).toBe('+79270000000');
});

test('check format', () => {
  const phone = new Mobile('+7 960 000 00 00');
  expect(phone.format()).toBe('+79600000000');
});

test('check format', () => {
  const phone = new Mobile('+86 000 000 0000');
  expect(phone.format()).toBe('+860000000000');
});
