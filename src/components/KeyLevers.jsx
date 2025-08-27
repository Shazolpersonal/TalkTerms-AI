import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, ShieldCheck } from 'lucide-react';

const levers = [
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
    title: "Salary & Bonus",
    description: "Your base salary is slightly below market rate for your experience level. There's room to negotiate a 10-15% increase.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
    title: "Severance Clause",
    description: "The current severance package is standard but could be improved. Consider asking for an additional 4 weeks.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-indigo-500" />,
    title: "Non-Compete",
    description: "The non-compete agreement is overly broad. It should be narrowed to specific competitors and a shorter time frame.",
  },
];

const KeyLevers = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Key Levers for Negotiation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {levers.map((lever, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">{lever.icon}</div>
            <div>
              <h4 className="font-semibold text-lg">{lever.title}</h4>
              <p className="text-gray-600">{lever.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default KeyLevers;
