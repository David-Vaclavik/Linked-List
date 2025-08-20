import linkedList from "./linked-list.js";

const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// list.prepend("parrot");

list.toString();

console.log("size: " + list.size());

console.log(list.tail());

list.removeAt(2);

console.log(list.tail());
