// Function to handle printing/downloading as PDF
function printResume() {
    window.print();
}

// Simple console log to show script is active
console.log("Resume Website Loaded Successfully");

// Optional: Add a welcome alert on the home page only
if (document.title.includes("Bio-Data")) {
    window.onload = function() {
        console.log("Welcome to Ankith's Profile");
    };
}