"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, ArrowUpRight, Sparkles, ChevronRight, X, Filter, Check, Download, ArrowLeft } from 'lucide-react';
import NavigationPage from '@/components/Home/nav/page';

// 1. Updated Data Structure: pdfUrl for viewing (.html), downloadUrl for saving (.pdf)
const allArticles = [
  {
    id: '1',
    category: 'ARESS',
     subJournal: 'ARESS',
    journal: 'GJPIR',
    title: 'CLIMATE FINANCE AND GREEN TRADE TRANSITIONS: EU CARBON BORDER ADJUSTMENT MECHANISM, GREEN BOND MARKETS, AND CLIMATE RISK IN BANK LENDING PORTFOLIOS',
    description: 'An analysis of EU Carbon Border Adjustment Mechanism, green bond markets, and climate risk management in banking.',
    author: 'Dr. Sofia Ahmed Sait',
    pages: '1-19 Pages',
    pdfUrl: '../htm/climate_paper.html',    // Used for the Viewer
    downloadUrl: '/climate_paper.pdf' // Used for the Download Button
  },
  {
    id: '2',
    category: 'CIMS',
    journal: 'GJPIR',
    subJournal: 'CIMS',
    title: 'Bridging the Protection Gap: A Systematic Analysis of Social Security Deficits in the Gig Economy and Organisational–Governmental Pathways Toward Inclusive Platform Work',
    description: 'Bridging the Protection Gap: A Systematic Analysis of Social Security Deficits in the Gig Economy and Organisational–Governmental Pathways Toward Inclusive Platform Work',
    author: 'Dr. Sofia Ahmed Sait',
    pages: '20-44 Pages',
    pdfUrl: '../htm/Gig_Economy_Social_Security_Research_Paper.html',
    downloadUrl: '../pdfs/Gig_Economy_Social_Security_Research_Paper.pdf'
  },
  {
    id: '3',
    category: 'IAEES',
    journal: 'GJPIR',
    subJournal: 'IAEES',
    title: 'A Framework for Smart Retailing and NFC Mobile Payment Services',
    description: 'A Framework for Smart Retailing and NFC Mobile Payment Services',
    author: 'Dr. Bijeta Shaw',
    pages: '45-55 Pages',
    pdfUrl: '../htm/Internet of things & NFC.html',
    downloadUrl: '../pdfs/Internet of things & NFC.pdf'
  },
   {
    id: '4',
    category: 'ARESS',
    journal: 'GJPIR',
    subJournal: 'ARESS',
    title: 'External Blockholder Concentration and Real Earnings Management in India: Re-evaluating the Private Benefit Hypothesis in Group-Affiliated Firms',
    description: 'External Blockholder Concentration and Real Earnings Management in India: Re-evaluating the Private Benefit Hypothesis in Group-Affiliated Firms',
    author: 'Srikanth Potharla',
    pages: '56-78 Pages',
    pdfUrl: '../htm/PBH&REM_Manuscript_updated_11.12.2025.html',
    downloadUrl: '../pdfs/PBH&REM_Manuscript_updated_11.12.2025.pdf'
  },{
    id: '5',
    category: 'CIMS',
    journal: 'GJPIR',
    subJournal: 'CIMS',
    title: 'PHYGITAL CONSUMER ENGAGEMENT: INTEGRATING PHYSICAL AND DIGITAL REALITIES IN MODERN MARKETING STRATEGY',
    description: 'PHYGITAL CONSUMER ENGAGEMENT: INTEGRATING PHYSICAL AND DIGITAL REALITIES IN MODERN MARKETING STRATEGY',
    author: 'Dr. Sofia Ahmed Sait',
    pages: '79-97 Pages',
    pdfUrl: '../htm/Phygital Omnichannel.html',
    downloadUrl: '../pdfs/Phygital Omnichannel.pdf'
  },{
    id: '6',
    category: 'ARESS',
    journal: 'GJPIR',
    subJournal: 'ARESS',
    title: 'The Impact of Digital Financial Literacy on Financial Behavior among Generation Z in Sri Lanka',
    description: 'The Impact of Digital Financial Literacy on Financial Behavior among Generation Z in Sri Lanka',
    author: 'Shanika Wijerathne, Hiranya Dissanayake',
    pages: '98-111 Pages',
    pdfUrl: '../htm/The Impact of Digital Financial Literacy on Financial Behavior among Generation Z in Sri Lanka.html',
    downloadUrl: '../pdfs/The Impact of Digital Financial Literacy on Financial Behavior among Generation Z in Sri Lanka.pdf'
  },
    {
    id: '7',
    category: 'CIMS',
    journal: 'GJPIR',
    subJournal: 'CIMS',
    title: 'US TARIFF WARS AND GLOBAL TRADE FRAGMENTATION:EMERGING MARKET EXPORT IMPACTS, SUPPLY CHAIN RELOCATION, AND TRADE DIVERSION EFFECTS IN INDIA, VIETNAM, AND BANGLADESH',
    description: 'US TARIFF WARS AND GLOBAL TRADE FRAGMENTATION: EMERGING MARKET EXPORT IMPACTS, SUPPLY CHAIN RELOCATION, AND TRADE DIVERSION EFFECTS IN INDIA, VIETNAM, AND BANGLADESH',
    author: 'Dr. Sofia Ahmed Sait',
    pages: '112-135 Pages',
    pdfUrl: '../htm/US_Tariff_Wars_Global_Trade_Fragmentation_Q1_Paper.html',
    downloadUrl: '../pdfs/US_Tariff_Wars_Global_Trade_Fragmentation_Q1_Paper.pdf'




    }
];

