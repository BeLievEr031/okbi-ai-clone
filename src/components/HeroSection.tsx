import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <section className="mt-8 sm:mt-12 md:mt-15 flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] px-4 sm:px-6 md:px-8 py-6 sm:py-8 text-center bg-[#17151E]">
      <div className="mb-6 sm:mb-8">
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=332"
          alt="Product Hunt"
          className="h-[40px] sm:h-[48px] md:h-[54px] rounded-lg"
        />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
        <span>AI Agents in minutes</span>
        <img src="/src/assets/fire-logo.png" alt="Fire" className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 inline-block animate-pulse" />
      </h1>

      <p className="text-base sm:text-lg text-[#b5bac1] mb-8 sm:mb-10 md:mb-12 max-w-[90%] sm:max-w-[500px] md:max-w-[600px] px-4">
        Agentmint is your natural language platform for creating powerful AI agents.
      </p>

      <form className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[760px] mx-auto" onSubmit={handleSubmit}>
        <div className="relative bg-[#2B2935] rounded-[16px] sm:rounded-[20px] border-2 border-[#3a3845] p-4 sm:p-5 md:p-6 focus-within:border-[#4F46E5] transition-colors min-h-[120px] sm:min-h-[140px]">
          <textarea
            className="w-full bg-transparent border-none outline-none text-[#A5A3AD] text-sm sm:text-base resize-none font-inherit leading-relaxed placeholder:text-[#6B6874] pr-12 sm:pr-16"
            placeholder="Ask Agentmint to create a LinkedIn lead g"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-end">
            <div className="flex gap-1 sm:gap-2 items-center">
              <button
                type="button"
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-transparent border-none text-[#8b8995] cursor-pointer rounded-md hover:bg-[#3a3845] hover:text-[#d1d0d5] transition-all"
                aria-label="Attach file"
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-transparent border-none text-[#8b8995] cursor-pointer rounded-md hover:bg-[#3a3845] hover:text-[#d1d0d5] transition-all"
                aria-label="Voice input"
              >
                <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-[#6B6874] text-white rounded-full border-none cursor-pointer hover:bg-[#7d7a87] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default HeroSection;
