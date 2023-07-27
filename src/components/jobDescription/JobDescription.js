import React, { useState } from 'react'
import '../jobDescription/jobDescription.css'
const JobDescription = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    industry: '',
    tone: ''
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
          prompt: `Write a job description with pointers for a  ${jobDetails.jobTitle} role 
          ${jobDetails.industry || ""}
          } words in a ${jobDetails.tone || "neutral"} tone. The job position should be described in a way that is SEO friendly, highlighting its unique features and benefits.`,
          max_tokens: 200,
          temperature: 0.5,
        })
      }
      );
      setIsGenerating(true)
      const data = await response.json();
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
            <h5 className='display-5 text-white'>Create the perfect job description for any position in seconds ...</h5>
          </div>
        </div>
      </section>

      <section id="ai">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='input'>
                <input placeholder='Enter Job Title' onChange={handleChange} name='jobTitle' value={jobDetails.jobTitle} required />
                <input placeholder='Enter Industry ' onChange={handleChange} name='industry' value={jobDetails.industry} />
                <select value={jobDetails.tone} name='tone' onChange={handleChange}>
                  <option value='default'>Select Tone</option>
                  <option value='formal'>Formal</option>
                  <option value='friendly'>Friendly</option>
                  <option value='professional'>Professional</option>
                </select>
              </div>
            </div>
            <div className='col-md-12'>
              <button className='btn' onClick={handleGenerate}>{isGenerating ? " Regenerate" : "Generate ✨"}</button>
              <div className='col-md-12'>
                {isGenerating ? (
                  <div className='col-md-12'><textarea rows='20' value={generatedDescription} onChange={handleChange} /><button className='btn' onClick={handleCopy}>{isCopied ? "Copied to clipboard" : (<i className="fa-solid fa-copy fa-fade" />
)}</button></div>) : ("Generate Job Description within 10 seconds ✨ ...")}
              </div>
            </div>


          </div>

        </div>

      </section>

    </div>
  )
}

export default JobDescription
