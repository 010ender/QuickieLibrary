// 010ENDER'S PERSONAL JS LIBRARY
// CREATED FOR MYSELF AND OTHERS
// ADDS SIMPLE BUT ESSENTIAL FUNCTIONS THAT MAKE YOUR LIFE EASIER

const lib = {
    // MATH
    randomNumber: function(min, max) {
        try {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    clamp: function(value, min, max) {
        try {
            return Math.min(Math.max(value, min), max);
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    lerp: function(start, end, amount) {
        try {
            return start + (end - start) * amount;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    map: function(value, inMin, inMax, outMin, outMax) {
        try {
            return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    areaOfCircleByRadius: function(radius) {
        try {
            return radius ** 2 * Math.PI;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    areaOfCircleByDiameter: function(diameter) {
        try {
            return (diameter / 2) ** 2 * Math.PI;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    circumferenceOfCircleByRadius: function(radius) {
        try {
            return radius * 2 * Math.PI;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    circumferenceOfCircleByDiameter: function(diameter) {
        try {
            return diameter * Math.PI;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    // STRINGS
    stringIsEmpty: function(string) {
        try {
            return String(string) === "";
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    capitalizeFirstLetterOfString: function(string) {
        try {
            if (lib.stringIsEmpty(string)) {
                return "";
            }
            return string.charAt(0).toUpperCase() + string.slice(1);
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    slugify: function(string) {
        try {
            return string
                .toString()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-');
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    validJSON: function(string) {
        try {
            JSON.parse(string);
            return true;
        } catch (error) {
            return false;
        }
    },

    copyTextToClipboard: function(string) {
        try {
            return navigator.clipboard.writeText(str);
        } catch (error) {
            return `Error: ${error.message}`
        }
    },

    readClipboardAsText: function() {
        try {
            return navigator.clipboard.readText().then((clipText) => (document.querySelector(".editor").innerText += clipText));
        } catch (error) {
            return `Error: ${error.message}`
        }
    }

    // OBJECTS
    objectIsEmpty: function(object) {
        try {
            return typeof object === 'object' && object !== null && Object.keys(object).length === 0;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    objectPropertiesLength: function(object) {
        try {
            return Object.keys(object).length;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    isPlainObject: function(object) {
        try {
            return Object.prototype.toString.call(object) === '[object Object]';
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    cleanObject: function(object) {
        try {
            return Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null && v !== ''));
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    falsy: function(value) {
        try {
            return !value;
        } catch (error) {
            return `Error: ${error.message}`
        }
    },

    // TIME
    isLeapYear: function(year) {
        try {
            year = Number(year);
            if (year % 4 !== 0) return false;
            if (year % 100 !== 0) return true;
            return year % 400 === 0;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    daysInMonth: function(month, year) {
        try {
            return new Date(year, month, 0).getDate();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    // ARRAYS
    unique: function(array) {
        try {
            return [...new Set(array)];
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    // FILES
    getFileWithOpts: async function(options) {
        try {
            if (options === undefined) {
                return "Error: define options";
            }
            const [fileHandle] = await window.showOpenFilePicker(options);
            return await fileHandle.getFile();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    getFile: async function() {
        try {
            const [fileHandle] = await window.showOpenFilePicker();
            return await fileHandle.getFile();
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },

    // MISC
    smartGetType: function(value) {
        try {
            if (value === null) return 'null';
            if (value === undefined) return 'undefined';
            if (Number.isNaN(value)) return 'nan';
            if (value === Infinity || value === -Infinity) return 'infinity';
            if (typeof value === 'symbol') return 'symbol';
            if (typeof value === 'bigint') return 'bigint';
            if (typeof value === 'function') return 'function';
            if (typeof Element !== 'undefined' && value instanceof Element) return 'dom';
            if (typeof Buffer !== 'undefined' && Buffer.isBuffer(value)) return 'buffer';

            try {
                if (typeof value === 'object') {
                    Object.getOwnPropertyNames(value);
                }
            } catch (err) {
                return 'proxy:revoked';
            }

            const rawType = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

            if (rawType === 'object' && value.constructor && value.constructor.name !== 'Object') {
                return `instance:${value.constructor.name.toLowerCase()}`;
            }

            return rawType;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
}
