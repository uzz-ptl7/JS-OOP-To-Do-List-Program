function createTask(title, description, category) {

    let completed = false;

    return {
        title,
        description,
        category,
        // completed: false,
 
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

let task1 = createTask("Task 1", "Description 1", "Work");
task1.displayDetails();

task1.toggleCompleted();
task1.displayDetails();
