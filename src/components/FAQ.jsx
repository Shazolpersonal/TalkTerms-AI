import React, { useState } from 'react';

const faqData = [
  {
    question: "Is my data secure?",
    answer: "Yes, absolutely. We use end-to-end encryption for all data transmitted and stored. Your documents are processed in memory and never written to disk. We are committed to the highest standards of data privacy and security."
  },
  {
    question: "What kind of documents can I analyze?",
    answer: "TalkTerms AI is designed to analyze a wide range of documents, including job offers, freelance contracts, business proposals, rental agreements, and more. If it involves negotiation, we can likely help."
  },
  {
    question: "Is this a legal tool?",
    answer: "No. TalkTerms AI is an educational tool designed to help you build confidence and understand negotiation dynamics. It is not a substitute for legal advice. We always recommend consulting with a qualified attorney for legal matters."
  },
  {
    question: "How does the AI work?",
    answer: "We utilize state-of-the-art Large Language Models (LLMs) from Google AI. These models have been trained on vast amounts of text data and are fine-tuned to understand the nuances of negotiation and contract language."
  }
];

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-6 border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[--color-text-primary]"
            >
                <span>{faq.question}</span>
                <span className="text-[--color-action-blue] transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
            </button>
            <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-base text-[#4b5563] pr-8">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-[--color-clean-slate]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[--color-text-primary]">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-[#4b5563]">Have questions? We have answers.</p>
        </div>
        <div className="mt-12">
          {faqData.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
