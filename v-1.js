class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    toogleCompleted() {
        this.completed = !this.completed;
    }

    displayDetails() {
        console.log("+---------------------------------------------------------------+")
        console.log(`\t Title: ${this.title}`);
        console.log(`\t Description: ${this.description}`);
        // console.log(`\t Completed: ${this.completed}`);
        if (this.completed) {
            console.log("\t Task is Completed");
        } 
        else {
            console.log("\t Task is Not Completed");
        }
        console.log("+---------------------------------------------------------------+")
    }
}

let task1 = new Task("Buy Groceries", "Get milk, eggs and bread from the store.");

task1.displayDetails();
task1.toogleCompleted();
console.log("\t New Task Details \t");
task1.displayDetails();