import React, {useState} from "react";
import './App.css';
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# This is <h1> in markdown ")
  return (
    
      <section className="markdown">
        <textarea id="editor" className="input" value={markdown} onChange={(e)=> setMarkdown(e.target.value)}></textarea>
        <article id="preview" className="result" >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    
  );
}

export default App;
