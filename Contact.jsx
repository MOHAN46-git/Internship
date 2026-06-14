import React, {
 useState
}
from "react";

function Contact() {

 const [form,
 setForm] =
 useState({
  name: "",
  email: ""
 });

 const handleChange =
 (e) => {

  setForm({

   ...form,

   [e.target.name]:
   e.target.value

  });
 };

 const handleSubmit =
 (e) => {

  e.preventDefault();

  alert(
   "Message Sent"
  );
 };

 return (

  <div className="container">

   <h2>
    Contact Us
   </h2>

   <form
    onSubmit={
      handleSubmit
    }
   >

    <input
     type="text"
     name="name"
     placeholder="Name"
     onChange={
       handleChange
     }
    />

    <input
     type="email"
     name="email"
     placeholder="Email"
     onChange={
       handleChange
     }
    />

    <button>
     Submit
    </button>

   </form>

  </div>

 );
}

export default Contact;
