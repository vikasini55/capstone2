import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import './Styles/Contact.scss';
import img6 from "./Images/image3.jpg"

const Contact = () => {
    
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [message, messagechange] = useState("");

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';

        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Name';
        }
        
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += ' Phonenumber';
        }

        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
            if(/^[0-9]{10}/.test(phone)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid 10 digit phone number')
            }
          
            if(/^[a-zA-Z]/.test(name)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid Name')
            }
        }
        return isproceed;
    }

    const handlesubmit=(e)=> {
        e.preventDefault();
        let gtobj={name,email,phone,message};
        if(IsValidate()) {
        console.log(gtobj);

        fetch(" http://localhost:8000/GetInTouch",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(gtobj)
        }).then((res)=>{
            toast.success('Submitted.')
        }).catch((err)=>{
            toast.error('Failed ;'+err.message);
        });

     
    }
}

    return (
              <div className="body1">
            <section className="contact-section">
            <div className="container">
                <ToastContainer position="top-center"/>
            <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="wrapper">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="contact-wrap w-100 p-lg-5 p-4">
                            <h3 className="mb-4">GET IN TOUCH</h3>
                        <form id="contactForm" className="contactForm" onSubmit={handlesubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value.replace(/^d{0-9}$/))} className="form-control" maxLength={10} required></input>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Message <span className="errmsg">*</span></label>
                                        <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                            <input
                              type="submit"
                              value="submit"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                            </div>
                         </form>
                        </div>
                        
                    </div>
            
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h2>Contact us</h2>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> 
                         123 Park Avenue C,AK Marg,Delhi,India
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <a href="tel://123456789">(91)987 654 3210</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                           contact@topjobs.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website:</span>
                          <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
      </section>
    </div>
    );
}

export default Contact;