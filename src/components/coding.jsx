/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SplitPane from "react-split-pane";
import CodeIDE from "./CodeIDE"; // Assuming both files are in the same directory for simplicity

const Coding = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sample list of coding questions
  const codingQuestions = [
    {
      id: 1,
      title: "Question 1",
      content: "Write a function to add two numbers.",
    },
    {
      id: 2,
      title: "Question 2",
      content: "Write a program to find the factorial of a number.",
    },
    // Add more questions as needed
  ];

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className={`h-screen ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
      <SplitPane split="vertical" minSize={200} defaultSize="50%">
        {
      <div>
        <div
          className={`bg-gray-200 p-4 overflow-y-auto ${
            isDarkMode ? "dark:bg-gray-800" : ""
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              isDarkMode ? "text-gray-300" : ""
            }`}
          >
            Coding Questions
          </h2>
          <ul>
            {codingQuestions.map((question) => (
              <li
                key={question.id}
                className={`cursor-pointer p-2 ${
                  selectedQuestion === question.id
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => setSelectedQuestion(question.id)}
              >
                {question.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          {selectedQuestion ? (
            <div>
              <h2
                className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? "text-gray-300" : ""
                }`}
              >
                Coding Area
              </h2>
              <div
                className={`border rounded-md p-4 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? "text-gray-300" : ""
                  }`}
                >
                  {codingQuestions[selectedQuestion - 1].title}
                </h3>
                <p className={`${isDarkMode ? "text-gray-300" : ""}`}>
                  {codingQuestions[selectedQuestion - 1].content}
                </p>
              </div>
            </div>
          ) : (
            <div className={`text-center ${isDarkMode ? "text-gray-300" : ""}`}>
              Select a question to start coding
            </div>
          )}
        </div>
        </div>
        }
        {
        <div>
          <CodeIDE />
        </div>
        }
      </SplitPane>

      {/* Dark mode/light mode switch button */}
      <div className="absolute top-4 right-4">
        <button
          className={`bg-gray-300 p-2 rounded-full focus:outline-none ${
            isDarkMode ? "text-gray-800" : "text-white"
          }`}
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
    </>
  );
};

export default Coding;
