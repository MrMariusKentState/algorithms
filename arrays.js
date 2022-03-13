
// var i = 1;
// print(i);

// while (i < 255)
//     console.log(i);
//     i++;

function twosum (array, target) {
    indices = [];
    for(i = 0; i < array.length; i++) {
        console.log(array[i])
        for(j = i + 1; j < array.length; j++) {
            console.log(array[j])
            if (array[i] + array[j] == target) {
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }

    }
}


target = 6;
array = [3, 2, 4];
indices = twosum(array, target);
console.log(indices);





// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


function threesum (nums) {
    indices = [];
    if(nums.length < 3) {
        return indices;
    }

    for(i = 0; i < nums.length; i++) {
        
        for(j = i + 1; j < nums.length; j++) {
            for(k = j + 1; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] == 0 && nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k]) {
                    indices[i] = [];
                    subarray = indices[i];
                    subarray.push(nums[i]);
                    subarray.push(nums[j]);
                    subarray.push(nums[k]);
                
                }
            }
    
        }

    }
    return indices;

}


nums = [-1,0,1,2,-1,-4]
final = threesum(nums)
console.log(final)


// if(nums[i] + nums[j] + nums[k] == 0 && nums[i] != nums[j] && nums[j] != nums[k] && nums[i] != nums[k]) {



// Palindrome
//https://leetcode.com/problems/palindrome-number/

// function palindrome(x) {

//     num = x.toString()
//     j = num.length - 1;

//     for(i = 0; i < num.length; i++){
//     for (j = num.length - 1; j >= 0; j--); {
//         array.push(num[i])
//     }
//     return array
        

// }

// integer = 32123
// final = palindrome(integer);
// console.log(final)



// Non-empty array
// function nonempty 



function singleNumber (nums) {
    once = [];

    for(i = 0; i < nums.length; i++) {
        count = 0;
        for(j = 0; j < nums.length; j++) {
            
            if (nums[i] == nums[j]) {
                count++
                    if (count == 2) {
                        break;
                    }
            }
            
            if (j == nums.length -1 && count == 1) {
                temp = nums[i];
                console.log(temp);
                
                once.push(temp);
                }
            
        }
        
    }
    return once; 
}

array = [1,2,1,3,7,6,2,9]
final = singleNumber(array)
console.log(final);

// Array keeps being overwritten!  Need to find the proper place to store it Fuck1!!!!!!!!



// function majority (nums) {
    

//     counter = 0
//     for(i = 0; i < nums.length; i++){
//         console.log([i])
//         for(j = 0; j <= nums.length; j++) {
//             if (nums[i] == nums[j]) {
//                 counter++
//                 console.log([j])
//                 if (counter > (nums.length / 2)) {
//                     return nums[i]
//                 }
//             }
//         }
//     }
// }

function majority (nums) {
    
    index = []
    counter = 1
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                counter++                
            }
            if (nums[j] == nums.length - 1){
                index.push(counter);
            }
        }
    }
    console.log(index)
    for(k = 0; k < nums.length; k++) {
        if (index[k] > (nums.length / 2)) {
            return index[k]
        }
    }
}

nums = [2,2,1,1,1,2,1]
final = majority(nums)
console.log(final)




function prefix (array) {
    
    common = "";
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {

            if (array[i][i] != array[j][i]){
                break
            }

            else if (j == array.length - 1) {
                common = common + array[i][i]
            }
                
            }  
        }

     
    if (common == "") {
        return ""
    }
    return common

    }

array = ["throw","flow","hit"]
final = prefix(array);
console.log(final)



// function sqrt(x) {
//     i = 1;
//     while((i * i) <= x) {
//         i += 1;
//     }
//     i -= 1;
//     return i
    
// }

function sqrt(x) {
    
    for(i = 1; i * i <= x; i++){
    }
    i -= 1;
    return i
    
}

sq = 9
final = sqrt(sq)
console.log(final)


function two(x) {
   
    for(i = 0; (2 ** i)<=x; i++) {
        if((2 ** i) == x){
            return true
        }
    }
    return false
}

variable = 1
final = two(variable);
console.log(final)




//leetcode.com/problems/roman-to-integer/

function roman (x) {
    i = x;
    num = ''

    while(i > 0) {
        if(i > 1000) {
            i -= 1000;
            num += 'M'
        }
        if(i > 900) {
            i -= 900;
            num += 'MC'
        }
        if(i > 500) {
            i -= 500;
            num += 'D'
        }
        if(i > 400) {
            i -= 400;
            num += 'DC'
        }

    }
    
}






// function threesum (x) {
    
//     y = x
//     threes = []

//     for(y = x; y > 1; y = y/3) {
//         if(y % 3 != 0) {
//             return false
//         }
//         threes.push(y)
//         console.log(threes)
//     }

//     for(i = 0; i < threes.length; i++) {
//         for(j = 0; (3 ** j) <= threes[i]; j++) {
//             console.log(threes[i])
//             if((3 ** j) == threes[i]) {
//                 break
//             }
//             if ((3 ** j) > threes[i]) {
//                 return false
//             }

//         }
//     }
//     return true

    
// }


// variable = 12
// final = threesum(variable);
// console.log(final)



//leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

// function threesum (x) {
    
//     y = x
//     for(y = x; y > 1; y = y-3) {
//         if(y % 3 != 0) {
//             y -= 1
//             if (y % 3 != 0) {
//                 return false
//             }
//             else {
//                 continue
//             }
//         }
//     return true
    
//     }
// }

// variable = 21
// final = threesum(variable);
// console.log(final)


function dupe (array) {
    for(i = 0; i < array.length; i++ ){
        for(j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                return true
            }
        }
    }
    return false
}



array = [1,5,2,3,7]
final = dupe(array);
console.log(final)