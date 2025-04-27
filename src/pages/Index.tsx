
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import Navbar from '@/components/Layout/Navbar';
import SidebarNav from '@/components/Layout/SidebarNav';
import TrendCard from '@/components/Dashboard/TrendCard';
import KeywordChart from '@/components/Dashboard/KeywordChart';
import SectorOverview from '@/components/Dashboard/SectorOverview';
import MarketSentiment from '@/components/Dashboard/MarketSentiment';

// Mock data for our components
const trendingKeywords = [
  { label: "AI", type: "growth" as const },
  { label: "Web3", type: "neutral" as const },
  { label: "SaaS", type: "growth" as const }
];

const mockKeywordData = [
  { date: 'Jan', 'Artificial Intelligence': 20, 'Machine Learning': 15, 'Data Science': 10 },
  { date: 'Feb', 'Artificial Intelligence': 25, 'Machine Learning': 18, 'Data Science': 12 },
  { date: 'Mar', 'Artificial Intelligence': 30, 'Machine Learning': 20, 'Data Science': 15 },
  { date: 'Apr', 'Artificial Intelligence': 35, 'Machine Learning': 25, 'Data Science': 20 },
  { date: 'May', 'Artificial Intelligence': 45, 'Machine Learning': 35, 'Data Science': 25 },
  { date: 'Jun', 'Artificial Intelligence': 60, 'Machine Learning': 40, 'Data Science': 30 },
];

const keywordColors = [
  { name: 'Artificial Intelligence', color: '#3282B8' },
  { name: 'Machine Learning', color: '#7367F0' },
  { name: 'Data Science', color: '#28C76F' }
];

const sectorData = [
  { name: 'Technology', growth: 18.4, color: '#3282B8' },
  { name: 'Healthcare', growth: 11.2, color: '#28C76F' },
  { name: 'Finance', growth: 7.5, color: '#1A508B' },
  { name: 'Energy', growth: 5.1, color: '#FF9F43' },
  { name: 'Real Estate', growth: -2.3, color: '#EA5455' },
  { name: 'Manufacturing', growth: 3.9, color: '#7367F0' }
];

const sentimentData = [
  { name: 'Positive', value: 60, color: '#28C76F' },
  { name: 'Neutral', value: 25, color: '#FF9F43' },
  { name: 'Negative', value: 15, color: '#EA5455' },
];

// Mock upcoming IPO data
const upcomingIPOs = [
  { company: "TechVision AI", sector: "Technology", valuation: "$2.8B", date: "May 15, 2023" },
  { company: "GreenEnergy Solutions", sector: "Energy", valuation: "$1.4B", date: "May 22, 2023" },
  { company: "MedLife Sciences", sector: "Healthcare", valuation: "$3.2B", date: "June 5, 2023" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <SidebarNav />
          <div className="flex-1 overflow-auto">
            <div className="container py-6">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Research Dashboard</h1>
                  <p className="text-muted-foreground">Track emerging trends and opportunities across markets</p>
                </div>
                
                <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="startups">Startups & IPOs</TabsTrigger>
                    <TabsTrigger value="research">Research</TabsTrigger>
                    <TabsTrigger value="markets">Markets</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <TrendCard 
                        title="Trending Topics" 
                        value="Artificial Intelligence"
                        change={32.4}
                        trend="up"
                        tags={trendingKeywords}
                      />
                      
                      <TrendCard 
                        title="Growth Sectors" 
                        value="Technology"
                        subtitle="18.4% YoY Growth"
                        change={4.2}
                        trend="up"
                      />
                      
                      <TrendCard 
                        title="Market Sentiment" 
                        value="Positive"
                        subtitle="60% of market discussions"
                        change={5.3}
                        trend="up"
                        variant="accent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                      <KeywordChart 
                        title="Keyword Trend Analysis" 
                        data={mockKeywordData} 
                        keywords={keywordColors}
                      />
                      
                      <SectorOverview 
                        title="Sector Growth Forecast (Annual)" 
                        data={sectorData}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-1">
                        <MarketSentiment 
                          title="Market Sentiment Analysis" 
                          data={sentimentData}
                        />
                      </div>
                      
                      <div className="lg:col-span-2">
                        <Card className="animate-enter">
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="font-medium">Upcoming IPOs</h3>
                              <Button variant="outline" size="sm">View All</Button>
                            </div>
                            
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left font-medium text-sm p-2">Company</th>
                                    <th className="text-left font-medium text-sm p-2">Sector</th>
                                    <th className="text-left font-medium text-sm p-2">Valuation</th>
                                    <th className="text-left font-medium text-sm p-2">Expected Date</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {upcomingIPOs.map((ipo, index) => (
                                    <tr key={index} className="border-b last:border-b-0">
                                      <td className="p-2">{ipo.company}</td>
                                      <td className="p-2">{ipo.sector}</td>
                                      <td className="p-2">{ipo.valuation}</td>
                                      <td className="p-2">{ipo.date}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="startups" className="pt-4">
                    <div className="flex justify-center items-center h-64">
                      <p className="text-muted-foreground">Startup & IPO tracking information will be available soon.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="research" className="pt-4">
                    <div className="flex justify-center items-center h-64">
                      <p className="text-muted-foreground">Research breakthroughs information will be available soon.</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="markets" className="pt-4">
                    <div className="flex justify-center items-center h-64">
                      <p className="text-muted-foreground">Market analysis information will be available soon.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
