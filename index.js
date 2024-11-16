// myEach function iterates over the collection, calling the provided callback for each element.
function myEach(collection, callback) {
    // check if the collection is an object or an array
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);

    // Iterate over the elements
    for (let i = 0; i < iterable.length; i++) {
        callback(iterable[i]);
    }
    
    // Return the original collection 
    return collection;

}

// myMap func craates a new array with the results of calling a provided function on every element in the collection.

function myMap(collection, callback) {
    // Check if the collection is an object or an array.
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);

    // Create a new array to store the results
    let result = [];

    // Iterate over the elements
    for (let i = 0; i < iterable.length; i++) {
        result.push(callback(iterable[i]));
    }

    // Return the new array
    return result;
    
}


// myReduce this function reduce a collection to a single value by iteratively combining each element of the collection using the callback function and an accumulator.

function myReduce(collection, callback, acc) {
    // Check if a collection is is an object or an array.
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);

    // If no initial accumulator is provided, use the first element of the collection
    let i = 0;
    if (acc === undefined) {
        acc = iterable[0];
        i = 1;
    }

    // Iterate over the elements
    for (; i < iterable.length; i++) {
        acc = callback(acc, iterable[i], collection);
    }

    // Return the accumulated value
    return acc;
}

// myFind func looks through each value in the collection, returning the first one that passes a truth test(predicate).

function myFind(collection, predicate) {
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);

    for (let i = 0; i < iterable.length; i++) {
        if (predicate(iterable[i])) {
            return iterable[i];
        }
    }
    return undefined;
}

// myFilter ; func looks through each value in the collection, returning an array of all the values that pass a truth test (predicate)

function myFilter(collection, predicate) {
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (predicate(iterable[i])) {
            result.push(iterable[i]);
        }
    }
    return result;
    
}

// mySize; func returns the number of values in the collection;
function mySize(collection) {
    let iterable = Array.isArray(collection) ? collection : Object.keys(collection);
    return iterable.length;
}


// myFirst ; func returns the first element of an array, or the first n elements if n is provided.
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

// myLast ; function returns the last element of an array, or the last n elements if n is provided.
function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
    
}

// myKeys; func retrieves all names of an object's enumerable properties
function myKeys(object) {
    return Object.keys(object);
}

// myValues ; func returns all of the values of an object's properties.
function myValues(object) {
    return Object.values(object);
}











