// 1. Reverse


function reverse (arr) {

i = 0
j = 0

while (1 == 1) {
    if(arr[j + 1] != null) {
        j++
    }
    else {
        break
    }

}

back = arr[j]
front = arr[i]

while(1 == 1) {
    arr[i] = back
    arr[j] = front
    i++
    j--
    back = arr[j]
    front = arr[i]

    if (i >= j) {
        break
    }
    
}

console.log(arr)

}


array = [1,4,2,3,5,91]
reverse(array)


//2. Rotate


function rotate (arr, moveBy) {

    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        /* Handle rotations to the right */
        // Loop through all the rotations
        for (var i = 0; i < actualMovementsNeeded; i++) {
            // Handle the single rotation
            var temp = arr[arr.length - 1];
            // Loop moves items to the right one index
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; // Put temp value at the beginning of the array
        }
    } else {
        /* Handle rotations to the left */
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            // Loop moves items to the left one index
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
                // console.log(arr);
            }
            arr[arr.length - 1] = temp; // Put temp value at end of array
            // console.log("Array after this rotation:",arr);
        }
    }
    console.log(arr)
}


array = [4,5,6,7,8,9,10]
num = 1
rotate(array,num);



//3. Filter Range (use 'pop' and 'length')
//Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.copy
//Concat


function maxmin (arr, max, min) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            for (var j = i+1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            arr.length--; 
            i--; 
            }
        }

    return (arr)
    }

array = [55,56,27,38,96,24, 1, 40, 96]
maximum = 40
minimum = 20
range = maxmin(array, maximum, minimum)
console.log(range);


// 4. Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].



function twoarrays (arr1, arr2) {

    newarr = [];
    
    for(i = 0; i < arr1.length; i++) {
        newarr.push(arr1[i])
    }

    for (j = 0; j < arr2.length; j++) {
        newarr.push(arr2[j])
    }

    return newarr;

}

array1 = [8,6,7]
array2 = [5,3,0,9]
final = twoarrays(array1, array2)
console.log(final);




