import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareQuote } from 'lucide-react';

const talkingPoints = [
  {
    point: "Commend their offer and express excitement about the opportunity.",
    example: "“Thank you so much for the offer. I’m very excited about the possibility of joining the team.”",
  },
  {
    point: "Clearly state your ask regarding the base salary, referencing market data.",
    example: "“Based on my research for similar roles in this market and my experience level, I was expecting a base salary in the range of $120,000 to $130,000.”",
  },
  {
    point: "Justify your request for an improved severance package.",
    example: "“Regarding the severance, I’d be more comfortable with a 3-month package to provide a bit more security.”",
  },
];

const TalkingPoints = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Talking Points</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {talkingPoints.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-lg">{item.point}</h4>
            <div className="flex items-start space-x-3 mt-2">
              <MessageSquareQuote className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <p className="text-gray-600 italic">"{item.example}"</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TalkingPoints;
