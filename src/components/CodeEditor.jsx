import React, { useState } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = () => {
    // シンプルなJSのコードを用いて, Javaのサンプルコードのように処理する。
    try {
      const result = eval(code);
      setOutput(result);
    } catch (e) {
      setOutput("Error: " + e.message);
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your Java code here"
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleRun}>Run</button>
      <div>
        <h3>Result:</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
