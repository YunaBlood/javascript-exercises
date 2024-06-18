const sumAll = function(start, end, range=[]) {
    if (start < 0  || end < 0) return "ERROR"
    if (isNaN(start) || isNaN(end)) return "ERROR"
    if (Number(start) !== start || Number(end) !==end) return "ERROR"
    for(let i = Math.min(start,end); i <= Math.max(start,end); i++){
        range.push(i);
    }
    return range.reduce((start,end) => start+end);
};


// Do not edit below this line
module.exports = sumAll;
