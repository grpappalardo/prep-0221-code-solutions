var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);

console.log('The array length is ' + languagesArray.length);

languagesArray[languagesArray.length] = 'c#';
languagesArray[languagesArray.length] = 'php';
console.log('Array with additions: ' + languagesArray);

languagesArray.pop();
console.log('Array with last element removed: ' + languagesArray);

languagesArray.unshift('C++');

console.log('Array with addition at beginning: ' + languagesArray);

languagesArray.shift();
console.log('Array with first element removed: ' + languagesArray);

var thirdElement = languagesArray[2];
console.log('The third element of the array is: ' + thirdElement);

var arrayLength = languagesArray.length;
console.log('The lenth of the array is: ' + arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item is ' + lastItem);
