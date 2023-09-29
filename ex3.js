//Exercise 3 (a)
const stringArray = ["dog", "cat", "sheep"];

//Exercise 3 (b)
let addTask = (task) => {
    stringArray.push(task);

    return console.log(stringArray + " Length of Array: " + stringArray.length);
};

//Exercise 3 (c)
let listALLTasks = () => {
    stringArray.forEach((item) => {
        console.log(item);
    });
};

//Exercise 3 (d)
let deleteTask = (task) => {
const index = stringArray.indexOf(task);

    //Remove word typed
    stringArray.splice(index, 1);

    console.log(stringArray);

    //Re-add
    stringArray.push(task);

};

//Functions
listALLTasks();
addTask("cow");
deleteTask("cat");