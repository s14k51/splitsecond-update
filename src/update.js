function parseUnits(units) {
  const attributes = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'weeks'];

  return attributes.reduce((finalUnits, unit) => {
    const value = units[unit];

    return { ...finalUnits, [unit]: typeof value === 'number' && Number.isFinite(value) ? value : 0 };
  }, {});
}

module.exports = function update(datetimestamp, units = {}) {
  const time = new Date(datetimestamp).getTime();

  if (!Number.isFinite(time) || Object.prototype.toString.call(units) !== '[object Object]') {
    return datetimestamp;
  }

  const finalUnits = parseUnits(units);
  const {
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
  } = finalUnits;
  const newTime = (
    time
    + milliseconds
    + (seconds * 1000)
    + (minutes * 60000)
    + (hours * 3600000)
    + (days * 86400000)
    + (weeks * 604800000)
  );

  return new Date(newTime).toISOString();
};
