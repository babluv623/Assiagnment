import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* {phone number} */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91957398539485</div>
                </div>
              </div>
              {/* {email} */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/email.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">bablu@gmail.com</div>
                </div>
              </div>
              {/* {address} */}

              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/address.png"
                  alt="phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">West Bengal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {contact us form} */}
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form action="" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="your Name"
                      required
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="your Email"
                      required
                    />
                    <input
                      type="Number"
                      id="contact_form_number"
                      className="contact_form_number input_field"
                      placeholder="your Number"
                      required
                    />
                  </div>
                  <div className="contact_form_text">
                    <textarea
                      placeholder="message"
                      cols="30"
                      rows="10"
                      className="text_field contact_form_message"
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <buuton
                      type="submit"
                      className="button contact_submit_button"
                    >
                      send message
                    </buuton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
