import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const NegotiatePage = () => {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate('/negotiate/results');
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
                    />
                  </div>
                  <div className="grid w-full gap-2">
                    <Label>Choose Your Goal</Label>
                    <Select>
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
            <div className="mt-8 flex justify-center">
              <Button onClick={handleAnalyze} variant="primary" size="large">
                Analyze My Offer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NegotiatePage;