export default function ProfessionalExplore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [selectedPdf, setSelectedPdf] = useState<any>(null);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape') setSelectedPdf(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    let result = allArticles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.journal.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (activeFilter !== 'All') {
      result = result.filter(article => article.category.toUpperCase() === activeFilter.toUpperCase());
    }
    setFilteredArticles(result);
  }, [searchTerm, activeFilter]);

  const categories = ['All', 'ARESS', 'CIMS', 'IAEES','AICET'];

  return (
    <div className="relative min-h-screen bg-white">
      <NavigationPage />

      {/* --- FULL SCREEN VIEW MODAL --- */}
      {selectedPdf && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col animate-in fade-in duration-300">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSelectedPdf(null)} 
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="max-w-[200px] md:max-w-md">
                <h3 className="text-sm font-bold text-slate-900 truncate">{selectedPdf.title}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{selectedPdf.journal} • {selectedPdf.pages}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href={selectedPdf.downloadUrl} 
                download={`${selectedPdf.title.substring(0, 20)}.pdf`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl text-xs font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-100"
              >
                <Download size={16} /> <span className="hidden sm:inline">Download PDF</span>
              </a>
              <button onClick={() => setSelectedPdf(null)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Content Area - No Overlays here */}
          <div className="flex-grow w-full bg-slate-50 overflow-hidden">
            <div className="w-full h-full max-w-7xl mx-auto md:p-4">
              <div className="w-full h-full bg-white shadow-2xl overflow-hidden md:rounded-t-2xl">
                <object
                  data={selectedPdf.pdfUrl}
                  type="text/html"
                  className="w-full h-full border-none"
                >
                  <div className="flex flex-col items-center justify-center h-full text-slate-500 p-10 text-center">
                    <FileText size={48} className="mb-4 text-slate-300" />
                    <p className="text-lg font-bold">Unable to load preview</p>
                    <a href={selectedPdf.downloadUrl} className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg">Download PDF</a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-orange-50/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-50/40 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-12 lg:pt-36 lg:pb-24 font-sans">
        <header className="mb-10 space-y-4">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-bold uppercase tracking-[0.2em]">
            <Sparkles size={10} className="text-orange-400" /> Research Archive 2026
          </div> */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Vol. 01- Issue  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">01- April 2026 </span>
          </h1>
        </header>

        {/* Action Bar */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex-grow relative group">
            <div className="relative flex items-center bg-white border border-slate-100 rounded-xl px-4 py-3 shadow-sm focus-within:shadow-md transition-all">
              <Search className="text-slate-400 mr-3" size={18} />
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author or journal..." 
                className="bg-transparent w-full outline-none text-sm font-medium placeholder:text-slate-300"
              />
              <kbd className="hidden md:inline-flex whitespace-nowrap px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold text-slate-400">
                CTRL + K
              </kbd>
            </div>
          </div>
          
          <div className="relative" ref={filterRef}>
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all font-bold text-xs ${activeFilter !== 'All' ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200' : 'bg-white border-slate-100 text-slate-700 hover:bg-slate-50 shadow-sm'}`}>
              <Filter size={16} />
              <span className="hidden sm:inline">{activeFilter === 'All' ? 'Filter' : activeFilter}</span>
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 overflow-hidden">
                <div className="p-2">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => { setActiveFilter(cat); setIsFilterOpen(false); }} className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-50 text-slate-700 transition-colors">
                      {cat}
                      {activeFilter === cat && <Check size={14} className="text-orange-500" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              onRead={() => setSelectedPdf(article)} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function ArticleCard({ article, onRead }: { article: any, onRead: () => void }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/5 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      <div className="relative h-full bg-white border border-slate-100 rounded-[20px] p-6 transition-all duration-500 group-hover:border-orange-200 group-hover:-translate-y-2 flex flex-col shadow-sm hover:shadow-md">
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black uppercase tracking-[0.1em] text-orange-500 bg-orange-50 px-2 py-0.5 rounded w-fit">
              {article.category}
            </span>
            <span className="text-[10px] font-bold text-slate-400 line-clamp-1 uppercase tracking-tight">{article.journal}</span>
          </div>
          <div className="flex flex-col items-end">
            <FileText size={16} className="text-slate-300 group-hover:text-orange-500 transition-all duration-500 transform group-hover:rotate-12" />
            <span className="text-[8px] font-black text-slate-300 mt-1 uppercase tracking-tighter">{article.pages}</span>
          </div>
        </div>

        <div className="flex-grow space-y-2">
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
            {article.title}
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">
            {article.description}
          </p>
        </div>

        <div className="mt-6 space-y-0.5">
          <div className="border-b border-slate-100 pb-1 flex items-center justify-between">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sub Division Journal:</span>
            <span className="text-[10px] font-bold text-slate-600 truncate max-w-[150px]">{article.subJournal}</span>
          </div>
          <div className="border-b border-slate-100 py-1.5 flex items-center justify-between">
             <span className="text-[11px] font-bold text-slate-900">{article.author}</span>
             <span className="text-[9px] text-slate-400 font-medium italic">{article.date || 'Q1 2026'}</span>
          </div>
        </div>

        <button 
          onClick={onRead}
          className="w-full mt-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all hover:bg-orange-600 active:scale-95 shadow-md"
        >
          View Full Publication <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}