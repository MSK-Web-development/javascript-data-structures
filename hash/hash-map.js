function hash(key, max) {
  let code = 0;
  for (let i = 0; i < key.length; i++) {
    code += key.charCodeAt(i);
  }

  return code % max;
}

const HashTable = function () {
  let storage = [];
  const storageLimit = 5;

  this.display = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    const index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
      return;
    }

    let bucket = storage[index];

    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i];

      if (element[0] === key) {
        element[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
  };

  this.lookup = function (key) {
    let index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      return false;
    }

    let bucket = storage[index];

    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i];

      if (element[0] === key) return element[1];
    }

    return false;
  };
};

// Test
let HM = new HashTable();

HM.add("John", 1234);
HM.add("Doe", 5678);
HM.add("Lisa", 9012);
HM.add("Smith", 3456);
HM.add("Kim", 7890);
HM.add("Cena", 12345);
HM.add("Seth", 23425);

console.log(HM.lookup("Doe"));
