import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, TrendingUp, ShieldCheck, HelpCircle } from 'lucide-react';

const iconMap = {
  TrendingUp: <TrendingUp className="w-8 h-8 text-indigo-500" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
  Lightbulb: <Lightbulb className="w-8 h-8 text-indigo-500" />,
  Default: <HelpCircle className="w-8 h-8 text-indigo-500" />,
};

const KeyLevers = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Key Levers for Negotiation</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No specific levers for negotiation were identified.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Key Levers for Negotiation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((lever, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              {iconMap[lever.icon] || iconMap.Default}
            </div>
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

KeyLevers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default KeyLevers;
