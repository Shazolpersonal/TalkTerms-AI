import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import OfferScorecard from '@/components/OfferScorecard';
import KeyLevers from '@/components/KeyLevers';
import TalkingPoints from '@/components/TalkingPoints';
import CounterProposals from '@/components/CounterProposals';
import DraftEmail from '@/components/DraftEmail';
import { Skeleton } from '@/components/ui/skeleton';
import { mockAnalysis } from '@/lib/mock-data';


const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // The analysis now comes from the mock data file
  const [analysis, setAnalysis] = useState(location.state?.analysis || mockAnalysis);

  // This effect is no longer needed as we fall back to mock data
  // useEffect(() => {
  //   if (!location.state?.analysis) {
  //     const timer = setTimeout(() => navigate('/negotiate'), 2000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setAnalysis(location.state.analysis);
  //   }
  // }, [location.state, navigate]);

  if (!analysis) {
    // This skeleton is kept as a fallback, though it's less likely to be seen
    return <ResultsSkeleton />;
  }

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
                    <OfferScorecard data={analysis.offerScorecard} />
                  </div>
                  <div className="lg:col-span-2">
                    <KeyLevers data={analysis.keyLevers} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="strategy">
            <Card className="mt-6 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <TalkingPoints data={analysis.talkingPoints} />
                  <CounterProposals data={analysis.counterProposals} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="draft">
            <Card className="mt-6 border-none shadow-lg">
              <CardContent className="p-8">
                <DraftEmail data={analysis.draftEmail} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ResultsSkeleton = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="max-w-5xl mx-auto">
      <Skeleton className="h-12 w-full rounded-lg bg-gray-200" />
      <Card className="mt-6 border-none shadow-lg">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex flex-col items-center">
                <Skeleton className="h-48 w-48 rounded-full" />
                <Skeleton className="h-6 w-3/4 mt-4" />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);


export default ResultsPage;
