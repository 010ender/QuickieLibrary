# personal_js_lib

A collection of features that I wish vanilla JavaScript had, such as clamp, and some features I depend on, such as generating a random integer between two values.
These are mainly tailored to my own needs. Currently, this is not an active project of mine; you can expect new features to be added on a monthly basis.

## Current features
### Math
- `lib.randomNumber(min, max)` generates a random integer between `min` and `max`. Inclusive.
- `lib.clamp(value, min, max)` returns `value` clamped between `min` and `max`. Inclusive.
- `lib.lerp(start, end, amount)` performs linear interpolation on `start` and `end`, based on the weighting factor, `amount`.
- `lib.map(value, inMin, inMax, outMin, outMax)` maps value from the input range defined by `inMin` and `inMax` to the output range defined by `outMin` and `outMax`.
If `inMin === inMax`, the function will result in a division by zero.
- `lib.areaOfCircleByRadius(radius)` returns the area of a circle given its radius. Uses the formula π * r².
- `lib.areaOfCircleByDiameter(diameter)` returns the area of a circle given its diameter. Internally converts diameter to radius and applies the formula π * r².
- `lib.circumferenceOfCircleByRadius(radius)` returns the circumference of a circle given its radius. Uses the formula 2 * π * r.
- `lib.circumferenceOfCircleByDiameter(diameter)` returns the circumference of a circle given its diameter. Uses the formula π * d.
### Strings
- `lib.stringIsEmpty(string)` returns `true` if the string is empty (`""`), and false otherwise.
- `lib.capitalizeFirstLetterOfString(string)` returns `string`, but with the first letter of the string capitalized. For example, `"example string"` would result in `"Example string"`.
- `lib.slugify(string)` alters `string` into a human-readable URL slug. The full process:
  1. Normalize Unicode
  2. Remove diatrics
  3. String to lowercase
  4. Trim whitespace at start and end
  5. Replace spaces with hyphens
  6. Replace non-word characters except for hyphens
  7. Replace multiple hyphens with one
 
### Objects
- `lib.objectIsEmpty(object)` returns true if `object` has no properties, returns false otherwise.
- `lib.objectPropertiesLength(object)` returns the number of enumerable properties in `object` as a number.
- `lib.isPlainObject(object)` determines whether `object` is a plain object (i.e., not an array, function, or other built-in type).

### Time
- `lib.isLeapYear(year)` returns true if `year` is a leap year, returns false otherwise.
- `lib.daysInMonth(month, year)` returns the days in `month` as a number. `year` is needed to account for leap years.

### Array
- `lib.unique(array)` returns a new array with only the unique elements from the input array, removing any duplicates.

### Files
- `lib.getFile()` shows the file picker, then when the user selects a file, it returns a `File` object.
- `lib.getFileWithOpts(options)` shows the file picker configured by `options`, then when the user selects a file, it returns a `File` object. Refer to Mozilla docs for configuring the file picker: [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker#parameters). If `options` is not defined, an error is returned.

### Misc
- `lib.smartGetType(value)` returns the type of `value`. It is more advanced than JavaScript's `typeof` as it can recognize arrays, dates, etc (eg: `new Error` returns `"error"`).
  This smart type detection can recognize these JS + Node.js types:
  1. null
  2. undefined
  3. NaN
  4. Infinity
  5. Symbols
  6. BigInts
  7. Functions
  8. Dates
  9. DOM objects
  10. Objects
  11. Arrays
  12. Buffers (specific to Node.js only)
  13. Proxies (outputs as "object")
  14. Revoked proxy (outputs as "proxy:revoked")

## Usage
Download the personal_js_lib.js file, and add it to your project folder/wherever you wish. Check the specified path of the library, then use `<script src="path_to_the_js_lib"></script>` (but select your path).

## Examples
Possible outcomes:

`console.log(lib.clamp(1000, 0, 100));` would output `100`.

`console.log(lib.smartGetType(() => {}))` would output `"function"`

`console.log(lib.randomNumber(20, 100))` *could* output `45`
