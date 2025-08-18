const lib = {
    randomNumber: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}
