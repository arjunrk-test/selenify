const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

app.post("/api/run-test", (req, res) => {
  const { browsers } = req.body;
  console.log("Received browsers:", browsers);

  // Update DataProvider.java with the selected browsers
  const dataProviderPath = path.join(__dirname, "src/main/java/Baseclass/DataProvider.java");
  const newContent = `
    package com.selenify.backend.Baseclass;

    import org.testng.annotations.DataProvider;

    public class DataProvider {
        @DataProvider(name = "browserData")
        public Object[][] getBrowsers() {
            return new Object[][] { ${browsers.map(browser => `{"${browser}"}`).join(", ")} };
        }
    }
  `;

  fs.writeFileSync(dataProviderPath, newContent);
  console.log("DataProvider updated.");

  // Run the test using Maven
  exec("mvn clean test -DsuiteXmlFile=TESTNG.xml", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing tests: ${stderr}`);
      return res.status(500).json({ error: "Test execution failed" });
    }
    console.log("Test execution successful:", stdout);
    res.json({ message: "Test execution started" });
  });
});

app.listen(3001, () => console.log("Backend running on port 3001"));
