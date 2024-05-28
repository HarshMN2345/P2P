import React from 'react';

const Contact = () => {
  return (
    <div className="w-full h-screen relative bg-neutral-50 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full text-center mb-16">
        <h1 className="text-black text-6xl font-normal">Got any idea</h1>
      </div>

      {/* Form */}
      <div className="w-[759px] flex flex-col items-center gap-8">
        {/* Name and Email Fields */}
        <div className="flex justify-between w-full gap-4">
          <div className="flex flex-col w-1/2">
            <input 
              type="text" 
              placeholder="Name" 
              className="h-14 px-6 py-3 bg-white border border-neutral-500 rounded-md text-neutral-400 text-xl font-normal placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="h-14 px-6 py-3 bg-white border border-neutral-500 rounded-md text-neutral-400 text-xl font-normal placeholder-gray-400"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full">
          <textarea 
            placeholder="Your message for us" 
            className="w-full h-52 px-6 py-3 bg-white border border-neutral-500 rounded-md text-neutral-400 text-xl font-normal placeholder-gray-400"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-16">
        <button className="w-56 h-16 bg-black text-white text-2xl font-semibold rounded-lg border border-black flex items-center justify-center">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
