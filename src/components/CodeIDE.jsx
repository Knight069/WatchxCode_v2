/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./Navbar";

const CodeIDE = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(50); // Default: JavaScript

  const languageOptions = [
    { id: 50, name: "JavaScript" },
    // Add more language options as needed
  ];

  const runCode = async () => {
    // Replace 'YOUR_RAPID_API_KEY' with your actual RapidAPI key
    const apiKey = "YOUR_RAPID_API_KEY";
    const apiUrl = "https://judge0-ce.p.rapidapi.com";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey,
      },
      body: JSON.stringify({
        source_code: code,
        language_id: selectedLanguage,
        stdin: input,
      }),
    };

    try {
      const response = await fetch(`${apiUrl}/submissions`, requestOptions);
      const data = await response.json();

      // Polling the API for the result
      const getResult = async () => {
        const resultResponse = await fetch(
          `${apiUrl}/submissions/${data.token}`,
          {
            headers: {
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
              "X-RapidAPI-Key": apiKey,
            },
          }
        );

        const resultData = await resultResponse.json();

        if (resultData.status.id <= 2) {
          // The submission is still in progress, continue polling
          setTimeout(getResult, 1000);
        } else {
          // The submission is complete, update the output
          setOutput(resultData.stdout);
        }
      };

      // Start polling for the result
      getResult();
    } catch (error) {
      console.error("Error running code:", error);
    }
  };

  return (
        <div className="max-w-2xl mx-auto my-8 p-4 border rounded-md shadow-md">
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Code Editor</h2>
            <textarea
              className="w-full p-2 border rounded-md"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code here"
              rows={10}
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Input</h2>
            <textarea
              className="w-full p-2 border rounded-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input for your code"
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Select Language:
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(parseInt(e.target.value))}
            >
              {languageOptions.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={runCode}
            >
              Run
            </button>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Output</h2>
            <pre className="p-2 border rounded-md bg-gray-100">{output}</pre>
          </div>
        </div>
  );
};

export default CodeIDE;

