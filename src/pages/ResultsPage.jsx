import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import OfferScorecard from '@/components/OfferScorecard';
import KeyLevers from '@/components/KeyLevers';
import TalkingPoints from '@/components/TalkingPoints';
import CounterProposals from '@/components/CounterProposals';
import DraftEmail from '@/components/DraftEmail';

const ResultsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-lg">
            <TabsTrigger value="overview" className="text-lg py-3">Overview</TabsTrigger>
            <TabsTrigger value="strategy" className="text-lg py-3">Strategy</TabsTrigger>
            <TabsTrigger value="draft" className="text-lg py-3">Draft</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="mt-6 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <OfferScorecard />
                  </div>
                  <div className="lg:col-span-2">
                    <KeyLevers />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strategy">
            <Card className="mt-6 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <TalkingPoints />
                  <CounterProposals />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="draft">
            <Card className="mt-6 border-none shadow-lg">
              <CardContent className="p-8">
                <DraftEmail />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResultsPage;
