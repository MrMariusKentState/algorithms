
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
    

    for(i = 0; i<array.length; i++) {
        for(j = i  + 1; j<array.length; j++){
            if(array[i] == array[j]) {
                delete array[j]
                
            }
        }
    }
    console.log(array)

    for(k = 0; k<array.length; k++){
        if(array[k] != null) {
            continue
        }
        else {
            for(l = k + 1; l<array.length; l++){
                array[k] = array[l]
            }
        }
    }
    console.log(array)

}

array = [0,0,1,1,1,2,2,3,3,4]
final = duplicates(array)




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