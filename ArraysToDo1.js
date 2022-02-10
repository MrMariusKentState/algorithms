// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

//The second example of the function below is the correct version.

function insert (number, array) {
    var newarr = [];
    newarr[0] = number;
    i = 0;

    while (1 == 1) {
        newarr[i + 1] = arr[i]
        i++
        if(array[i] == null) {
            break
        }
        
    }
    console.log(newarr)
}


var num = 3
var arr = [2,7,9,6,5]
insert(num, arr)





function insertsecond (number, array) {
    
    i = 1;

    temp1 = array[0];
    array[0] = number;

    while (1 == 1) {
        temp2 = array[i]
        array[i] = temp1;
        temp1 = array[i + 1]
        array[i+1] = temp2;
        i+=2;
        
        if(array[i] == null) {
            break
        }
        
    }
    
    if (temp1 == null){
        console.log(array)
    }
    else {
        array[i] = temp1;
        console.log(array)
    }
  
}


var num = 8
var arr = [1,4,5,-11,-13, 5, 91]
insertsecond(num, arr)



// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().



function firstvalue (array) {

    i = 0;

    first = array[0]

    while (1 == 1) {
        temp1 = array[i+1]
        array[i] = temp1;
        i++;
        
        if(array[i+1] == null) {
            array.pop()
            console.log(array);
            return (first)
        }
        
    }
    

  
}



var arr = [1,4,5,-11,-13, 5, 91, 62]
item = firstvalue(arr)
console.log("The first value of the array is " + item);


// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).


//number =5, index = 1, array = []
function insertat(number, index, array) {

    if (index < 0) {
        console.log("You must provide a numerical value of 0 or greater.")
    }

    else {
    
    i = index;
    temp1 = array[i];
    array[i] = number;
    i++;

    while (1 == 1) {

        temp2 = array[i]
        array[i] = temp1;
        temp1 = array[i + 1]
        array[i+1] = temp2;
        i+=2;
        
        if(array[i] == null) {
            break
        }
        
    }
    
    if (temp1 == null){
        console.log(array)
    }
    else {
        array[i] = temp1;
        console.log(array)
    }
  
    }
}

num = 5
index = 3
var arr = [1,4,6,-11,-13, 37]

insertat(num,index,arr)


// 4. Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).



// 5. Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.



// 6. Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.


// 7.  Second: Solve this without using any nested loops.
