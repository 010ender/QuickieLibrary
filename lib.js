const lib = {
    // MATH
    randomNumber: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max);
    },
    
    lerp: function(start, end, amount) {
        return start + (end - start) * amount;
    },

    map: function(value, inMin, inMax, outMin, outMax) {
      return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    
    // STRINGS
    stringIsEmpty: function(string) {
        if(String(string) === "") {
            return true;
        } else {
            return false;
        }
    },

    capitalizeFirstLetterOfString: function(string) {
        if (lib.stringIsEmpty(string)) {
            return "";
        }
        
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    slugify: function(string) {
        return text
            .toString()
            .normalize('NFD') // normalize Unicode
            .replace(/[\u0300-\u036f]/g, '') // remove diatrics
            .toLowerCase()
            .trim() // remove whitespace before and after string
            .replace(/\s+/g, '-') // spaces to hypens
            .replace(/[^\w-]+/g, '') // characters except for hypens go bye-bye
            .replace(/--+/g, '-'); // a groupd of hypens shrink to a lonely one
    }
}
