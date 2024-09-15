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
            console.log("+---------------------------------------------------------------+");
            console.log(`\t Category: ${this.category}`);
            console.log(`\t Task: ${this.title}`);
            console.log(`\t Description: ${this.description}`);
            console.log(`${this.completed ? "\t Task is Completed" : "\t Task is not Completed"}`);
            console.log("+---------------------------------------------------------------+");
        }
    };
}

let task1 = createTask("Buy Groceries", "Get milk, eggs and bread from the store.", "Shopping")

task1.displayDetails();

task1.toggleCompleted();
console.log("\t  New Task Details \t");
task1.displayDetails();