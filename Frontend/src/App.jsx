import { useState, useEffect } from 'react'
// import "prismjs/themes/prism-tomorrow.css"
// //import "prismjs/components/prism-jsx"
// import prism from "prismjs"
import './App.css'
import Markdown from 'react-markdown';
//import Editor from "react-simple-code-editor"
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
function App() {
  // useEffect(() =>
  // {
  //   prism.highlightAll()
  // } , [])
const [code, setCode] = useState("")
  async function reviewCode()
  {
    const response = await axios.post('http://localhost:3000/ai/get-review' , {code})
    setReview(response.data);
  }


  const [review, setReview] = useState(``)

  //const [code, setCode] = useState(`function sum(){return 1+1}`)

  return (
    <>
      <main>
        <div className="left">

  <div className="code">
    <div className="editor-header">
      <div className="window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span className="filename">Happy Coding!</span>
      <span className="language">Best of Luck!</span>
    </div>

    <div className="code-input">
      <div className="line-numbers">
        {code.split("\n").map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste your code here..."
        spellCheck="false"
      />

      <button onClick={reviewCode}>
        Review Code
      </button>
    </div>
  </div>

</div>
        <div className="right"><Markdown
         rehypePlugins={[rehypeHighlight]}
        >{review}
</Markdown>
            

        </div>

      </main>
    </>
  )
}




export default App
