let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strArray = ["Attock", "Lahore", "Islamabad", "Karachi", "Kashmir"];

// Push Method
strArray.push("Hyderabad");
console.log(strArray);

// Pop Method
numArray.pop()
console.log(numArray);

// Shift Method
strArray.shift()
console.log(strArray);

// Unshift Method
numArray.unshift(33)
console.log(numArray);

// Length 
console.log("Length : ",numArray.length,"elements");

// at() Method
console.log(strArray.at(1));

// Join Method
console.log(strArray.join(" *-* "));

// Concat Method
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];
console.log(arr1.concat(arr2));

// Delete Method
delete numArray[2];
console.log(numArray);

// Sort Method
let numbers = [22,33,4,55,,2222,44,11,77,999,44,0,8];
numbers.sort();
console.log(numbers);

// Reverse Method
numArray.reverse();
console.log(numArray);

// Slice Method
strArray.slice(0, 3);
console.log(strArray);

// Filter Method
let nums = [11,22,33,44,55,66,77,88,99];
function my_filter(x){
    if(x%2 == 0){
        return true;
    }
    else return false
}
console.log(nums.filter(my_filter));