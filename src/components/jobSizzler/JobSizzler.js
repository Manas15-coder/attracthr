import React, { useState } from 'react'
import '../jobSizzler/jobSizzler.css'

const JobSizzler = () => {
    const [jobDetails, setJobDetails] = useState({
        jobRole: '',
        keywords:''
    })
    const [generatedDescription, setGeneratedDescription] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

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
                    prompt: `Write a sizzling and eye catchy job introduction line for ${jobDetails.jobRole} with ${jobDetails.keywords || ''} role to attract candidates`,
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
            <section id='job-desc' className='mt-4'>
                <div className='row  mt-4'>
                    <div className='col-md-12'>
                        <h5 className='display-5 text-white'>Write emotionally captivating lines to attract candidates</h5>
                    </div>
                </div>
            </section>
            <section id="ai">
                <div className='container'>
                    <div className='row'>
                        <h6 className='display-5'>Just Enter Job Role, We will generate Sizzling Job Intro...</h6>
                        <div className='col-md-12'>
                            <div className='input'>
                                <input placeholder='Job Role ...' value={jobDetails.jobRole} onChange={handleChange} name='jobRole' required />
                                <input placeholder='Enter Keyword ...' value={jobDetails.keywords} onChange={handleChange} name='keywords' required />
                            </div>

                            <button className='btn' onClick={handleGenerate}>{isGenerating ? " Regenerate" : "Generate ✨"}</button>
                        </div>
                        <div className='col-md-12'>
                            {isGenerating ? (
                                <div className='col-md-12'><textarea rows='4' value={generatedDescription} onChange={handleChange} /><button className='btn' onClick={handleCopy}>{isCopied ? "Copied to clipboard" : "Copy"}</button></div>) : ("Generate your job intro within 10 seconds ✨ ...")}
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default JobSizzler
