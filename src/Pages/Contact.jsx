import React, { useEffect, useState } from "react";
import { Share2, User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import SocialLinks from "../components/SocialLinks"; 
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  // State to manage the visibility of the success modal
  const [isSuccess, setIsSuccess] = useState(false);

  // Function to handle form submission with JavaScript
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form redirect
    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/pranavmohan485@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);   // Show the success modal
        event.target.reset(); // Clear the form fields
      } else {
        // Optional: Handle submission errors
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] min-h-screen relative" id="Contact">
      
      <div className="text-center lg:mt-[5%] mt-10 mb-8 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Contact Me
        </h2>
      </div>

      <div className="h-auto py-10 flex items-center justify-center">
        <div className="container max-w-2xl mx-auto">
          <div
            data-aos="zoom-in-up"
            className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-500 hover:shadow-[#6366f1]/10"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Get in Touch
                </h2>
                <p className="text-gray-400">
                 Have an idea or project in mind? Let’s build something amazing together — get in touch below.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#6366f1] opacity-50" />
            </div>

            {/* The form now uses the onSubmit handler */}
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* This hidden field is for FormSubmit to work with AJAX */}
              <input type="hidden" name="_captcha" value="false" />

              <div data-aos="fade-up" data-aos-delay="100" className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                  required
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30"
                  required
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#6366f1] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 h-[9.9rem]"
                  required
                />
              </div>

              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {isSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsSuccess(false)} // Close modal on background click
        >
          <div
            className="bg-[#1c1e26] border border-white/10 rounded-2xl shadow-2xl p-8 text-center max-w-sm mx-4 animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-[#6366f1]" />
            </div>
            <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Success!
            </h2>
            <p className="text-gray-400 mb-6">
              Your message has been sent. I'll get back to you soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)} // Close modal on button click
              className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;