const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (arr[i + 1] !== undefined)
                    newArr.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined)
                    newArr.push(arr[i - 1]);
                break;
            case '--discard-prev':
                newArr.pop();
                break;
            case '--discard-next':
                if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
                    i += 2;
                } else {
                    i++;
                }
                break;
            default:
                newArr.push(arr[i]);
        }
    }
    return newArr;
}


module.exports = {
    transform
};
