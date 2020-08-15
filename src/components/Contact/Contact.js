import React from "react";
import './contactcard.css'

function ContactCard() {
    return (
        <>
            <div className="container d-flex justify-content-around align-center">
                <div className="card align-middle w-75">
                    <div className="card-header shadow">
                        Contact Me
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="formGroupExampleInput">Name:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Email:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email" />
                        </div>
                        <label for="exampleFormControlTextarea1" className="font-weight-bold">Leave a Comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Leave a comment and I'll respond as soon as possible"></textarea>

                        <button type="button" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactCard;