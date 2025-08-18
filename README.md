# personal_js_lib

A collection of features that I wish vanilla JavaScript had, such as clamp, and some features I depend on, such as generating a random integer between two values.
These are mainly tailored to my own needs. Currently this is not my active project. Expect features to come on a monthly basis.

**A CDN/server might be planned for the future. Use this library locally for now. Sorry!**

## Current features
- `randomNumber(min, max)` generates a random integer between `min` and `max`. Inclusive.
- `clamp(value, min, max)` returns `value` clamped between `min` and `max`. Inclusive.

## Usage
Download the personal_js_lib.js file, and add it to your project folder/wherever you wish. Check the specified path of the library, then use `<script src="path_to_the_js_lib"></script>` (but specify your own path).

Example usage:
Running `console.log(lib.clamp(1000, 0, 100));` outputs `100` in the terminal.
