// Queue - left to right

function Queue(size = 1000) {
  let data = [];
  let length = 0;

  return {
    enqueue: (item) => {
      if (length < size) {
        length++;
        data.unshift(item);
      } else {
        return "Queue is full";
      }
    },
    dequeue: () => {
      if (length) {
        length--;
        return data.pop();
      } else {
        return "Queue is empty";
      }
    },
    getLength: () => {
      return length;
    },
    getFront: () => {
      if (length) {
        return data[length - 1];
      } else {
        return "Queue is empty";
      }
    },
    getRear: () => {
      if (length) {
        return data[0];
      } else {
        return "Queue is empty";
      }
    },
    isEmpty: () => {
      return !length;
    },
    isFull: () => {
      return length === size;
    },
    print: () => {
      if (length) {
        let items = "";
        for (let item = 0; item < length; item++) {
          items += data[item];
        }
        return items;
      } else {
        return "Queue is empty";
      }
    },
  };
}

module.exports = Queue;
