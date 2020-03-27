const update = require('../src/update');

describe('splitsecond update', () => {
  it('add', () => {
    const timestamp = '2020-03-26T20:41:15.791Z';
    const add = {
      milliseconds: 20,
    };
    const newTimestamp = update(timestamp, add);

    expect(newTimestamp).toEqual('2020-03-26T20:41:15.811Z');
  });

  it('subtract', () => {
    const timestamp = '2020-03-26T20:41:15.791Z';
    const subtract = {
      days: -26,
    };
    const newTimestamp = update(timestamp, subtract);

    expect(newTimestamp).toEqual('2020-02-29T20:41:15.791Z');
  });
});
