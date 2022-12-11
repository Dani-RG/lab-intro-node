class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.items.length) {
      let value = this.items[pos];
      return value;
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > this.items[i-1]) {
        return this.items[i];
      }
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < this.items[i+1]) {
        return this.items[i];
      }
    }
  }

  sum() {
    let sumAll = 0;
    for (let i = 0; i < this.items.length; i++) {
      sumAll += this.items[i];
    }
    return sumAll;
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    let sumAll = 0;
    for (let i = 0; i < this.items.length; i++) {
      sumAll += this.items[i];
    }
    return sumAll / this.items.length;

  }
}

module.exports = SortedList;