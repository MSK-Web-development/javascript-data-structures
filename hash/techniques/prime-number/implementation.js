/*

{key:7, value: "hi"}
{key:24, value: "hello"}
{key:42, value: "sunny"}
{key:34, value: "weather"}

*/

function primeNumberHashFunc(primeNumber, key) {
  return key % primeNumber;
}

let hashArray = [];

hashArray.push(primeNumberHashFunc(11, 7));
hashArray.push(primeNumberHashFunc(11, 24));
hashArray.push(primeNumberHashFunc(11, 42));
hashArray.push(primeNumberHashFunc(11, 34));
hashArray.push(primeNumberHashFunc(11, 18)); // collision

console.log(hashArray)
