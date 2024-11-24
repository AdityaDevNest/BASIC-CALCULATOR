// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the clicked button value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        display.value = 'Error';
    }
}