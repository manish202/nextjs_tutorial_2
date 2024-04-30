'use client';
import styles from "@/app/styles/contact.module.css";
import {useState} from "react";
const Contact = () => {
  const [inp,chinp] = useState({funame:"",email:"",phone:"",message:""});
  const handelChange = (e) => {
    const {name,value} = e.target;
    chinp(old => ({...old,[name]:value}));
  }
  return(
   <div className={styles.container}>
    <form className={styles.form}>
      <input type="text" name="funame" placeholder="full name" onChange={handelChange} value={inp.funame} />
      <input type="email" name="email" placeholder="email" onChange={handelChange} value={inp.email} />
      <input type="number" name="phone" placeholder="phone number" onChange={handelChange} value={inp.phone} />
      <textarea name="message" cols="30" rows="5" onChange={handelChange} value={inp.message}></textarea>
      <button className="my-btn" type="submit">submit</button>
    </form>
   </div> 
  )
}
export default Contact;