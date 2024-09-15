class Task {
    constructor(title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.completed = false;
    }

    toogleCompleted() {
        this.completed = !this.completed;
    }

    displayDetails() {
        console.log("+---------------------------------------------------------------+")
        
        console.log(`\t Category: ${this.category}`);
        console.log(`\t Task: ${this.title}`);
        console.log(`\t Description: ${this.description}`);
        
        // console.log(`\t Completed: ${this.completed}`);
        // if (this.completed) {
        //     console.log("\t Task is Completed");
        // } 
        // else {
        //     console.log("\t Task is Not Completed");
        // }

        //.........Using Ternary Operators for If and Else Statements...................
        console.log(`${this.completed ? "\t Task is Completed" : "\t Task is not Completed"}`);
        

        console.log("+---------------------------------------------------------------+")
    }

    // updateTask(newTitle, newDescription, newCategory) {
    //     this.title = newTitle
    //     this.description = newDescription
    //     this.category = newCategory
    //     console.log("Task Updated Successfully");   
    // }

    //...........................Increase User Flexibility............................
    updateTaskTitle(newTitle) {
        this.title = newTitle
        console.log("Task Title Updated Successfully");   
    }

    updateTaskDescription(newDescription) {
        this.description = newDescription
        console.log("Task Description Updated Successfully");   
    }

    updateTaskCategory(newCategory) {
        this.category = newCategory
        console.log("Task Category Updated Successfully");   
    }
}

let task1 = new Task("Buy Groceries", "Get milk, eggs and bread from the store.", "Shopping");

//.................Calling the Functions......................
task1.displayDetails();

task1.updateTaskTitle("Buy Groceries - 1");
console.log("\t Updated Task Details \t");
task1.displayDetails();

task1.toogleCompleted();
console.log("\t New Task Details \t");
task1.displayDetails();