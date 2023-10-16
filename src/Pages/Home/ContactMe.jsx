import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


export default function ContactMe() {
    const form=useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_djszh4l', 'template_ge0n7cf', form.current, 'G2ZF4Tcn0zUKKLLLY')
      e.target.reset()
      Swal.fire(
        'Mail Sent Succesfully'
      )
    };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="first-name"
              required
            />
          </label>
          
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
