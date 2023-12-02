import React from 'react'
import '../Styles/Contact.css'

const ContactForm = () => {
    return (
        <>
            <div class="container">

                <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input wide">
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <textarea required></textarea>
                            <label>Message</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="btn-lrg submit-btn">Send Message</div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default ContactForm