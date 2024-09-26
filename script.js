// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to the input fields and result display elements
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiValueElement = document.querySelector('.bmi-value');
    const commentElement = document.querySelector('.comment .highlight');
    const clearBtn = document.getElementById('clear');
    
    // Get the button and add a click event listener to calculate BMI
    const calculateBtn = document.getElementById('calculator');
    calculateBtn.addEventListener('click', function() {
        
        // Get the input values for height and weight
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        
        // Check if inputs are valid numbers
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid values for height and weight!');
            return;
        }
        
        // Calculate BMI: weight (kg) / (height (m) * height (m))
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Update the BMI value in the HTML
        bmiValueElement.textContent = bmi.toFixed(2); // Display BMI with 2 decimal places
        
        // Determine BMI category and update the comment
        let comment = '';
        if (bmi < 18.5) {
            comment = 'underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            comment = 'normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            comment = 'overweight';
        } else {
            comment = 'obese';
        }
        
        // Update the comment text in the HTML and make it visible
commentElement.textContent = comment; // Update the category
commentElement.style.display = 'inline'; // Show the category


// Clear Button Functionality
clearBtn.addEventListener('click', function() {
    heightInput.value = ''; // Clear height input
    weightInput.value = ''; // Clear weight input
    bmiValueElement.textContent = '00.00'; // Reset BMI display
    commentElement.textContent = ''; // Clear comment
    commentElement.style.display = 'none'; // Hide the comment
});


    });
});