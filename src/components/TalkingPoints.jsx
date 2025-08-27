import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquareQuote } from 'lucide-react';

const TalkingPoints = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Talking Points</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No specific talking points were generated.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Talking Points</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {data.map((topicItem, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-lg text-gray-800">{topicItem.topic}</h4>
            <div className="mt-2 space-y-3">
              {topicItem.points.map((point, pIndex) => (
                <div key={pIndex} className="flex items-start space-x-3">
                  <MessageSquareQuote className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

TalkingPoints.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default TalkingPoints;
