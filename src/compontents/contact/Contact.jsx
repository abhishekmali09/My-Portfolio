import emailjs from "@emailjs/browser";
import {useRef} from "react";
import { useState } from "react";
import {motion, useInView} from "motion/react";
import ContactSvg from "../contact/ContactSvg";

const listVariants = {
    initial: {
        opacity: 0,
        x:100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        },
}
}
const Contact = () => {

    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const ref = useRef();
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_username.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.user_message.value.trim();

    if (!name || !email || !message) {
      setError(true);
      setSuccess(false);
      return;
    }

     emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
            console.log(error);
            setError(true);
            setSuccess(false);
        }
      );
    };

    const isInView = useInView(ref,{margin:"-200px"});
    return (
        <div className="h-full flex flex-col md:flex-row gap-6 md:gap-[100px] p-1 md:p-0" ref={ref} onSubmit={sendEmail}>
            <div className="w-full md:w-1/2 h-full p-5 md:p-5 flex items-center justify-center">
                <motion.form
                ref={form}
                variants ={listVariants}
                 animate={isInView ? "animate" : "initial"}
                 className="w-full md:w-4/5 flex flex-col gap-5" >
                   <motion.h1 variants ={listVariants}>Let's keep in touch</motion.h1>
                   <motion.div variants ={listVariants} className="flex flex-col gap-2.5 w-full md:w-[450px] pb-2.5">
                        <label className="text-[13px]">Name</label>
                        <input type="text" name="user_username" placeholder="Enter your name" className="p-3 border-none rounded-[5px]" />
                   </motion.div>

                   <motion.div variants ={listVariants} className="flex flex-col gap-2.5 w-full md:w-[450px] pb-2.5">
                        <label className="text-[13px]">Email</label>
                        <input type="email"  name = "user_email" placeholder="Enter email" className="p-3 border-none rounded-[5px]" />
                   </motion.div>

                   <motion.div variants ={listVariants} className="flex flex-col gap-2.5 w-full md:w-[450px] pb-2.5">
                        <label className="text-[13px]">Message</label>
                        <textarea rows={10} name="user_message" placeholder="Write your message..." className="p-3 border-none rounded-[5px]"></textarea>
                   </motion.div>

                   <motion.button variants ={listVariants} className="bg-[#7d3f0c] text-[blanchedalmond] w-full md:w-[200px] h-10 text-base py-2 px-0 text-center border-none rounded-[5px] cursor-pointer">Send</motion.button>
                     {success && <span>Your message has been sent!</span>}
                    {error && <span>All fields are required. Please fill in every field.</span>}
                </motion.form>
            </div>
           <div className="w-full md:w-1/2 h-full p-5 md:p-0 flex items-center justify-center"><ContactSvg/></div>
        </div>
    )
}
export default Contact;