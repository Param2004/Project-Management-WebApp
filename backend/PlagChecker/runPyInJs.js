const { exec } = require('child_process');

// Replace 'your_python_script.py' with the actual name of your Python script
const pythonScript = 'main.py';

// Example input from JavaScript to Python
const inputDataFromJS = 'second.txt';

// Construct the command to run the Python script with input
const command = `python "${pythonScript}" "${inputDataFromJS}"`;

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Python script: ${error}`);
    return;
  }

  // Process the output from Python in stdout
  console.log(stdout);
});
