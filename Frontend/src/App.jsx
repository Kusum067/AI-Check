import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs';
import axios from 'axios'
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'
import './App.css'


function App() {
  const [ code, setCode ] = useState(
    `function sum(){
    return 2+3;
    }`);

  const [review, setReview] = useState(``)

  const [reviewHinglish, setReviewHinglish] = useState(``);

  const [lang , setLang] = useState("english");

  useEffect(() => {
    prism.highlightAll();
  }, []) 

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review', {code})
    setReview(response.data);
  }
  async function reviewCodeHinglish() {
    const response = await axios.post('http://localhost:3000/ai/get-review-hinglish', {code})
    setReviewHinglish(response.data
  );
  }
  

  return (
    <>
    
    <main>
      {/* LEFT */}
      <div className='left'>
        <div className="code">
          
        <Editor
        textareaClassName='editor'
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 15,
            border: '0.5px solid #0f0e0eff',
            borderRadius:'1rem',
            height: '100%',
            width:"100%",
          }}
        />
        </div>

        <div className='btns'>
          <div onClick={() => { reviewCode(); setLang("english")}} className="reviewBtn" id='english'>Review</div>
          <div onClick={()=> {reviewCodeHinglish(); setLang("hinglish")}} className='reviewBtn' id='hinglish'>Samjha Bahi</div>
        </div>

      </div>
      {/* RIGHT */}
      <div className='right'>
        <Markdown
        rehypePlugins={[rehypeHighlight]}
        >
          {(lang === 'english'? review: reviewHinglish)}
        </Markdown>
      </div>
    </main>
    </>
  )
}


export default App
