
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

//                word.slice(i, 2)
               
//                console.log("word[i] is now", word[i])
//             }
       
        
//     }
//     return word

// }


// word = "abbaca"
// final = stringdupes(word)
// console.log(final)


function pow (x, n) {
    return x ** n
}

base = 2
power = -2
final = pow(base,power)
console.log(final)


// https://leetcode.com/problems/super-pow/

function superpow(x, n) {
    num = +n.join("")
    return x ** num
}


a = 4
b = [2,0]
final = superpow(a, b)
console.log(final)


// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
//working on the below algorithm

function buysellstock (array) {

min = array[0]
index = 0

for(i = 0; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i]
        index = i
        }
    }
console.log(min, index)

max = array[index]
for(j = index + 1; j < array.length; j++) {
    if(array[j] > max) {
        max = array[j]
    }
}
    console.log(max)
    final = max - min
    if (max <= min) {
        return 0
    }
    else return final
    
}


prices = [7,6,4,3,1]
final = buysellstock(prices)
console.log(final)



function consectriplet (array) {
    for(i = 0; i < array.length; i++) {
        for(j = i + 1; j < i + 3; j++){
            if (array[i] < array[j] && array[j] < array[j + 1]) {
                return true
            }
        }
    }
    return false
}


nums = [2,1,5,0,4,6]
final = consectriplet(nums)
console.log(final)




function dupe (nums) {

    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                return nums[i]
            }
        }
    }

}


nums = [3,1,3,4,2]
final = dupe(nums)
console.log(final)









// https://leetcode.com/problems/intersection-of-two-arrays/

function intersection (nums1, nums2) {
    intersected = []
    for(i = 0; i < nums1.length; i++) {
        for(j = 0; j < nums2.length; j++) {
            if(nums1[i] == nums2[j]) {
                intersected.push(nums1[i])
                break
            }
        }
    
    }
    return intersected.filter((item,index) => intersected.indexOf(item) === index)
    }


nums1 = [1,2,2,1]
nums2 = [2,2]
final = intersection(nums1, nums2)
console.log(final)








function wordpattern (pattern, s) {
    
    for(i = 0; i < pattern.length; i++) {
        for(j = 0; j < pattern.length; j++) {
            setpattern = pattern[i]
            sets = s[j]
            if(pattern[i] != pattern[i + 1] && sets[j] != sets[j + 1]) {
                continue
            }
            else{
                return False
            }
        }
    }
    return True
}

pattern = "abba"
s = "dog cat cat dog"
final = wordpattern(pattern, s)





function majority (nums) {

    if(nums.length == 1){
        return nums
    }

    
    for(i = 0; i < nums.length; i++){
        counter = 1
        for(j = i + 1; j < nums.length; j++) {
            
            if (nums[i] == nums[j]) {
                console.log("i is", i, "j is", j, "index is", nums[j], "counter is", counter)
                counter++
            }

            if (counter > (nums.length / 2)) {
                return nums[i]
            }

        }

        
    }
}

nums = [3,2,3]
final = majority(nums)
console.log(final)




function divide (dividend, divisor) {
    count = 0

    if(divisor < 0 || dividend < 0){
        return "Please select two different values"
    }

    for(i = dividend - divisor; i >= 0; i = i - divisor){
        count++
    }

    return count

}

dividend = 15
divisor = 3
final = divide(dividend, divisor)
console.log(final)




// https://leetcode.com/problems/keep-multiplying-found-values-by-two/

function multiplytwo (nums, original) {

    base = original

    for(i = 0; i < nums.length; i++) {
        if(nums[i] == original) {
            base = original * 2
        }
    }

}


nums = [5,3,6,1,12]
original = 3
final = multiplytwo(nums, original)




//Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
//In case of multiple subarrays, return the subarray which comes first on moving from left to right.



function continuoussubarray (arr, n, sum) {

    firstchar = 0
    lastchar = 0
    final = []

    for(i = 0; i < arr.length; i++) {  
        total = arr[i]
        for(j = i + 1; j < arr.length; j++) {
            total = arr[j] + total
            if(total == sum) {
                firstchar = i + 1
                lastchar = j + 1
                final.push(firstchar)
                final.push(lastchar)
                return final
            }
        }

    }
}


arr = [1,2,3,4,5,6,7,8,9,10]
n = 10
sum = 15
final = continuoussubarray(arr, n, sum)
console.log(final)




//https://leetcode.com/problems/reverse-integer/
//value must be within a set of values

function reverseinteger (x) {

    y = Math.abs(x)
    value = y.toString();
    final = ""
    
    if(x < 0){
        final += '-'
    }

    for(i = value.length - 1; i >= 0; i--){
        if(i == value.length - 1 && value[i] == 0) {
            continue
        }
        else {
            final += value[i];
        }


    }

    finalnum = parseInt(final)
    if(finalnum > (2 ** 31) || finalnum < (-(2 **31))) {
        return 0
    }

    return finalnum
   
}

variable = 120
final = reverseinteger(variable)
console.log(final)





//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//work in progress

function longestsubstring (x) {
    
    counter = []
    count = 1
    
    for(i = 0; i < x.length; i++) {
        for(j = i + 1; j < x.length; j++) {
            if(x[i] != x[j]) {
                count++
            }
            if(x[i] == x[j]) { 
                counter.push(count)
                count = 1
                break
            }
        }

    }
    console.log(counter)
    max = counter[0]
    for(k = 1; k < counter.length; k++) {
        if(counter[k] > max) {
            max = counter[k]
        }

    }



    return max

}


s = "abcabcbb"
final = longestsubstring(s)
console.log(final)



//https://leetcode.com/problems/letter-combinations-of-a-phone-number/
//letter combinations
//work in progress


// function letters (digits) {
//     letters = []
//     for(i = 0; i < digits.length; i++) {
//         for(j = i + 1; j < digits.length; j++) {
//             for(k = j + 1; k < digits.length; k++) {
//                 for(l = k + 1; l < digits.length; l++){

//                 }
//             }
//         }
//     }
// }


// digits = '23'
// final = letters(digits)
// console.log(final)




//https://leetcode.com/problems/find-the-duplicate-number/
//find dupes
//work in progress

function finddupe (nums) { 
    let dupe = nums.filter((a, index) => {return nums.indexOf(a) !== index})
    return dupe
}


nums = [1,3,4,2,2]
final = finddupe(nums)
console.log(final)



function excludedupe (nums) { 
    let dupe = nums.filter((a, index) => {return nums.indexOf(a) === index})
    return dupe
}


nums = [1,1,2,3,3]
final = excludedupe(nums)
console.log(final)


//https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
//let chars = ['A', 'B', 'A', 'C', 'B'];

//let uniqueChars = chars.filter((c, index) => {
//    return chars.indexOf(c) === index;
//});
//console.log(uniqueChars);
//[ 'A', 'B', 'C' ]