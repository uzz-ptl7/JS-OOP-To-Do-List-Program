function createTask(title, description, category) {
    return {
        title,
        description,
        category,
        completed: false,
 
        toggleCompleted() {
            this.completed = !this.completed;
        },

        displayDetails() {
            console.log(`\t Category: ${this.category}`);
            console.log(`\t Task: ${this.title}`);
            console.log(`\t Description: ${this.description}`);
            console.log(`${this.completed ? "\t Task is Completed" : "\t Task is not Completed"}`);
        },

        updateTaskTitle(newTitle) {
            this.title = newTitle
            console.log("Task Title Updated Successfully");   
        },
    
        updateTaskDescription(newDescription) {
            this.description = newDescription
            console.log("Task Description Updated Successfully");   
        },
    
        updateTaskCategory(newCategory) {
            this.category = newCategory
            console.log("Task Category Updated Successfully");   
        }
    };
}

function createWorkTask(title, description, deadline) {
    let task = createTask(title, description, "Work");
    return {
        ...task,
        deadline,

        toggleCompleted(){
            task.toggleCompleted();
        },

        displayDetails() {
            task.displayDetails();
            console.log(`\t Deadline: ${this.deadline}`);
        }
    }
}

function createPersonalTask(title, description, priority) {
    let task = createTask(title, description, "Personal")
    return {
        ...task,
        priority,

        toggleCompleted() {
            task.toggleCompleted()
        },

        displayDetails() {
            task.displayDetails()
            console.log(`\t Priority: ${this.priority}`)
        }
    }
}

let task1 = createTask("Buy Groceries", "Get milk, eggs and bread from the store.", "Shopping")
console.log("+---------------------------------------------------------------+");
task1.displayDetails();
console.log("+---------------------------------------------------------------+");

let task2 = createWorkTask("Complete report","Finish the report for the meeting", "Friday")
console.log("Work related Tasks");
console.log("+---------------------------------------------------------------+");
task2.displayDetails();
console.log("+---------------------------------------------------------------+");

task2.toggleCompleted();
console.log("+---------------------------------------------------------------+");
task2.displayDetails();
console.log("+---------------------------------------------------------------+");

let task3 = createPersonalTask("Call Mum","Call to ask health", "High")
console.log("Personal related Tasks");
console.log("+---------------------------------------------------------------+");
task3.displayDetails();
console.log("+---------------------------------------------------------------+");

task3.toggleCompleted();
console.log("+---------------------------------------------------------------+");
task3.displayDetails();
console.log("+---------------------------------------------------------------+");
 
//....................................................Normal Tasks...............................................
// task1.toggleCompleted();
// console.log("\t  New Task Details \t");
// task1.displayDetails();

// task1.updateTaskTitle("Buy Groceries and Snacks");
// console.log("\t Updated Task Details \t");
// task1.displayDetails();

// task1.updateTaskDescription("Get milk, eggs, bread, and snacks from the store.");
// console.log("\t Updated Task Details \t");
// task1.displayDetails();

// task1.updateTaskCategory("Shopping - 1");
// console.log("\t Updated Task Details \t");
// task1.displayDetails();
//...............................................................End....................................................