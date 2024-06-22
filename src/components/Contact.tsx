import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen relative bg-neutral-50 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full text-center mb-8">
        <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-normal">Got any idea</h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-screen-lg p-4 flex flex-col items-center gap-6">
        {/* Name and Email Fields */}
        <div className="w-full md:flex md:justify-between md:gap-4">
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full h-12 px-4 bg-white border border-neutral-500 rounded-md text-neutral-400 text-lg font-normal placeholder-gray-400"
            />
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full h-12 px-4 bg-white border border-neutral-500 rounded-md text-neutral-400 text-lg font-normal placeholder-gray-400"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full">
          <textarea 
            placeholder="Your message for us" 
            className="w-full h-40 px-4 py-3 bg-white border border-neutral-500 rounded-md text-neutral-400 text-lg font-normal placeholder-gray-400"
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <div className="mt-8">
          <button className="w-full md:w-auto h-12 bg-black text-white text-lg font-semibold rounded-lg border border-black flex items-center justify-center px-6">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
