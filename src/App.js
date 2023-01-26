import React, {useState} from "react";
import './App.css';
import ReactMarkdown from "react-markdown";


function App() {
  //dont forget to deploy site to gh
  const initialState = `
# **This is a markdown previewer created by Łukasz Chorąży**

___

---

# This is h1 style
___

---
## This is h2 style
___

---
- this is list item1
- this is list item2
- this is list item3
___

---

This is link to my [github profile](https://github.com/CptGrave)
___

---
This is a inline \`<div></div>\`
___

---
This is a block of code

\`\`\`
const markdown = html - timeForStyling
let anotherCodeLine = {
  objectProp1: 23,
  objectProp2: [index1,index2]
}

\`\`\`
___

---
This is random image

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
___

---
>This is blockquote in markdown

  
  `
  const [markdown, setMarkdown] = useState(initialState)
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


