import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; 
import './Styles/ApplyJobs.css'

const ApplyJob = () => {
    
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [experience, experiencechange] = useState("");
    

    const navigate = useNavigate();

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

       
       if (address === null || address === '') {
            isproceed = false;
            errormessage += ' Address';
        }
       if (experience === null || experience === '') {
            isproceed = false;
            errormessage += ' Experience';
        }

         if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
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
                toast.warning('Please enter the valid 10 digit phone nmuber')
            }
          
            if(/^[a-zA-Z]/.test(name)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid Name')
            }
            // if(experience.length<"10".test(experience)){

            // }else{
            //     isproceed = false;
            //     toast.warning('Please enter the valid experience')
            // }
        }
        return isproceed;
    }
    


    const handlesubmit=(e)=> {
        e.preventDefault();
        let applyobj={name,email,phone,address,experience};
        if(IsValidate()) {
            console.log(applyobj);

            fetch(" http://localhost:8000/user" ,{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(applyobj)
            }).then((res)=>{
                toast.success('Registered Successfully.')
                setTimeout(() => {
                    navigate("/jobs")
               }, 4000);
            }).catch((err)=>{
                toast.error('Failed :'+err.message);
            }); 
        }

    }

    return (
        <div className="bg">
            <div className="d-flex justify-content-between">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit} >
                    <div className="card">
                        <div className="card-header">
                            <h2>APPLY FOR JOBS HERE</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="one">Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control" required></input>
                                       
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="one">Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" required></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="one">Phone <span className="errmsg">*</span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value.replace(/^d{0-9}$/))} className="form-control" maxLength={10} required></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="one">Address <span className="errmsg">*</span></label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control" required></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="one">Experience <span className="errmsg">*</span></label>
                                        <textarea value={experience} onChange={e => experiencechange(e.target.value)} className="form-control" required></textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-success" id="apply-btn">Apply Job</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer  position="top-center"/>   
        </div>
        </div>

    );
}

export default ApplyJob;