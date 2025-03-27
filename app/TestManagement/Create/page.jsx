"use client";
import { MultiSelect } from "@/components/MultiSelect";
import { FaPlay, FaSave } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Browsers } from "@/app/Constants";
import { useState } from "react";

const Create = () => {
  const [testName, setTestName] = useState(""); // Store test name
  const [selectedBrowsers, setSelectedBrowsers] = useState([]);

  const handleRun = async () => {
    if (!testName.trim()) {
      alert("Test name is required");
      return;
    }
  
    if (selectedBrowsers.length === 0) {
      alert("Please select at least one browser.");
      return;
    }
  
    const testData = {
      testname: testName,
      browsers: selectedBrowsers, // Example: ["chrome", "edge"]
    };
  
    console.log("Sending data to backend:", testData);
  
    try {
      const response = await fetch("http://localhost:3001/set-browsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testData),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        alert(responseData.error); // Show error alert if test already exists
      } else {
        alert("Test saved successfully!");
      }
    } catch (error) {
      alert("Error saving test.");
      console.error("Error sending data:", error);
    }
  };
  

  return (
    <div className="">
      <div className="text-accent text-4xl font-bold p-2 m-2">
        <h1>Create Test</h1>
      </div>
      <nav className="bg-navbar text-navbar-text p-2">
        <div className="flex justify-start space-x-4 py-2">
          <Button
            variant="ghost"
            className="text-green-500 transition-all duration-500"
            aria-label="Run Test"
          >
            <FaPlay />
          </Button>
          <Button
            variant="ghost"
            className="text-purple-500 transition-all duration-200"
            aria-label="Save Test Case"
            onClick={handleRun}
          >
            <FaSave />
          </Button>
        </div>
      </nav>
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2">
          <Input
            placeholder="Test Name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            className="w-full h-5 text-white border-red-700"
          />
          <Input placeholder="Description" className="w-full h-5 text-white border-green-700" />
          <Input placeholder="URL" className="w-full h-5 text-white border-blue-700" />
          <MultiSelect
            options={Browsers}
            placeholder="Select browser"
            className="w-full h-5 bg-input text-white/70 hover:bg-input border-accent"
            variant="inverted"
            onChange={(selected) => setSelectedBrowsers(selected)}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
