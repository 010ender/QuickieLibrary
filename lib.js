// 010ENDER'S PERSONAL JS LIBRARY
// CREATED FOR MYSELF AND OTHERS
// ADDS SIMPLE BUT ESSENTIAL FUNCTIONS THAT MAKE YOUR LIFE EASIER

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

    areaOfCircleByRadius: function(radius) {
        return radius ^ 2 * Math.PI;
    },

    areaOfCircleByDiameter: function(diameter) {
        return (diameter / 2) ^ 2 * Math.PI;
    },

    circumferenceOfCircleByRadius: function(radius) {
        return radius * 2 * Math.PI;
    },

    circumferenceOfCircleByDiameter: function(diameter) {
        return diameter * Math.PI;
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
            .replace(/[^\w-]+/g, '') // non-word characters except for hypens go bye-bye
            .replace(/--+/g, '-'); // a groupd of hypens shrink to a lonely one
    },

    // OBJECTS
    objectIsEmpty: function(object) {
        return typeof object === 'object' && object !== null && Object.keys(object).length === 0;
    },

    objectPropertiesLength: function(object) {
        return Object.keys(object).length;
    },

    isPlainObject: function(object) {
        return Object.prototype.toString.call(object) === '[object Object]';
    },

    cleanObject: function(object) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
    },

    // TIME
    isLeapYear: function(year) {
        year = Number(year);

        if (year % 4 !== 0) return false;
        if (year % 100 !== 0) return true;
        return year % 400 === 0;
    },

    daysInMonth: function(month, year) {
        return new Date(year, month, 0).getDate();
    },

    // ARRAYS
    unique: function(array) {
        return [...new Set(array)];
    },

    // FILES
	getFileWithOpts: async function(options) {
  		try {
        if(options === undefined) {
          return "Error: define options";
        }
    		const [fileHandle] = await window.showOpenFilePicker(options);
    		return await fileHandle.getFile();
  		} catch (error) {
    		return "Error: " + error;
  		}
	},

	getFile: async function() {
  		try {
    		const [fileHandle] = await window.showOpenFilePicker();
    		return await fileHandle.getFile();
  		} catch (error) {
    		return "Error: " + error;
  		}
	},

    // MISC
    smartGetType: function(value) {
        return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }
}
