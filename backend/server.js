const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const filePath = "./browsers.json";

// Handle POST request
app.post("/set-browsers", (req, res) => {
    const newTest = req.body; // Get data from frontend

    console.log("Received data from frontend:", newTest); // Debug log

    try {
        // Read existing file or initialize empty array if file doesn't exist
        let existingData = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf8");
            existingData = fileContent ? JSON.parse(fileContent) : [];
        }

        // Add new test data
        existingData.push(newTest);

        // Write updated data to file
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        console.log("Updated browsers.json:", existingData); // Debug log
        res.json({ message: "Data saved successfully" });
    } catch (error) {
        console.error("Error writing to file:", error);
        res.status(500).json({ error: "Failed to save data" });
    }
});

// Start server
app.listen(3001, () => console.log("Server running on port 3001"));
