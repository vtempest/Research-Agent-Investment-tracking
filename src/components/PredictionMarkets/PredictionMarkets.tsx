
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for prediction market trends
const predictionData = [
  { date: 'Apr 20', probability: 65, sentiment: 55, expertConsensus: 70 },
  { date: 'Apr 21', probability: 68, sentiment: 60, expertConsensus: 72 },
  { date: 'Apr 22', probability: 67, sentiment: 62, expertConsensus: 73 },
  { date: 'Apr 23', probability: 70, sentiment: 65, expertConsensus: 75 },
  { date: 'Apr 24', probability: 75, sentiment: 70, expertConsensus: 77 },
  { date: 'Apr 25', probability: 78, sentiment: 72, expertConsensus: 80 },
  { date: 'Apr 26', probability: 82, sentiment: 75, expertConsensus: 84 },
];

// Mock arbitrage opportunities
const arbitrageOpportunities = [
  { 
    id: 1, 
    event: "US Presidential Election 2024", 
    market1: "Kalshi", 
    price1: "$0.65", 
    market2: "Polymarket", 
    price2: "$0.71", 
    difference: "9.2%", 
    trend: "up"
  },
  { 
    id: 2, 
    event: "Fed Rate Decision - June", 
    market1: "Kalshi", 
    price1: "$0.45", 
    market2: "PredictIt", 
    price2: "$0.42", 
    difference: "7.1%", 
    trend: "down"
  },
  { 
    id: 3, 
    event: "SpaceX Mars Mission", 
    market1: "Polymarket", 
    price1: "$0.22", 
    market2: "Kalshi", 
    price2: "$0.18", 
    difference: "22.2%", 
    trend: "up"
  },
  { 
    id: 4, 
    event: "GDP Growth Q3", 
    market1: "PredictIt", 
    price1: "$0.58", 
    market2: "Kalshi", 
    price2: "$0.63", 
    difference: "8.6%", 
    trend: "up"
  },
];

// Mock significant shifts
const significantShifts = [
  { 
    event: "AI Regulation Bill Passage", 
    previousProb: "32%", 
    currentProb: "58%", 
    change: "+26%", 
    source: "Kalshi",
    timeframe: "24h"
  },
  { 
    event: "Inflation Rate Above 3%", 
    previousProb: "75%", 
    currentProb: "62%", 
    change: "-13%", 
    source: "Polymarket",
    timeframe: "48h"
  },
  { 
    event: "SpaceX Successful Launch", 
    previousProb: "85%", 
    currentProb: "92%", 
    change: "+7%", 
    source: "PredictIt",
    timeframe: "12h"
  },
];

const PredictionMarkets: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Prediction Markets</h1>
        <p className="text-muted-foreground">
          Synthesizing data from prediction markets, social sentiment, and expert forecasts
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card className="animate-enter">
          <CardHeader>
            <CardTitle className="text-lg">Market Probability Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={predictionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                  }} />
                  <Legend />
                  <Line type="monotone" dataKey="probability" stroke="#3282B8" strokeWidth={2} />
                  <Line type="monotone" dataKey="sentiment" stroke="#7367F0" strokeWidth={2} />
                  <Line type="monotone" dataKey="expertConsensus" stroke="#28C76F" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#3282B8]"></span>
                <span className="text-sm">Market Prob.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7367F0]"></span>
                <span className="text-sm">Social Sentiment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#28C76F]"></span>
                <span className="text-sm">Expert Consensus</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="animate-enter">
          <CardHeader>
            <CardTitle className="text-lg">Significant Probability Shifts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {significantShifts.map((shift, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium">{shift.event}</span>
                    <Badge variant={shift.change.startsWith('+') ? 'default' : 'destructive'}>
                      {shift.change}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Previous: {shift.previousProb}</span>
                    <span>Current: {shift.currentProb}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="bg-secondary px-2 py-0.5 rounded">{shift.source}</span>
                    <span className="text-muted-foreground">Past {shift.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="animate-enter">
        <CardHeader>
          <CardTitle className="text-lg">Arbitrage Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium text-sm p-2">Event</th>
                  <th className="text-left font-medium text-sm p-2">Market 1</th>
                  <th className="text-left font-medium text-sm p-2">Price</th>
                  <th className="text-left font-medium text-sm p-2">Market 2</th>
                  <th className="text-left font-medium text-sm p-2">Price</th>
                  <th className="text-left font-medium text-sm p-2">Difference</th>
                </tr>
              </thead>
              <tbody>
                {arbitrageOpportunities.map((opportunity) => (
                  <tr key={opportunity.id} className="border-b last:border-b-0">
                    <td className="p-2 font-medium">{opportunity.event}</td>
                    <td className="p-2">{opportunity.market1}</td>
                    <td className="p-2">{opportunity.price1}</td>
                    <td className="p-2">{opportunity.market2}</td>
                    <td className="p-2">{opportunity.price2}</td>
                    <td className="p-2">
                      <span className={`font-medium ${opportunity.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {opportunity.difference}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionMarkets;
