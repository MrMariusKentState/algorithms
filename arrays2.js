
function palindrome(x) {

    num = x.toString()
    i = 0;
    j = num.length - 1;

    while (i < j) {
        
        if(num[i] != num[j]) {
            return false
        }

        i++
        j--
        
    }
    return true

}

y = 123321
final = palindrome(y)
console.log(final)



function insert (nums, target) {
    for(i = 0; i < nums.length; i++) {

        if(nums[i] == target) {
            return i
        }
        if(target < nums[i] && i == 0){
            return 0
        }
        if(target > nums[i] && i == nums.length - 1) {
            return i + 1
        }
        if(nums[i - 1] < target && target < nums[i]) {
            return i
        }
    }
}


nums = [7,8,6,36]
target = 29
final = insert(nums, target)
console.log(final)



//function appears to work!  But run time is too long!!  :(

function area (height) {

max = 0

for(i = 0; i < height.length - 1; i++) {
    for(j = i + 1; j < height.length; j++) {
        
        x = j - i

        if(height[j] >= height[i]) {
            multiply = height[i] * x

        }
        if(height[i] >= height[j]) {
            multiply = height[j] * x

        }
        
        if(multiply > max) {
            max = multiply
        }

    }
}
return max

}

height = [1,7,3,4]
final = area(height)
console.log(max)






// function find (container) {

// max = 0
// for(k = 0; k < container.length; k++) {
    
//     if(container[k] > max) {
//         max = container[k]
//         console.log(max)
//     }
    
// }

// return max

// }

// container = [1,8,6,2,9,5,4,8,3,7]
// final = find(container)
// console.log(final)



function area (height) {

    container = []
    final = Math.max(container)
    
    
    for(i = 0; i < height.length - 1; i++) {
        for(j = i + 1; j < height.length; j++) {
            
            x = j - i
    
            if(height[j] >= height[i]) {
                multiply = height[i] * x
    
            }
            if(height[i] >= height[j]) {
                multiply = height[j] * x
    
            }

            container.push(multiply)
            console.log(container)
    
        }
    }
    
    return final
    
    }
    

height = [1,8,6,2,5,4,8,3,7]
final = area(height)
console.log(final)


//leetcode.com/problems/median-of-two-sorted-arrays/

function median (nums1,nums2) {

    for(i = 0; i<nums1.length; i++){
        if(nums2[j] < nums1[i])
    }

}


nums1 = [1,2,4,5]
nums2 = [3,6]
median(nums1,nums2)




function stability (array) {

    count = 0

    for(i = 0; i < array.length; i++) {
        for(j = i + 1; j < array.length; j++) {
            temp1 = array[i + 1] - array[i]
            temp2 = array[j + 1] - array[j]
            console.log(array[i],array[j],count)
            
            if(temp1 != temp2) {
                break
            }
            if (temp1 == temp2) {
                for(k = j+1; k<array.length; k++) {
                    temp3 = array[k + 1] - array[k]
                    if(temp2 != temp3){
                        count++
                        break
                    }
                }
                
            }
        }
    }

    return count

}

array = [-1,1,3,3,3,2,3,2,1,0]
final = stability(array);
console.log(final)




function hillsandvalleys (array) {
    
    count = 0

    for(i = 0; i < array.length; i++) {
    console.log(i, count)
        if (i == 0) {
            for(j = i + 1; j < array.length; j++) {
                if(array[j] != array[0]) {
                    count++
                    i = j - 1
                    break
                }
            }
        }

       if(array[i] < array[i + 1] && array[i + 1] < array[i + 2]) {
           continue
       }

       if(array[i] > array[i + 1] && array[i + 1] > array[i + 2]){
           continue
       }

       if(array[i - 1] < array [i] && array[i] > array[i + 1]){
           count++
       }

       if(array[i - 1] > array[i] && array[i] < array[i + 1]) {
           count++
       }

       if(array[i - 1] < array[i] && array[i] == array[i + 1]) {
           for(j = i + 1; j < array.length; j++) {
            

            if(array[j] > array[i]){
                break
            }
            if(array[j] == array[i]) {
                if(j == array.length - 1) {
                    count++
                    return count
                }
                else {
                continue
                }
            }
            if(array[j] < array[i]){
                count++
                i = j - 1
                break
            }
           }
       }

       if(array[i - 1] > array[i] && array[i] == array[i + 1]) {
        for(j = i + 1; j < array.length; j++) {

            if(array[j] < array[i]){
                break
            }
            if(array[j] == array[i]) {
                if(j == array.length - 1) {
                    count++
                    return count
                }
                else {
                continue
                }
            }
            if(array[j] > array[i]){
                count++
                i = j - 1
                break
            }
        }
    }

    if (i == array.length - 1) {
        count++
    }

    }

    return count

}


array = [2,2,3,4,3,3,2,2,1,1,2,5]
final = hillsandvalleys(array)
console.log(final)







function combo (popularity, k){

    newlist = []
    newlist.push(0)
    add = 0

    for(i = 0; i < popularity.length; i++) {
        
        for(j = i; j < popularity.length; j++) {
            temp = add + popularity[j]
            newlist.push(temp)
            console.log(add, newlist)
            }
        add = add + popularity[i]  
        }
    console.log(newlist)
    }


popularity = [3, 5, -2]
k = 3
final = combo(popularity, k)




function duplicates (array) {
    
    newarray = []

    for(i = 0; i<array.length; i++) {
        for(j = i  + 1; j<array.length; j++){
            if(array[i] == array[j]) {
                delete array[j]
                
            }
        }
    }
    console.log(array)

    for(k = 0; k < array.length; k++) {
        if(array[k] == null) {
            continue
        }
        else {
            newarray.push(array[k])
        }
    }

    return newarray

}

