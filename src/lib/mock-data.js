export const mockAnalysis = {
  offerScorecard: {
    score: 'B+',
    scoreValue: 88,
    summary: 'A strong offer with solid fundamentals, but with room for improvement in key areas.'
  },
  keyLevers: [
    {
      icon: 'TrendingUp',
      title: 'Salary & Bonus',
      description: 'The base salary is competitive, but the performance bonus structure is below market average for this role.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Health & Wellness Benefits',
      description: 'Excellent, comprehensive health insurance plan that is better than most comparable companies.'
    },
    {
      icon: 'Lightbulb',
      title: 'Professional Development',
      description: 'The offer includes a standard professional development stipend, which could be negotiated for a higher amount.'
    }
  ],
  talkingPoints: [
    {
      topic: 'Opening Statement',
      points: [
        "Thank you for the offer. I'm very excited about the opportunity to join the team.",
        "I've reviewed the details and would like to discuss a few points to make this a perfect fit for both of us."
      ]
    },
    {
      topic: 'On Base Salary',
      points: [
        "Based on my research of similar roles in the industry and my level of experience, I was expecting a base salary in the range of [Your Target Range].",
        "I'm confident that my skills in [Your Key Skill] will bring significant value to the team and I believe the compensation should reflect that."
      ]
    }
  ],
  counterProposals: [
    {
      area: 'Base Salary',
      suggestion: 'An increase of 8-10% to the current base salary offer.',
      rationale: 'This aligns the offer with the upper tier of market rates for this role and reflects my experience level.'
    },
    {
      area: 'Performance Bonus',
      suggestion: 'A guaranteed first-year bonus of 15% instead of the proposed 10%.',
      rationale: 'This provides a stronger incentive and mitigates the risk of a lower-than-expected payout in the first year.'
    }
  ],
  draftEmail: {
    subject: 'Following up on your offer',
    body: `Dear [Hiring Manager Name],

Thank you again for the generous offer to join [Company Name] as a [Job Title]. I am very excited about the possibility of working with you and the team.

I have had a chance to review the offer in detail. I believe we are very close to an agreement, and I would like to discuss two areas to ensure this is a strong and mutually beneficial partnership.

[Insert your specific points here, based on the talking points and counter proposals]

I am confident that we can find a solution that works for both of us.

Best regards,
[Your Name]`
  }
};
