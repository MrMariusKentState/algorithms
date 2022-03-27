
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



