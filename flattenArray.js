function flattenArray(x) {
    let result = [];
    let func = function(arr) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; ++ i) {
                func(arr[i]); // do this recursively
            }
        } else {
            result.push(arr); // put the single element to result
        }
    }
    func(x);
    return result;
}

flattenArray([1, 3, [5, 7, [9, 11]], 13])