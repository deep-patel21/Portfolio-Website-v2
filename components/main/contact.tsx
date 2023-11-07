"use client";
 
import { useState } from "react";
import EarthCanvas from "./earth";
 
export default function Contact() {
  const [loading, setLoading] = useState(false);
 
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
 
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
 
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
 
    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "Deep Patel";
      event.target.email.value = "deepstudios21@gmail.com";
      event.target.message.value = "Hey";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
{/*  return (
    <div className="flex flex-col px-[500px] pt-[350px] bg-navy-blue z-[20] pb-[50px]" id="contact">
      <form onSubmit={handleSubmit} className="mx-auto w-[650px] h-[650px] items-center p-8 rounded-lg bg-black shadow-lg border border-[#2A0E61] bg-opacity-50">
        <div className="flex flex-col mb-4">
          <label className="font-bold text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={2}
            maxLength={200}
            required
            className="p-4 bg-gray-900 bg-opacity-50 text-white"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            minLength={3}
            maxLength={150}
            required
            className="p-4 bg-gray-900 bg-opacity-50 text-white"
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-bold text-white" htmlFor="message">
            Message
          </label>
          <textarea
            rows={10} 
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="p-4 h-64 bg-gray-900 bg-opacity-50 text-white"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-2/5 items-center justify-center p-2 bg-navy-blue text-white font-medium mt-4 hover:bg-black border border-[#2A0E61]"
        >
          Send Message
        </button>
      </form>
      <EarthCanvas />
    </div>
); */}
      return (
        <div className="flex flex-col justify-center items-center h-screen bg-navy-blue text-light-purple">
          <h1 className='text-[100px] pt-[30px] text-transparent font-bold text-bold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 z-[20]'>
            <span>Contact Me</span>
          </h1>
          <div className="flex flex-row space-x-[100px] px-[450px] z-[20] justify-center w-full" id="contact">
              <div className="w-[700px] p-7 bg-black shadow-lg border rounded-[25px] border-[#2A0E61] bg-opacity-50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col">
                    <label className="font-bold text-white" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      minLength={2}
                      maxLength={200}
                      required
                      className="p-4 bg-gray-900 bg-opacity-50 text-white rounded-[15px]"
                      autoComplete="off"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-bold text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      minLength={3}
                      maxLength={150}
                      required
                      className="p-4 bg-gray-900 bg-opacity-50 text-white rounded-[15px]"
                      autoComplete="off"
                      id="email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-bold text-white" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      rows={10}
                      required
                      minLength={10}
                      maxLength={500}
                      name="message"
                      className="p-4 h-64 bg-gray-900 bg-opacity-50 text-white rounded-[15px]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/5 p-2 bg-navy-blue text-white font-medium hover:bg-black border border-[#2A0E61]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <EarthCanvas />
            </div>
        </div>
        
      );
}