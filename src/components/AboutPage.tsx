import React from "react";
import { Shield, Radio, Tv, Mail, ArrowLeft } from "lucide-react";

interface AboutPageProps {
  onBack: () => void;
  onNavigateContact: () => void;
}

export default function AboutPage({ onBack, onNavigateContact }: AboutPageProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-xl">
      <button
        onClick={onBack}
        className="self-start flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold font-mono uppercase group transition-all"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to live stream
      </button>

      <div className="border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-600/10 border border-red-600/30 text-red-400 text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-full">
            ABOUT US
          </span>
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
          Cycling Live Stream — Pro Cycling Broadcast Portal
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm mt-1">
          Independent live streaming and broadcast directory for professional road cycling at cyclinglivestream.com.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-300 text-xs md:text-sm leading-relaxed">
        <div className="bg-neutral-950/60 p-5 rounded-lg border border-neutral-800/80 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-red-500 font-display font-bold uppercase text-sm">
            <Radio className="h-4 w-4" />
            <span>Our Mission</span>
          </div>
          <p>
            <strong>Cycling Live Stream</strong> (cyclinglivestream.com) is dedicated to passionate road cycling fans worldwide. Our main goal is to make it easy to find live video broadcasts, official streaming feeds, and complete TV coverage guides across the entire international racing calendar.
          </p>
        </div>

        <div className="bg-neutral-950/60 p-5 rounded-lg border border-neutral-800/80 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-red-500 font-display font-bold uppercase text-sm">
            <Tv className="h-4 w-4" />
            <span>Global Coverage</span>
          </div>
          <p>
            From the Tour de France, Giro d&apos;Italia, and La Vuelta to the Cycling Monuments (Paris-Roubaix, Tour of Flanders, Liège-Bastogne-Liège) and World Championships, we curate free and official viewing options around the globe.
          </p>
        </div>
      </div>

      <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 flex flex-col gap-4">
        <h2 className="font-display font-bold text-base text-white uppercase tracking-wide flex items-center gap-2">
          <Shield className="h-5 w-5 text-red-500" />
          Independence &amp; Transparency
        </h2>
        <p className="text-neutral-300 text-xs leading-relaxed">
          We believe in seamless, transparent access to live sports coverage. Cycling Live Stream aggregates links to public and official broadcasters (France Télévisions, RTBF Auvio, RTS, Eurosport, SBS, ITVX) alongside an optimized live video player.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase text-xs px-4 py-2 rounded transition-all"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
