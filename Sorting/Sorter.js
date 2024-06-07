const Sorter = (array, color) => {
  let categorized = {};

  array.forEach((item) => {
    let letter = item.charAt(0);
    if (!categorized[letter]) {
      categorized[letter] = [];
    }
    categorized[letter].push(item);
  });

  let finalArray = [];
  for (let key in categorized) {
    if (color == "white") {
      categorized[key].sort();
    } else {
      categorized[key].sort((a, b) => b.localeCompare(a));
    }

    finalArray.push(categorized[key]);
  }

  return finalArray;
};

export default Sorter;

// let arr = ["a1", "b2", "b5", "c7", "b1"];

// // Function to categorize and sort array items
// function categorizeAndSort(array) {
//     // Object to store arrays by their starting letter
//     let categorized = {};

//     // Categorize each item
//     array.forEach(item => {
//         let letter = item.charAt(0);
//         if (!categorized[letter]) {
//             categorized[letter] = [];
//         }
//         categorized[letter].push(item);
//     });

//     // Create the final array of sorted arrays
//     let finalArray = [];
//     for (let key in categorized) {
//         categorized[key].sort();
//         finalArray.push(categorized[key]);
//     }

//     return finalArray;
// }

// let result = categorizeAndSort(arr);
// console.log(result); // Output: [ [ 'a1' ], [ 'b1', 'b2', 'b5' ], [ 'c7' ] ]
