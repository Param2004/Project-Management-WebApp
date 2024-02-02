const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;
// Specify the directory where files will be stored
// const uploadDirectory = path.join(__dirname, 'txt_files');

app.use(cors());

const pythonScript = 'main.py';

app.use(bodyParser.json());

app.post('/process', async (req, res) => {
    const content = req.body.content;
    console.log(content);

    const combinedContent = `${content}`;

    try {
      // Ensure the specified directory exists, create it if not
      // await fs.mkdir(uploadDirectory, { recursive: true });

        // Generate a unique filename based on the current timestamp
        const timestamp = Date.now();
        const filename = `input_${timestamp}.txt`;
        // Specify the full path to the file
        // const filePath = path.join(uploadDirectory, filename);
        // Write content to a text file
        await fs.writeFile(filename, combinedContent);
        console.log('File created and content written successfully.');

        // Construct the command to run the Python script with the input file
        const command = `python "${pythonScript}" "${filename}"`;

        // Execute the command
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Python script: ${error}`);
                res.status(500).json({ status: 'error', message: 'Error executing Python script.' });
                return;
            }
            let flag = 0;

            // Process the output from Python in stdout
            console.log(stdout);
            // Split the lines and iterate over them
            const lines = stdout.trim().split('\n');
            lines.forEach(line => {
            // Extract values from each line using regular expressions
            const matches = line.match(/\('([^']+)', '([^']+)', '([^']+)'\)/);
            if (matches) {
            const file1 = matches[1];
            const file2 = matches[2];
            const similarity = parseFloat(matches[3]);

            if(similarity >= 50)
            flag = 1;
        }
    });

            // Send a response back to the client
            // const response = { status: `${flag?'isPlag':'notPlag'}`};
            res.json(flag);
        });
    } catch (error) {
        console.error('Error writing to file:', error);
        res.status(500).json({ status: 'error', message: 'Error writing to file.' });
    }

});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
