import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search, Bell, Grid3X3, Users, Briefcase, CheckSquare,
  User, Settings, HelpCircle, Phone, Plus, BarChart2,
  TrendingUp, TrendingDown, Code, DollarSign, Cpu, Cloud,
  Share2, Layers, Database, Lock, Terminal, Package, Zap, AlertTriangle
} from 'lucide-react';
import HeroHeadline from './HeroHeadline';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const shineStyle = `
  @keyframes shine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .shine-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(110deg, transparent 30%, #0ea5e9, #38bdf8, transparent 70%);
    background-size: 250% 100%;
    animation: shine 5s linear infinite;
    opacity: 0.8;
  }
`;

const PHRASES = [
  "Blockchain Apps",
  "Fintech",
  "AI Productions",
  "API Management"
];
const TYPING_SPEED = 120;
const PAUSE_DURATION = 2000;
const DELETING_SPEED = 70;

// --- NEW REALISTIC COMPONENTS ---

// NEW: Live Blocks component for a more realistic Blockchain dashboard
const LiveBlocks = () => {
  const [blocks, setBlocks] = useState([845218, 845217, 845216, 845215]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlocks(prevBlocks => {
        const newBlockNumber = prevBlocks[0] + 1;
        return [newBlockNumber, ...prevBlocks.slice(0, 3)];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow flex flex-col justify-end p-2 -mx-2 -mb-2">
        <div className="flex justify-between items-center px-2 mb-2">
            <p className="text-xs text-gray-400 font-mono">LIVE BLOCKS</p>
            <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                <p className="text-xs text-sky-400 font-mono">SYNCED</p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {blocks.map((block, index) => (
                <div key={block} className={`bg-white/[0.04] p-3 rounded-lg border border-white/10 ${index === 0 ? 'animate-fade-in' : ''}`}>
                    <p className="text-xs text-gray-400">Block</p>
                    <p className="text-white font-semibold font-mono">#{block}</p>
                    <p className="text-xs text-sky-400 mt-1 font-mono truncate">0x{Math.random().toString(16).substr(2, 8)}...</p>
                </div>
            ))}
        </div>
    </div>
  );
};

// NEW: Feature Importance chart for a more realistic AI dashboard
const FeatureImportanceChart = ({ data }: { data: {label: string, value: number}[] }) => {
    return (
        <div className="flex-grow flex flex-col justify-center space-y-2 p-2">
            <h4 className="text-xs text-gray-400 font-semibold mb-2">TOP FEATURES</h4>
            {data.map(item => (
                <div key={item.label} className="flex items-center gap-2 text-xs">
                    <span className="w-24 text-gray-300 truncate text-right">{item.label}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-4">
                        <div className="bg-gradient-to-r from-teal-500 to-sky-500 h-4 rounded-full" style={{ width: `${item.value}%` }}></div>
                    </div>
                    <span className="w-8 text-white font-mono text-left">{item.value}%</span>
                </div>
            ))}
        </div>
    );
}

// --- UPDATED DASHBOARD DATA (MORE REALISTIC) ---
const DASHBOARD_DATA = [
  {
    // CHANGED: Blockchain Dashboard Data
    dashboardTitle: "Blockchain Explorer",
    mainStat: { label: "Live Gas Price", value: "28 Gwei", trend: "Standard", trendColor: "text-sky-400" },
    specialComponent: 'live-blocks', // NEW: Key to render our special component
    quickActions: [
      { text: "View Transaction Pool", icon: Layers },
      { text: "Deploy New Contract", icon: Cloud },
      { text: "Inspect a Wallet", icon: Search },
    ],
    recentActivity: [
      { icon: Package, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "NFT Minted: 'CypherPunk #782'", category: "Mint", categoryColor: "bg-white/10", amount: "0.2 ETH", amountColor: "text-gray-300", time: "12s ago" },
      { icon: Share2, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "Delegated Stake to Validator", category: "Staking", categoryColor: "bg-white/10", amount: "+5.2% APY", amountColor: "text-sky-400", time: "2m ago" },
      { icon: CheckSquare, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "Governance Vote Cast: Prop #42", category: "DAO", categoryColor: "bg-white/10", amount: "For", amountColor: "text-gray-300", time: "1h ago" }
    ],
    pieChart: {
      title: "Transaction Types",
      data: [
        { label: "DeFi Swap", value: 50, color: "text-sky-400" },
        { label: "NFT Mint", value: 30, color: "text-teal-400" },
        { label: "Transfer", value: 20, color: "text-sky-400" },
      ]
    }
  },
  {
    dashboardTitle: "Financial Overview",
    mainStat: { label: "Portfolio Value", value: "€1.25M", trend: "+1.8%", trendColor: "text-sky-400" },
    chartPath: "M0,120 C50,110 80,90 130,95 S180,110 220,80 S280,30 330,40 S400,80 450,70",
    quickActions: [
      { text: "Execute Trade", icon: TrendingUp },
      { text: "Generate P&L Report", icon: BarChart2 },
      { text: "Compliance Check", icon: CheckSquare },
    ],
    recentActivity: [
      { icon: TrendingUp, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "Bought 10 AAPL Shares", category: "Trade", categoryColor: "bg-white/10", amount: "+€1,750.20", amountColor: "text-sky-400", time: "12m ago" },
      { icon: TrendingDown, iconColor: "text-gray-400", bgColor: "bg-white/5", description: "Sold 5 TSLA Shares", category: "Trade", categoryColor: "bg-white/10", amount: "-€1,280.00", amountColor: "text-gray-300", time: "2h ago" },
      { icon: DollarSign, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "Dividend Received: MSFT", category: "Income", categoryColor: "bg-white/10", amount: "+€210.50", amountColor: "text-sky-400", time: "1d ago" }
    ],
    pieChart: {
      title: "Asset Allocation",
      data: [
        { label: "Equities", value: 55, color: "text-sky-400" },
        { label: "Bonds", value: 30, color: "text-teal-400" },
        { label: "Cash", value: 15, color: "text-sky-400" },
      ]
    }
  },
  {
    // CHANGED: AI Dashboard Data
    dashboardTitle: "AI Model Monitoring",
    mainStat: { label: "Inference Latency (p95)", value: "82ms", trend: "-3ms", trendColor: "text-sky-400" },
    specialComponent: 'feature-importance', // NEW: Key to render our special component
    featureImportanceData: [ // NEW: Data for our new chart
        { label: "user_age", value: 88 },
        { label: "past_purchases", value: 75 },
        { label: "session_duration", value: 52 },
    ],
    quickActions: [
      { text: "Trigger Retraining", icon: Cpu },
      { text: "Rollback to v2.1", icon: TrendingDown },
      { text: "Analyze Predictions", icon: Database },
    ],
    recentActivity: [
      { icon: AlertTriangle, iconColor: "text-yellow-400", bgColor: "bg-yellow-500/10", description: "Concept Drift Detected in 'user_region'", category: "Alert", categoryColor: "bg-white/10", amount: "High", amountColor: "text-yellow-400", time: "8m ago" },
      { icon: Zap, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "A/B Test Started: 'NewRec_v3'", category: "Experiment", categoryColor: "bg-white/10", amount: "50/50 Split", amountColor: "text-gray-300", time: "2h ago" },
      { icon: Cloud, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "Model 'Classifier-v4' deployed", category: "Deployment", categoryColor: "bg-white/10", amount: "100% Traffic", amountColor: "text-sky-400", time: "5h ago" }
    ],
    pieChart: {
      title: "Model Inference Cost",
      data: [
        { label: "GPU (A100)", value: 65, color: "text-sky-400" },
        { label: "CPU", value: 25, color: "text-teal-400" },
        { label: "Networking", value: 10, color: "text-sky-400" },
      ]
    }
  },
  {
    dashboardTitle: "API Gateway Traffic",
    mainStat: { label: "Requests / Min", value: "1.2M", trend: "-2.1%", trendColor: "text-gray-400" },
    chartPath: "M0,70 C50,80 80,60 130,65 S180,80 220,50 S280,20 330,30 S400,70 450,60",
    quickActions: [
      { text: "Register New Endpoint", icon: Plus },
      { text: "View API Logs", icon: Terminal },
      { text: "Generate API Key", icon: Lock },
    ],
    recentActivity: [
      { icon: TrendingDown, iconColor: "text-gray-400", bgColor: "bg-white/5", description: "High latency on /users endpoint", category: "Alert", categoryColor: "bg-white/10", amount: "1200ms", amountColor: "text-gray-300", time: "1m ago" },
      { icon: Plus, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "New Subscription: 'Partner Inc.'", category: "Billing", categoryColor: "bg-white/10", amount: "Pro Tier", amountColor: "text-sky-400", time: "45m ago" },
      { icon: Code, iconColor: "text-sky-400", bgColor: "bg-sky-500/10", description: "API version v1.2 deployed", category: "Deployment", categoryColor: "bg-white/10", amount: "#a4b1c3", amountColor: "text-gray-300", time: "4h ago" }
    ],
    pieChart: {
      title: "Traffic by Endpoint",
      data: [
        { label: "/orders", value: 45, color: "text-sky-400" },
        { label: "/users", value: 35, color: "text-blue-400" },
        { label: "/products", value: 20, color: "text-sky-400" },
      ]
    }
  },
];

const getPieSlices = (data: {label: string; value: number; color: string}[]) => {
    let cumulativePercent = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    if (total === 0) return [];

    return data.map(item => {
        const percent = (item.value / total) * 100;
        const slice = { ...item, percent, strokeDasharray: `${percent} ${100 - percent}`, strokeDashoffset: -cumulativePercent };
        cumulativePercent += percent;
        return slice;
    });
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const currentDashboardData = DASHBOARD_DATA[phraseIndex];
  const pieSlices = getPieSlices(currentDashboardData.pieChart.data);
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleTyping = () => {
      const currentPhrase = PHRASES[phraseIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
        }
      } else {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        } else {
          timeoutId = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };
    timeoutId = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, phraseIndex]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
        tl.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 })
          .fromTo(dashboardRef.current, { scale: 0.9, opacity: 0, y: 100 }, { scale: 1, opacity: 1, y: 0, duration: 1.2 }, "-=0.8")
          .fromTo('.dashboard-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 }, "-=0.8");
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": () => {
              const dashboard = dashboardRef.current;
              if (!dashboard) return;
              const onMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = dashboard.getBoundingClientRect();
                const x = (clientX - (left + width / 2)) / (width / 2);
                const y = (clientY - (top + height / 2)) / (height / 2);
                gsap.to(dashboard, { duration: 0.7, rotateY: x * 5, rotateX: -y * 5, ease: 'power3.out' });
              };
              containerRef.current?.addEventListener('mousemove', onMouseMove);
              return () => {
                containerRef.current?.removeEventListener('mousemove', onMouseMove);
                gsap.to(dashboard, { duration: 0.8, rotateX: 0, rotateY: 0, ease: 'elastic.out(1, 0.5)' });
              }
            },
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id='hero' ref={containerRef} style={{ fontFamily: "Helvetica, Helvetica Neue, Arial, sans-serif" }}
      className="section-hero relative flex items-center justify-center w-full text-gray-100 font-sans overflow-hidden">
      <style>{shineStyle}</style>
      <div className="absolute inset-0 z-0 bg-dot-grid-white/[0.07] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-6 px-4 py-4 sm:py-8">
        
        <HeroHeadline displayedText={displayedText} />

        <div className="flex flex-col items-center gap-6">
            <button className="bg-[#22aed8] text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 transform transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]">
                Our Services <ArrowUpRight size={20} strokeWidth={2.5} />
            </button>
        </div>

        <div ref={dashboardRef} style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full max-w-7xl mx-auto mt-2 bg-[#121212]/50 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10 shadow-2xl shadow-black/40 flex flex-col overflow-hidden shine-border">
          
          
          {/* --- Sidebar / Mobile Header --- */}
          <div className="w-full bg-black/20 p-3 border-b border-white/5 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0 flex items-center  justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-sky-400 flex items-center justify-center">
                        <BarChart2 size={18} />
                    </div>
                    <h2 className="text-xl text-white font-semibold">Codevider</h2>
                </div>
                 <div className="md:hidden flex items-center gap-4">
                     <Search className="text-gray-400 hover:text-white cursor-pointer" size={20}/>
                     <Bell className="text-gray-400 hover:text-white cursor-pointer" size={20}/>
                 </div>
              </div>
              <nav className="flex items-center max-sm:hidden gap-2 overflow-x-auto pb-2 md:pb-0">
                  <a href="#" className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white text-sm"><Grid3X3 size={16} /> Dashboard</a>
                  <a href="#" className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors text-sm"><Users size={16} /> Leads</a>
                  <a href="#" className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors text-sm"><Briefcase size={16} /> Companies</a>
                  <a href="#" className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors text-sm"><CheckSquare size={16} /> Tasks</a>
              </nav>
          </div>

          <div className="flex-1 p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl md:text-3xl text-white font-semibold">{currentDashboardData.dashboardTitle}</h1>
                <div className="hidden md:flex items-center gap-4">
                  <Bell className="text-gray-400 hover:text-white cursor-pointer" size={20}/>
                  <Search className="text-gray-400 hover:text-white cursor-pointer" size={20}/>
                </div>
            </div>

            {/* CHANGED: Grid now starts as 1 column, becomes 2 at `md`, and 3 at `xl` for perfect mobile view */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              
              {/* Main Chart Card - Now conditionally renders realistic components */}
              <div className="dashboard-item md:col-span-2 xl:col-span-2 bg-black/20 rounded-xl p-4 flex flex-col min-h-[300px]">
                  <div className="flex flex-wrap gap-4 justify-between items-start">
                      <div>
                          <p className="text-gray-400 text-sm">{currentDashboardData.mainStat.label}</p>
                          <p className="text-3xl font-bold text-white flex items-baseline gap-2">
                              {currentDashboardData.mainStat.value} 
                              <span className={`text-lg font-semibold ${currentDashboardData.mainStat.trendColor}`}>{currentDashboardData.mainStat.trend}</span>
                          </p>
                      </div>
                      <div className="flex gap-1 bg-black/40 p-1 rounded-lg">
                           {['1D', '7D'].map(t => <button key={t} className="px-2.5 py-1 text-xs text-gray-400 rounded hover:bg-white/10">{t}</button>)}
                          <button className="px-2.5 py-1 text-xs text-black bg-white rounded font-bold">1M</button>
                      </div>
                  </div>
                  <div className="flex-grow mt-4 min-h-[200px] flex flex-col">
                      {/* NEW: Conditional rendering logic for special components */}
                      {currentDashboardData.specialComponent === 'live-blocks' && (
                          <div className="flex-grow">
                              <LiveBlocks />
                          </div>
                      )}
                      {currentDashboardData.specialComponent === 'feature-importance' && currentDashboardData.featureImportanceData && (
                          <div className="flex-grow">
                              <FeatureImportanceChart data={currentDashboardData.featureImportanceData} />
                          </div>
                      )}
                      {!currentDashboardData.specialComponent && (
                          <div className="w-full flex-grow -mb-4 -mx-4 min-h-[200px]">
                              <svg width="100%" height="100%" viewBox="0 0 450 150" preserveAspectRatio="none">
                                  <defs>
                                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                          <stop offset="0%" stopColor="rgba(56,189,248,0.3)" />
                                          <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                                      </linearGradient>
                                  </defs>
                                  <path d={currentDashboardData.chartPath} stroke="#38bdf8" fill="url(#chartGradient)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                              </svg>
                          </div>
                      )}
                  </div>
              </div>

              <div className="dashboard-item bg-black/20 rounded-xl p-4 flex flex-col gap-3 justify-center">
                  <h3 className="font-medium text-white text-center mb-2">Quick Actions</h3>
                  {currentDashboardData.quickActions.map((action, index) => (
                      <button key={index} className="group w-full text-left flex items-center gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-lg font-semibold transition-all text-sm">
                          <action.icon className="text-sky-400 transition-transform group-hover:scale-110 flex-shrink-0" size={18}/> 
                          <span className="transition-transform group-hover:translate-x-1 truncate">{action.text}</span>
                      </button>
                  ))}
              </div>

              <div className="dashboard-item md:col-span-2 xl:col-span-2 bg-black/20 rounded-xl p-4">
                <h3 className="font-medium text-white mb-3">Recent Activity</h3>
                <div className="space-y-3 text-sm">
                    {currentDashboardData.recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-white/[0.04]">
                            <div className={`w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center ${activity.bgColor}`}>
                                <activity.icon className={activity.iconColor} size={18} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-white truncate">{activity.description}</p>
                            </div>
                            <div className="flex-shrink-0 hidden sm:block">
                                <span className="text-xs font-semibold px-2 py-1 rounded-full text-gray-200 bg-white/10">
                                    {activity.category}
                                </span>
                            </div>
                            <div className="flex-shrink-0 text-right min-w-[70px]">
                                <p className={`font-semibold ${activity.amountColor}`}>{activity.amount}</p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              <div className="dashboard-item bg-black/20 rounded-xl p-4 flex flex-col">
                  <h3 className="font-bold text-white mb-2">{currentDashboardData.pieChart.title}</h3>
                  <div className="flex-grow flex items-center justify-center my-4">
                    <div className="relative w-36 h-36 lg:w-40 lg:h-40">
                         <svg className="w-full h-full" viewBox="0 0 36 36" transform="rotate(-90)">
                            {pieSlices.map((slice) => (
                                <circle key={slice.label} cx="18" cy="18" r="15.9155" 
                                    className={`stroke-current ${slice.color} transition-all duration-300`}
                                    fill="transparent" 
                                    strokeWidth={hoveredSlice === slice.label ? "5" : "4"}
                                    strokeDasharray={slice.strokeDasharray} 
                                    strokeDashoffset={slice.strokeDashoffset}
                                    style={{ transformOrigin: 'center', transform: hoveredSlice === slice.label ? 'scale(1.05)' : 'scale(1)' }}
                                    opacity={hoveredSlice === null || hoveredSlice === slice.label ? 1 : 0.4} />
                            ))}
                        </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                       {currentDashboardData.pieChart.data.map((item) => (
                            <div key={item.label} className="flex items-center justify-between cursor-pointer"
                                onMouseEnter={() => setHoveredSlice(item.label)} onMouseLeave={() => setHoveredSlice(null)}>
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.color.replace('text-', 'bg-')}`}></span> 
                                    <span className="text-gray-300 truncate">{item.label}</span>
                                </div> 
                                <span className="font-medium text-gray-200 ml-2">{item.value}%</span>
                            </div>
                       ))}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};