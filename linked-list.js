// Factory for creating a Node
function node(value = null) {
  return {
    value,
    nextNode: null,
  };
}

// Factory for creating a LinkedList
function linkedList() {
  let head = null; // head is always the beginning and the whole list
  let tail = null; // tail is always the end
  let length = 0;

  return {
    // 1. append(value) adds a new node containing value to the end of the list
    append(value) {
      const newNode = node(value);

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        tail.nextNode = newNode;
        tail = newNode;
      }

      length++;
      return this;
    },

    // 2. prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
      const newNode = node(value);

      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.nextNode = head;
        head = newNode;
      }

      length++;
      return this;
    },

    // 3. size returns the total number of nodes in the list
    size() {
      // console.log("size: " + length);
      return length;
    },

    // 4. head returns the first node in the list
    head() {
      return head;
    },

    // 5. tail returns the last node in the list
    tail() {
      return tail;
    },

    // 6. at(index) returns the node at the given index, head is index = 0
    at(index) {
      if (index < 0 || index > length) return "Error: Index is out of bounds";

      let current = head;

      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }

      return current;
    },

    // 7. pop removes the last element from the list
    pop() {
      if (length === 0) return;
      if (length === 1) {
        head = null;
        tail = null;
        length--;
        return;
      }
      let current = head;

      for (let i = 0; i < length - 2; i++) {
        current = current.nextNode;
      }

      current.nextNode = null;
      tail = current;
      length--;
      return this;
    },

    // 8. contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
      let current = head;

      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    },

    // 9. find(value) returns the index of the node containing value, or null if not found.
    find(value) {
      let current = head;

      for (let i = 0; i < length; i++) {
        if (current.value === value) return i;
        current = current.nextNode;
      }
      return null;
    },

    // 10. toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
      let current = head;
      let values = [];

      while (current) {
        values.push(`( ${current.value} )`);
        current = current.nextNode;
      }
      values.push("null");
      console.log(values.join(" -> "));
    },

    // 11. insertAt(value, index) that inserts a new node with the provided value at the given index.
    insertAt(value, index) {
      if (index < 0 || index > length) {
        return console.log("Error: Index is out of bounds");
      }
      if (index === 0) {
        return this.prepend(value);
      }
      if (index === length) {
        return this.append(value);
      }

      let current = head;
      const newNode = node(value);

      for (let i = 0; i < length; i++) {
        if (i === index - 1) {
          let tempNext = current.nextNode;
          current.nextNode = newNode;
          newNode.nextNode = tempNext;
          break;
        }

        current = current.nextNode;
      }

      length++;
      return this;
    },

    // 12. removeAt(index) that removes the node at the given index.
    removeAt(index) {
      if (index < 0 || index >= length) {
        return console.log("Error: Index is out of bounds");
      }
      if (index === length - 1) {
        return this.pop();
      }
      if (index === 0) {
        head = head.nextNode;
        length--;
        return this;
      }

      let current = head;

      for (let i = 0; i < index; i++) {
        if (i === index - 1) {
          current.nextNode = current.nextNode.nextNode;
          break;
        }

        current = current.nextNode;
      }

      length--;
      return this;
    },
  };
}

export default linkedList;
