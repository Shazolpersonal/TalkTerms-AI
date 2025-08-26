import React, { useState } from 'react';

const glimpseData = {
  jobOffer: {
    before: "The salary for this position is $100,000 per year. You will be entitled to 15 days of paid time off.",
    after: "The salary for this position is <span class='bg-blue-100 font-semibold'>$115,000 per year</span>, which is more in line with industry standards for this role. You will be entitled to <span class='bg-blue-100 font-semibold'>20 days of paid time off</span> and <span class='bg-blue-100 font-semibold'>flexible working hours</span>."
  },
  freelanceContract: {
    before: "The client will pay the invoice within 45 days of receipt. The rate for this project is $50 per hour.",
    after: "The client will pay the invoice within <span class='bg-blue-100 font-semibold'>15 days of receipt</span> to ensure timely payment. The rate for this project is <span class='bg-blue-100 font-semibold'>$65 per hour</span>, reflecting the value and expertise brought to the project."
  },
  businessDeal: {
    before: "This agreement is exclusive for 12 months. We will provide marketing support.",
    after: "This agreement is exclusive for <span class='bg-blue-100 font-semibold'>6 months</span>, with an option to renew based on performance. We will provide <span class='bg-blue-100 font-semibold'>a dedicated marketing budget of $5,000</span> and <span class='bg-blue-100 font-semibold'>quarterly review meetings</span> to ensure mutual success."
  }
};

const Glimpse = () => {
  const [activeTab, setActiveTab] = useState('jobOffer');

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 text-sm font-semibold rounded-lg ${activeTab === id ? 'bg-[--color-action-blue] text-white' : 'bg-white text-[--color-text-primary]'}`}
    >
      {children}
    </button>
  );

  return (
    <section id="glimpse" className="py-20 bg-[--color-clean-slate]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[--color-text-primary]">Get a Glimpse of the Power</h2>
          <p className="mt-4 text-lg text-[#4b5563]">See how TalkTerms AI transforms your negotiations.</p>
        </div>
        <div className="mt-12">
          <div className="flex justify-center space-x-4">
            <TabButton id="jobOffer">Job Offer</TabButton>
            <TabButton id="freelanceContract">Freelance Contract</TabButton>
            <TabButton id="businessDeal">Business Deal</TabButton>
          </div>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#6b7280]">Before</h3>
                <p className="mt-4 text-[#374151]">{glimpseData[activeTab].before}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-[--color-action-blue]">
                <h3 className="text-lg font-semibold text-[--color-action-blue]">After TalkTerms AI</h3>
                <p className="mt-4 text-[#374151]" dangerouslySetInnerHTML={{ __html: glimpseData[activeTab].after }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glimpse;
