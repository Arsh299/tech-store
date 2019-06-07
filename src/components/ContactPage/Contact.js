import React from 'react';
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us" center/>
                    <form action="" className="mt-5" action="https://formspree.io/arshspencer.digibrain@gmail.com" method="POST">
                        <div className="form-group">
                            {/* first name */}
                            <input type="text" name="first name" className="form-control" placeholder="john smith"/>
                        </div>
                            {/* email */}
                        <div className="form-group">
                        <input type="email" name="email" className="form-control" placeholder="email@email.com"/>
                        </div> 
                            {/* subject */}
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="important"/>
                        </div>
                        {/* message */}
                        <div className="form-group">
                            <textarea name="message" className="form-control" placeholder="your message here.." rows="10"></textarea>
                        </div>
                        {/* submit */}
                        <div className="form-group mt-3">
                            <input 
                                type="submit"
                                value="send"
                                className="form-control bg-primary text-white"/>
                            

                        </div>
                    </form>

                </div>
            </div>     
        </section>
    )
}
