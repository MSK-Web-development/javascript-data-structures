function Stack() {
  let data = [];
  let length = 0;

  return {
    data,
    length,
    push: (item) => {
      length++;
      return data.push(item);
    },
    pop: () => {
      if (length <= 0) {
        return null;
      } else {
        length--;
        return data.pop();
      }
    },
    peek: () => {
      if (length <= 0) {
        return null;
      } else {
        return data[length - 1];
      }
    },
    isEmpty: () => {
      return !length;
    },
  };
}
