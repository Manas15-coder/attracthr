import React, { useState } from 'react'
import '../linkedpost/linkedPost.css'



const LinkedPost = () => {


  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    keywords: '',
    socialmedia: ''
  });
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setJobDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleGenerate = async () => {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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'
        },
        body: JSON.stringify({
          prompt: `Write a ${jobDetails.socialmedia} Hiring Post with Hashtags for a  ${jobDetails.jobTitle} role 
          ${jobDetails.keywords || ""}
          } words in a ${jobDetails.tone || "neutral"} tone. with emojis`,
          max_tokens: 200,
          temperature: 0.5,
        })
      }
      );

      const data = await response.json();
      if (data) {
        setIsGenerating(true)
      }
      setGeneratedDescription(data.choices[0].text);

    } catch (error) {
      console.error('Error in generating job description', error);
      setGeneratedDescription('Some Error encountered while generating. Please try again later')
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDescription);
    setIsCopied(true);
  }

  return (
    <div>
      <section id="job-desc" className='mt-4'>
        <div className='row mt-4'>
          <div className='col-md-12'>
            <h5 className='display-5 text-white'>Create the perfect Hiring Post for any Social Media Application ......</h5>
          </div>
        </div>
      </section>

      <section id="ai">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='input'>
                <input placeholder='Enter Job Title' onChange={handleChange} name='jobTitle' value={jobDetails.jobTitle} required />
                <input placeholder='Enter Keywords ' onChange={handleChange} name='keywords' value={jobDetails.keywords} />
                <select value={jobDetails.socialmedia} name='socialmedia' onChange={handleChange}>
                  <option value='default'>Select Social Media</option>
                  <option value='linkedin'>Linked In</option>
                  <option value='twitter'>Twitter</option>
                  <option value='facebook'>Facebook</option>
                  <option value='discord'>Discord</option>
                  <option value='instagram'>Instagram</option>
                </select>
              </div>
            </div>
            <div className='col-md-12'>
              <button className='btn' onClick={handleGenerate}>{isGenerating ? " Regenerate" : "Generate ✨"}</button>
              <div className='col-md-12'>
                {isGenerating ? (
                  <div className='col-md-12'><textarea rows='20' value={generatedDescription} onChange={handleChange} /><button className='btn' onClick={handleCopy}>{isCopied ? "Copied to clipboard" : "Copy"} </button></div>) : ("Generate Hiring Post within 10 seconds ✨ ...")
                }
              </div>
            </div>


          </div>

        </div>

      </section>

    </div>
  )
}

export default LinkedPost
