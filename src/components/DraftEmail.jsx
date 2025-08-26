import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/Button';
import { ClipboardCopy } from 'lucide-react';

const draftEmailContent = `Subject: Re: Job Offer from [Company Name]

Dear [Hiring Manager Name],

Thank you very much for offering me the [Job Title] position at [Company Name]. I am very excited about the opportunity to join your team and contribute to [mention something specific you're excited about].

After careful consideration of the offer, and based on my research into market rates for this role with my level of experience, I would like to propose a few adjustments to the compensation package.

I am confident that my skills in [mention 1-2 key skills] will bring significant value to your team. With that in mind, I would be more comfortable if we could settle on a base salary of $125,000.

Additionally, I would like to propose an adjustment to the severance package to include 4 weeks of pay, which would provide a more standard level of security.

I am very enthusiastic about this role and believe my proposals are in line with the value I will bring to [Company Name]. I am flexible and open to discussing this further.

Thank you again for this wonderful opportunity. I look forward to hearing from you soon.

Best regards,

[Your Name]`;

const DraftEmail = () => {
  const [email, setEmail] = React.useState(draftEmailContent);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    // Add a visual cue for copying, e.g., a toast notification
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Draft Email</CardTitle>
        <Button variant="outline" size="small" onClick={handleCopy}>
          <ClipboardCopy className="w-4 h-4 mr-2" />
          Copy
        </Button>
      </CardHeader>
      <CardContent>
        <Textarea
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[500px] text-base font-mono bg-gray-50"
        />
      </CardContent>
    </Card>
  );
};

export default DraftEmail;
