import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/Button';
import { ClipboardCopy, AlertCircle } from 'lucide-react';

const DraftEmail = ({ data }) => {
  const [emailContent, setEmailContent] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (data) {
      const fullEmail = `Subject: ${data.subject}\n\n${data.body}`;
      setEmailContent(fullEmail);
    }
  }, [data]);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailContent).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    }, (err) => {
      console.error('Failed to copy email: ', err);
    });
  };

  if (!data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Draft Email</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center text-gray-500">
          <AlertCircle className="w-5 h-5 mr-2" />
          <p>No email draft was generated.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Draft Email</CardTitle>
        <Button variant="outline" size="small" onClick={handleCopy}>
          <ClipboardCopy className="w-4 h-4 mr-2" />
          {copySuccess ? 'Copied!' : 'Copy'}
        </Button>
      </CardHeader>
      <CardContent>
        <Textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          className="min-h-[500px] text-base font-mono bg-gray-50"
          aria-label="Draft Email Content"
        />
      </CardContent>
    </Card>
  );
};

DraftEmail.propTypes = {
  data: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default DraftEmail;
