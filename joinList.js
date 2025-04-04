/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const joinList = function(arr) {

  let newStr = '';
  const arrLength = arr.length;
  
  if (arrLength === 0) {
    return newStr;
  } else if (arrLength === 1) {
    return arr[0];
  } else {
    for (let arrIndex = 0; arrIndex < arrLength - 1; arrIndex++) {
      newStr += `${arr[arrIndex]}, `;
    }
    return newStr + `${arr[arrLength - 1]}`;
  }
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);

console.log('Today I learned about', concepts);
