const nums = [6, 5, 2, 3, 4, 1, 0];

// Remove each of the last two items with pop(), saving each item to a variable
const lastItem1 = nums.pop();
const lastItem2 = nums.pop();

// Remove each of the first two items with shift(), saving each item to a variable
const firstItem1 = nums.shift();
const firstItem2 = nums.shift();

// Save all the removed items in an array
const removedItems = [firstItem1, firstItem2, lastItem2, lastItem1];

// Use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(removedItems[3], removedItems[2]);
nums.push(removedItems[0], removedItems[1]);

console.log(nums);
