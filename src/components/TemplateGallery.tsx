import React from 'react';
import { Link } from 'react-router-dom';

interface Template {
  id: number;
  title: string;
  description: string;
  icons: string[];
}

const templates: Template[] = [
  {
    id: 1,
    title: 'Customer Research Agent',
    description: 'AI agent to identify potential customers for a product using Okibi SDK and...',
    icons: ['🔥', '🎯']
  },
  {
    id: 2,
    title: 'Veo3 Twitter Agent',
    description: 'An AI agent that generates videos with Veo3 and posts them to Twitter',
    icons: ['🌐', '𝕏']
  },
  {
    id: 3,
    title: 'PostHog Analysis Agent',
    description: 'An AI agent that fetches and analyzes events from PostHog',
    icons: ['📊', '🔥']
  },
  {
    id: 4,
    title: 'Google Sheets Agent',
    description: 'An agent that helps users manage their Google Sheets spreadsheets with AI...',
    icons: ['📊']
  }
];

const TemplateGallery: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 bg-[#17151E]">
      <div className="max-w-[1400px] mx-auto bg-[#26242E] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-[#3a3845]">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Template Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-[#26242E] border border-[#4a4c52] rounded-xl p-5 sm:p-6 md:p-8 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-[#5865f2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex flex-col justify-between min-h-[200px] sm:min-h-[240px]"
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 leading-snug">{template.title}</h3>
                <p className="text-xs sm:text-sm text-[#b5bac1] leading-relaxed">{template.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#4a4c52]">
                {template.icons.map((icon, index) => (
                  <React.Fragment key={index}>
                    <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#2B2935] rounded-full text-base sm:text-xl">
                      {icon}
                    </span>
                    {index < template.icons.length - 1 && (
                      <span className="text-[#5865f2] text-xs opacity-50">----</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="flex flex-col md:flex-row justify-between items-center px-4 pt-6 sm:pt-8 mt-4 sm:mt-5 max-w-[1400px] mx-auto gap-4 md:gap-0 text-center md:text-left border-t border-[#3a3845]">
        <p className="text-xs sm:text-sm text-[#6d6f78]">© 2025 Agentmint. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <Link to="/terms" className="text-xs sm:text-sm text-[#b5bac1] hover:text-white transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-xs sm:text-sm text-[#b5bac1] hover:text-white transition-colors">
            Privacy
          </Link>
          <a href="#" className="text-xs sm:text-sm text-[#b5bac1] hover:text-white transition-colors">
            Support
          </a>
        </div>
      </footer>
    </section>
  );
};

export default TemplateGallery;
