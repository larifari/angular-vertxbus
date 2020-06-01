/*
 Simple Map implementation

 This implementation allows usage of non serializable keys for values.
 */
export default class SimpleMap {

  constructor() {
    this.clear();
  }

  // Stores the value under the key.
  // Chainable
  put(key, value) {
    var idx = this._indexForKey(key);
    if (idx > -1) {
      this.values[idx] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
    return this;
  }

  // Returns value for key, otherwise undefined.
  get(key) {
    var idx = this._indexForKey(key);
    if (idx > -1) {
      return this.values[idx];
    }
    return undefined;
  }

  // Returns true if the key exists.
  containsKey(key) {
    let idx = this._indexForKey(key);
    return idx > -1;
  }

  // Returns true if the value exists.
  containsValue(value) {
    let idx = this._indexForValue(value);
    return idx > -1;
  }

  // Removes the key and its value.
  remove(key) {
    let idx = this._indexForKey(key);
    if (idx > -1) {
      this.keys.splice(idx);
      this.values.splice(idx);
    }

  }

  // Clears all keys and values.
  clear() {
    this.keys = [];
    this.values = [];
    return this;
  }

  // Returns index of key, otherwise -1.
  _indexForKey(key) {
    for (let i in this.keys) {
      if (key === this.keys[i]) {
        return i;
      }
    }
    // console.log('[Vert.x EB SimpleMap] key not found: ', key);
    return -1;
  }

  _indexForValue(value) {
    for (let i in this.values) {
      if (value === this.values[i]) {
        return i;
      }
    }
    return -1;
  }

}
