import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../firebase.config.js'; // Ensure this path is correct

import Button from '@/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const NegotiatePage = () => {
  const navigate = useNavigate();
  const [negotiationText, setNegotiationText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!negotiationText.trim()) {
      setError('Please paste your negotiation text before analyzing.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const functions = getFunctions(app);
      const analyzeNegotiation = httpsCallable(functions, 'analyzeNegotiation');
      const result = await analyzeNegotiation({ text: negotiationText });

      // The result.data will contain the JSON object from the cloud function
      navigate('/negotiate/results', { state: { analysis: result.data } });

    } catch (err) {
      console.error("Error calling analyzeNegotiation function:", err);
      setError("We couldn't analyze your text right now. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold text-gray-800">
              Analyze Your Negotiation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="paste" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="paste">Paste Text</TabsTrigger>
                <TabsTrigger value="upload" disabled>Upload File</TabsTrigger>
                <TabsTrigger value="template" disabled>Use a Template</TabsTrigger>
              </TabsList>
              <TabsContent value="paste">
                <div className="space-y-6 pt-4">
                  <div className="grid w-full gap-2">
                    <Label htmlFor="message">Your negotiation text</Label>
                    <Textarea
                      id="message"
                      placeholder="Paste the full text of the offer, email, or contract here..."
                      className="min-h-[200px] text-base"
                      value={negotiationText}
                      onChange={(e) => setNegotiationText(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="grid w-full gap-2">
                    <Label>Choose Your Goal</Label>
                    <Select disabled={isLoading}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary objective..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maximize-salary">Maximize Salary</SelectItem>
                        <SelectItem value="improve-terms">Improve Contract Terms</SelectItem>
                        <SelectItem value="understand-offer">Just Understand the Offer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            {error && (
              <div className="mt-4 text-center text-red-600 bg-red-100 p-3 rounded-md">
                {error}
              </div>
            )}
            <div className="mt-8 flex justify-center">
              <Button onClick={handleAnalyze} variant="primary" size="large" disabled={isLoading}>
                {isLoading ? 'Analyzing...' : 'Analyze My Offer'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NegotiatePage;
