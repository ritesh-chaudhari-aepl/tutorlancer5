"use client";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const showToastMessage = async () => {
    const data = {
      device_number: "Device 3",
      name,
      email,
      phone,
      subject,
      message,
    };

    if (!name || !email || !phone || !subject || !message) {
      toast.warning("Please fill all required data.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const sendData = await axios.post(
      "https://dev6apis.el.r.appspot.com/api/deviceWeb/saveDeviceWebData",
      data
    );
    console.log(sendData.data.success);
    if (sendData.data.success) {
      toast.success("Message Sent Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } else {
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section id="contact" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 sm:text-4xl">Contact Us</h2>
          <span className="h-[2px] bg-pink-darkPink  w-16 mb-4" />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className=" p-8 lg:col-span-3 lg:p-12">
            <form action="" onSubmit={showToastMessage} className="space-y-4">
              <div className="flex flex-row gap-4">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
              {/* <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
              value={name}
              required
              onChange={(e)=> setName(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div> */}

              <div className="flex flex-row gap-4">
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone"
                  type="text"
                  id="phone"
                />
                <label className="sr-only" htmlFor="phone">
                  Subject
                </label>
                <input
                  value={subject}
                  required
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Subject"
                  type="text"
                  id="subject"
                />
              </div>
              {/* </div> */}

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block uppercase w-full rounded-full bg-pink-darkPink px-5 py-3 font-light text-white sm:w-auto"
                >
                  Send Message
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 lg:py-12">
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
