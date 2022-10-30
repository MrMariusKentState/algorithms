// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


function sum (arr, target) {

    indices = []
    for(i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target){
                indices.push(i, j)
                return indices
            }
        }
    }


}


arr = [0,3,9,12,5]
target = 14
final = sum(arr, target)
console.log(final)



// Given a string s, find the length of the longest substring without repeating characters.


function chars (s) {

    if(s == ""){
        return 0
    }

    counterhigh = 1
    
    for(i = 0; i < s.length; i++){
        
        counter = 1
        for(j = i + 1; j < s.length; j++){    
             
            // console.log(s[i], s[j], counter, counterhigh)
            
            if(s[i] != s[j] && i == s.length - 2 && j == s.length - 1){
                counter++
                
            }

            if(s[i] != s[j]){
                counter++
            }

            if(s[i] == s[j]){
                break
                
            }

            if(counter > counterhigh){
                counterhigh = counter
            }

            console.log("i is ", i, "s[i] is ", s[i], "s[j] is ", s[j], "counter is", counter, "counterhigh is", counterhigh)
                
           
                
        }
    
    }

 
    return counterhigh

}


s = "pwwkew"
final = chars(s)
console.log(final)


// function chars2 (s) {

//     if(s == ""){
//         return 0
//     }

//     characters = []
//     for(i = 0; i < s.length; i++) {
//         characters.push(s[i])
//     }

//     let singles = characters.filter((a, index) => {return characters.indexOf(a) === index})
    
//     finalstring = ""
//     for(j = 0; j < singles.length; j++) {
//         finalstring = finalstring + singles[j]
//     }

//     return finalstring

// }

// s = "pwwkew"
// final = chars2(s)
// console.log(final)