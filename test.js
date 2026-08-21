console.log("Running CI Test...");

let result = 2 + 3;

if (result === 5) {
    console.log("Test Passed Successfully!");
    process.exit(0);
} else {
    console.log("Test Failed!");
    process.exit(1);
}