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

function displayTaskDetails(task) {
    task.displayDetails();
}

let task1 = createTask("Buy Groceries", "Get milk, eggs and bread from the store.", "Shopping")
console.log("+---------------------------------------------------------------+");
displayTaskDetails(task1);
console.log("+---------------------------------------------------------------+");

let task2 = createWorkTask("Complete report","Finish the report for the meeting", "Friday")
console.log("Work related Tasks");
console.log("+---------------------------------------------------------------+");
// task2.displayDetails();
displayTaskDetails(task2);
console.log("+---------------------------------------------------------------+");

task2.toggleCompleted();
console.log("+---------------------------------------------------------------+");
task2.displayDetails();
console.log("+---------------------------------------------------------------+");

let task3 = createPersonalTask("Call Mum","Call to ask health", "High")
console.log("Personal related Tasks");
console.log("+---------------------------------------------------------------+");
// task3.displayDetails();
displayTaskDetails(task3);
console.log("+---------------------------------------------------------------+");

task3.toggleCompleted();
console.log("+---------------------------------------------------------------+");
task3.displayDetails();
console.log("+---------------------------------------------------------------+");

let tasks = [task1, task2, task3];

console.log("All Tasks");
console.log("+---------------------------------------------------------------+");
tasks.forEach(task => {
        // task.displayDetails();
        displayTaskDetails(task);
        console.log("\n");
    });
console.log("+---------------------------------------------------------------+");