array = [1,1,2]
final = duplicates(array)
console.log(final)



function removeelement(array, val) {

    count = 0

    for(i = 0; i < array.length; i++) {
        if(array[i] == val) {
            delete array[i]
        }

        else {
            count++
        }
    }
    
    return count
    
    }


array = [3,2,2,3]
val = 3
final = removeelement(array, val)
console.log(final)




function columntitle (letters) {
    
    counter = 0;
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (i = 0; i <= alphabet.length; i++) {
        counter++
        if(alphabet[i] == letters) {
            return counter
        }
    }
}

letters = "G"
final = columntitle(letters)
console.log(counter)



function squaresarray (array) {

   
    for(i = 0; i<array.length; i++) {
        array[i] = array[i] * array[i]
    }

    for (i = 0; i < array.length; i++) {
        target = array[i];
        for (j = i - 1; j >= 0 && (array[j] > target); j--) {
            array[j+1] = array[j];
        }
        array[j+1] = target
    }

    return array
    
}


array = [-4,-1,0,3,10]
final = squaresarray(array)
console.log(final)



function removeElement (nums, val) {

    newarray = []
    for(i = 0; i < nums.length; i++) {
        if(nums[i] == val) {
            newarray.push("")
        }
        else {
            newarray.push(nums[i])
        }

    }
    
    return newarray
};


nums = [3,2,2,3]
val = 3
final = removeElement(nums, val)
console.log(final)




function staircase (coins) {
    rows = 0
    for(i = 1; i <= coins; i++ ) {
        console.log(coins, rows)
        coins = coins - i;
            if(coins < 0) {
                break
            }
        rows++
    }
    return rows
}


coins = 8
final = staircase(coins)
console.log(final)



function segments (chars) {
    spaces = 0
    for(i = 0; i <= chars.length; i++) {
        console.log(chars[i])
        if(chars[i] == " "){
            spaces++
        }
    }
    words = spaces + 1
    return words
}

chars = "Hello"
final = segments(chars)
console.log(final)



function uniquesum(array) {
    sum = 0
    
    for(i = 0; i < array.length; i++) {

        if (array.length == 1){
            sum = sum + array[i]
            return sum
        }
        
        for(j = 0; j < array.length; j++) {
            
            if(i == j) {
                continue
            }

            if(array[i] == array[j]) {
                break
            }
            if(j == array.length - 1 && array[i] != array[j]){
                sum = sum + array[i]
            }
        }
    }

    k = array.length - 1
    
        for(l = k - 1; l >= 0; l--) {
            if(array[k] == array[l]) {
                break
            }
            if(l == 0 && array[k] != array[l]){
                sum = sum + array[k]
            }

        }
    

    return sum

}


array = [10,4,10,9,5]
final = uniquesum(array)
console.log(final)









// function common (array) {
//     newarr = []
//     for(i = 0; i < array.length; i++) {
//         for(j = 0; j < array[i].length; j++ ) {
           
//         }
//     }

// }

// array = ["bella","label","roller"]
// final = common(array)
// console.log(final)

// https://leetcode.com/problems/find-common-characters/


// function maxsixnine (num) {
//     numstr = num.toString();
//     max = numstr
//     for(i = 0; i < numstr.length; i++) {
//         console.log(numstr[i])
//         numstr[i] = 9
//         if(numstr > max) {
//             numstr = max
//         }
//     }
//     return max


// }

// num = 6996
// final = maxsixnine(num)
// console.log(final)

// https://leetcode.com/problems/maximum-69-number/


function goodpairs (array) {
    
    count = 0
    for(i = 0; i < array.length; i++) {
        for(j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++
            }
        }
    }
    return count
}


nums = [1,1,1,1]
final = goodpairs(nums)
console.log(final)



function squaretriples (num) {

    count = 0
    for(i = 1; i < num; i++) {
        for(j = 1; j < num; j++){
            for(k = 1; k <= num; k++) {
            if(i ** 2 + j ** 2 == k ** 2) {
                count++
            }
            }
        }
    }
    return count

}


num = 10
final = squaretriples(num)
console.log(final)



function lowhigh (low, high) {
    count = 0
    for(i = low; i >= low && i <= high; i++ ) {
        if(i % 2 != 0) {
            count++
        }
    }

    return count

}


low = 3
high = 7
final = lowhigh(low,high)
console.log(final)




function sum (num1, num2) {
    return num1 + num2
}

num1 = 8
num2 = 5
final = sum(num1, num2)
console.log(final)



function productminussum (num) {
    let arr = Array.from(String(num), Number);
    total = 0
    product = 1
    for(i = 0; i < arr.length; i++) {
        total = total + arr[i]
        product = product * arr[i]
    }
    return product - total
}

num = 4421
final = productminussum(num)
console.log(final)



function perfectnumber (num) {
    divisors = []
    for(i = 1; i < num; i++) {
        if(num % i == 0){
            divisors.push(i)
        }
    }
    total = 0
    for(j = 0; j < divisors.length; j++) {
        total = total + divisors[j]
    }

    if (total == num) {
        return true
    }
    else {
        return false
    }

}


num = 6
final = perfectnumber(num)
console.log(final)



// String Dupes function in progress from leetcode

// function stringdupes (s) {

//     var word = s

//     for(i = 0; i < word.length; i++) {
//             if(word[i] == word[i + 1]) {
//                console.log("word[i] is ", word[i])

//                word.slice(i)
//                word.slice(word[i + 1])
               
//                console.log("word[i] is now", word[i])
//             }

        
//     }

//     return word
// }


// word = "abbaca"
// final = stringdupes(word)
// console.log(final)