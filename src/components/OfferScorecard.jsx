import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Circle } from 'lucide-react';

const OfferScorecard = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Offer Scorecard</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="text-indigo-600"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="85, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-gray-800">B+</span>
            <span className="text-sm text-gray-500">Overall Score</span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">This is a strong offer, but there are key areas for improvement.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferScorecard;
