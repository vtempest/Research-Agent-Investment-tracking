
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import Navbar from '@/components/Layout/Navbar';
import SidebarNav from '@/components/Layout/SidebarNav';
import PredictionMarkets from '@/components/PredictionMarkets/PredictionMarkets';

const PredictionMarketsPage: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <SidebarNav />
          <div className="flex-1 overflow-auto">
            <div className="container py-6">
              <PredictionMarkets />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default PredictionMarketsPage;
