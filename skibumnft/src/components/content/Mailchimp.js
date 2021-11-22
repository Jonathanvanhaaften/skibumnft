import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm'
import  bgimg from '../../images/bgimg.jpg'




const {REACT_APP_MAILCHIMP_URLNEW} = process.env

const Mailchimp = props => {
    return (
            <div className=" p-4 m-14 bg-fixed bg-cover rounded relative flex justify-center" style={{ backgroundImage: `url('${bgimg}` }}>
          <MailchimpSubscribe  className=""  
          url= {`https://rogerspasshiking.us6.list-manage.com/subscribe/post${REACT_APP_MAILCHIMP_URLNEW}`} 
          render={({subscribe, status, message}) => (
              <CustomForm className=""
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
             

          )
        }
          
          />
        </div> 
    );
};

export default Mailchimp;
