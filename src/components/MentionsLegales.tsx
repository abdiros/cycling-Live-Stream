import React from "react";
import { ShieldCheck, ArrowLeft, FileText } from "lucide-react";

interface MentionsLegalesProps {
  onBack: () => void;
}

export default function MentionsLegales({ onBack }: MentionsLegalesProps) {
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
            LEGAL INFORMATION
          </span>
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
          Legal Notice &amp; Terms of Use
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm mt-1">
          Regulatory and legal disclosures for Cycling Live Stream (cyclinglivestream.com).
        </p>
      </div>

      <div className="space-y-6 text-neutral-300 text-xs md:text-sm leading-relaxed">
        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <FileText className="h-4 w-4 text-red-500" />
            1. Website Publisher
          </h2>
          <p>
            This website, accessible at <strong>https://cyclinglivestream.com/</strong>, is independently published and maintained by the <strong>Cycling Live Stream</strong> team.
          </p>
          <p>
            Editorial contact:{" "}
            <a href="mailto:contact@cyclinglivestream.com" className="text-red-500 hover:underline">
              contact@cyclinglivestream.com
            </a>
          </p>
        </section>

        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            2. Hosting
          </h2>
          <p>
            The website is hosted on secure cloud infrastructure with global edge delivery.
          </p>
        </section>

        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <FileText className="h-4 w-4 text-red-500" />
            3. Intellectual Property &amp; External Links
          </h2>
          <p>
            All graphic elements, logos, copy, and general structure displayed on this site are protected under applicable copyright laws.
          </p>
          <p>
            The site embeds players and links pointing to official television networks and third-party streaming platforms. Cycling Live Stream does not host or produce all broadcast feeds directly and operates as an informational directory and viewing guide for cycling fans.
          </p>
        </section>
      </div>
    </div>
  );
}
