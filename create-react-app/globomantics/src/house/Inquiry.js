import {useState} from 'react';
import emailjs from 'emailjs-com';

const Inquiry = () => {

    const [contactInfo,setContactInfo] = useState({
        name:"",
        email:"",
        remarks:""
    });
    
    const onChange=(e) => {
        setContactInfo({...contactInfo,[e.target.id]:e.target.value})
    };

    const onSubmit= (e) => {
        e.preventDefault();
        console.log(contactInfo);
        //email or send
        // CODE TO SEND EMAIL STARTS HERE
        //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        emailjs.sendForm('service_otfrcse', 'template_ipmkyqq', e.target, 'user_iFCIG9N7jKIoMCLGSbWcs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        //CODE TO SEND EMAIL ENDS HERE
        e.target.reset();



    };



    return (
        <form className="mt-2" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">
                    Name
                </label>
                <input 
                placeholder={contactInfo.name}
                className="form-control"
                onChange={onChange} type="text" name="name" id="name"/>
               
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Email
                </label>
                <input 
                placeholder={contactInfo.email}
                className="form-control"
                onChange={onChange} type="email" name="email" id="email"/>
                
            </div>
            <div className="form-group">
                <label htmlFor="remarks">
                    Remarks
                </label>
                <input 
                placeholder={contactInfo.remarks}
                className="form-control"
                onChange={onChange} type="text" name="remarks" id="remarks"/>
                
            </div>
            <input type="submit"
                disabled={!contactInfo.name || !contactInfo.email}                
                className="form-control"
                className="btn btn-primary mt-2"
                value="submit"/>

        </form>




       
    );
};

export default Inquiry;