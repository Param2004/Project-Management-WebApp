// server.js

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/uploads', upload.single('image'), (req, res) => {
    if (req.file) {
        res.send('Image uploaded successfully!');
    } else {
        res.status(400).send('No image uploaded!');
    }
});

// Serve the React app (assuming your React build is in the 'client/build' folder)
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
