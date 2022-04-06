const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
    arr: [],
    getLength: function () {
        return this.arr.length;
    },
    addLink: function (value) {
        this.arr.push(`( ${value} )`);
        return this;
    },
    removeLink: function (position) {
        if (this.arr[position - 1] !== undefined && position <= this.arr.length) {
            this.arr.splice(position - 1, 1);
            return this;
        } else {
            this.arr = [];
            throw new Error (`You can\'t remove incorrect link!`)
        }
    },
    reverseChain: function () {
        this.arr.reverse();
        return this;
    },
    finishChain: function () {
        let string = ''
        string += this.arr.join(`~~`);
        this.arr = [];
        return string;
    },
};

module.exports = {
    chainMaker
};
