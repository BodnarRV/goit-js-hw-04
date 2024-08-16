function isEnoughCapacity(products, containerSize) {
    const allValues = Object.values(products);
    let totalCount = 0;

    for (const value of allValues) {
        totalCount += value
    }

    return totalCount <= containerSize;
} 


console.log("______task-1______")
console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
  ); // false