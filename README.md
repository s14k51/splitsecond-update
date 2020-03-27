# @splitsecond/update

Updates an existing datetime string by adding or subtracting some units.

`splitsecond` is a simple date manipulation library for Node. This library always returns ISO 8601 datetime stamps in UTC.

# Installation

```bash
npm i -S @splitsecond/update
```

or

```bash
yarn add @splitsecond/update
```

# Usage

`update(datetimestamp: string, units: Units): string`

```javascript
const update = require("@splitsecond/update");

// To add, specify the units as positive numbers
update("2020-03-26T20:41:15.791Z", { seconds: 4 });
// '2020-03-26T20:41:19.791Z'

// To subtract, specify them as negative numbers
update("2020-03-26T20:41:15.791Z", { minutes: -3 });
// '2020-03-26T20:38:15.791Z'
```

## Units

```json
{
  "milliseconds": 3,
  "seconds": 4,
  "minutes": -5,
  "hours": 1,
  "days": 1,
  "weeks": 0
}
```