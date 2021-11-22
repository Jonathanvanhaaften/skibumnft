import React, {useState, useEffect} from 'react';


const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

 useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');    
  }


  const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
      
     
    }
    return (
      <div className="w-full max-w-xs bg-black">
        <form className="bg-black text-white shadow-md px-8 pb-8 mb-4"
        onSubmit={(e) => handleSubmit(e)}
        >

          <h3 className="text-xl p-1">Keep updated on future drops.</h3>
        
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          <div className="mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="First Name">
            First Name</label>
            <input
            className="shadow appearance-none border 
                        rounded w-full py-2 px-3
                         text-gray-700 leading-tight
                          focus:outline-none focus:shadow-outline"
              label="First Name"
              onChange={e => setFirstName(e.target.value)}
              type="text"
              value={firstName}
              placeholder="First Name"
              isrequired="true"
            />
           </div>
           <div className="mb-6">   
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Last Name">
            Last Name</label>        
            <input
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            label="Last Name"
              onChange={e => setLastName(e.target.value)}
              type="text"
              value={lastName}
              placeholder="Last Name"
              isrequired="true"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email</label>
            <input
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              label="Email"
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              isrequired="true"
            />
           </div>
          </div>
  
          <input className="bg-purple-700 p-3"
         
            label="subscribe"
            type="submit"
            formvalues={[email, firstName, lastName]}
          />
        </form>
        </div>);
};

export default CustomForm;