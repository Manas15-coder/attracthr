import React, { useEffect, useState } from 'react'

function Contact() {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <section id="contact">
                            <div className="contact-form container-fluid">
                                <h2 className='contact-heading'><b>Contact Us</b></h2>
                                <form
                                    id="fs-frm"
                                    name="simple-contact-form"
                                    acceptCharset="utf-8"
                                    action="https://formspree.io/f/mjvdjoeg"
                                    method="post">
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        id="full-name"
                                        placeholder="Enter Your Name "
                                        required
                                    />
                                    <br />
                                    <br />
                                    <input
                                        type="text"
                                        name="_replyto"
                                        id="email-address"
                                        placeholder="abc@gmail.com"
                                        required
                                    />
                                    <br />
                                    <br />
                                    <textarea
                                        rows={5}
                                        name="message"
                                        id="message"
                                        placeholder="Have a query regarding using Attract HR or for any issues, type a message, we will reply as soon as possible"
                                        required
                                        defaultValue={""}
                                    />
                                    <br />
                                    <input className="btn" type="submit" defaultValue="Submit" />
                                </form>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
