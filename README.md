# personal_js_lib

A collection of features that I wish vanilla JavaScript had, such as clamp, and some features I depend on, such as generating a random integer between two values.
These are mainly tailored to my own needs. Currently, this is not an active project of mine - you can expect features to come monthly.

**A CDN/server might be planned for the future. Use this library locally for now. Sorry!**

## Current features
### Math
- `randomNumber(min, max)` generates a random integer between `min` and `max`. Inclusive.
- `clamp(value, min, max)` returns `value` clamped between `min` and `max`. Inclusive.
- `lerp(start, end, amount)` performs linear interpolation on `start` and `end`, based on the weighting factor, `amount`.
- `map(value, inMin, inMax, outMin, outMax)` maps value from the input range defined by `inMin` and `inMax` to the output range defined by `outMin` and `outMax`.
If `inMin === inMax`, the function will result in a division by zero.
### Strings
- `stringIsEmpty(string)` returns `true` if the string is empty (`""`), and false otherwise.
- `capitalizeFirstLetterOfString(string)` returns `string`, but with the first letter of the string capitalized. For example, `"example string"` would result in `"Example string"`.
- `slugify(string)` alters `string` into a human-readable URL slug. The full process:
  1. Normalize Unicode
  2. Remove diatrics
  3. String to lowercase
  4. Trim whitespace at start and end
  5. Replace spaces with hyphens
  6. Replace non-word characters except for hyphens
  7. Replace multiple hyphens with one

## Usage
Download the personal_js_lib.js file, and add it to your project folder/wherever you wish. Check the specified path of the library, then use `<script src="path_to_the_js_lib"></script>` (but specify your path).

Example usage:
Running `console.log(lib.clamp(1000, 0, 100));` outputs `100` in the terminal.
