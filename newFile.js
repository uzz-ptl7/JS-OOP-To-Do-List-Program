const { tasks } = require(".");

tasks.forEach(task => {
    task.displayDetails();
    console.log("\n");
});
