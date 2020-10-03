exports.min = function min(array) {
    if (!array) return 0;
    let result = array.sort((a, b) => a - b);
    return result[0] || 0;
};

exports.max = function max(array) {
    if (!array) return 0;
    let result = array.sort((a, b) => b - a);
    return result[0] || 0;
};

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, curr) => acc + curr, 0) / array.length;
};
