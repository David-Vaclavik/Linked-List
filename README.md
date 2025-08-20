# Linked List

A **Singly Linked List** implementation in JavaScript using factory functions. This data structure provides efficient insertion and deletion operations at both ends of the list.

## Features

- **Dynamic size** - grows and shrinks as needed
- **Memory efficient** - only allocates memory for existing nodes
- **Method chaining** - most methods return `this` for chaining operations
- **Zero-based indexing** - head node is at index 0

## Installation

```javascript
import linkedList from "./linked-list.js";
```

## Usage

### Creating a new list

```javascript
const list = linkedList();
```

### Basic Operations

```javascript
// Add elements
list.append(1).append(2).append(3);
// List: ( 1 ) -> ( 2 ) -> ( 3 ) -> null

list.prepend(0);
// List: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Display the list
list.toString();
// Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null
```

## API Reference

### Adding Elements

#### `append(value)`

Adds a new node containing `value` to the end of the list.

```javascript
list.append(5);
// Returns: this (for chaining)
```

#### `prepend(value)`

Adds a new node containing `value` to the start of the list.

```javascript
list.prepend(0);
// Returns: this (for chaining)
```

#### `insertAt(value, index)`

Inserts a new node with the provided `value` at the given `index`.

```javascript
list.insertAt(10, 2); // Insert 10 at index 2
// Returns: this (for chaining)
```

### Removing Elements

#### `pop()`

Removes the last element from the list.

```javascript
list.pop();
// Returns: this (for chaining)
```

#### `removeAt(index)`

Removes the node at the given `index`.

```javascript
list.removeAt(1); // Remove node at index 1
// Returns: this (for chaining)
```

### Accessing Elements

#### `head()`

Returns the first node in the list.

```javascript
const firstNode = list.head();
// Returns: node object or null if empty
```

#### `tail()`

Returns the last node in the list.

```javascript
const lastNode = list.tail();
// Returns: node object or null if empty
```

#### `at(index)`

Returns the node at the given `index` (head is index 0).

```javascript
const node = list.at(2);
// Returns: node object or "Error: Index is out of bounds"
```

### Information Methods

#### `size()`

Returns the total number of nodes in the list.

```javascript
const length = list.size();
// Returns: number
```

#### `contains(value)`

Returns `true` if the passed value is in the list, otherwise `false`.

```javascript
const exists = list.contains(5);
// Returns: boolean
```

#### `find(value)`

Returns the index of the node containing `value`, or `null` if not found.

```javascript
const index = list.find(5);
// Returns: number (index) or null
```

#### `toString()`

Displays the LinkedList as a string in the console.

```javascript
list.toString();
// Output: ( value ) -> ( value ) -> ( value ) -> null
```

## Example Usage

```javascript
const list = linkedList();

// Build a list
list.append(1).append(2).append(3).prepend(0);

console.log(list.size()); // 4
list.toString(); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Find elements
console.log(list.find(2)); // 2
console.log(list.contains(5)); // false

// Insert and remove
list.insertAt(1.5, 2);
list.toString(); // ( 0 ) -> ( 1 ) -> ( 1.5 ) -> ( 2 ) -> ( 3 ) -> null

list.removeAt(2);
list.toString(); // ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null

// Access nodes
console.log(list.head().value); // 0
console.log(list.tail().value); // 3
console.log(list.at(1).value); // 1
```

## Node Structure

Each node in the list has the following structure:

```javascript
{
  value: any,        // The data stored in the node
  nextNode: object   // Reference to the next node (null for tail)
}
```

## Time Complexity

| Operation         | Time Complexity |
| ----------------- | --------------- |
| `append()`        | O(1)            |
| `prepend()`       | O(1)            |
| `pop()`           | O(n)            |
| `size()`          | O(1)            |
| `head()`          | O(1)            |
| `tail()`          | O(1)            |
| `at(index)`       | O(n)            |
| `contains(value)` | O(n)            |
| `find(value)`     | O(n)            |
| `insertAt(index)` | O(n)            |
| `removeAt(index)` | O(n)            |

## Error Handling

- **Index out of bounds**: Methods that accept an index will return an error message for invalid indices
- **Empty list operations**: Methods handle empty list cases gracefully
- **Method chaining**: Most methods return `this` to allow chaining operations

## License

This project is open source and available under the [MIT License](LICENSE).
