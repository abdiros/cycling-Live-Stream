import React from "react";
import { Shield, ArrowLeft, Lock } from "lucide-react";

interface PrivacyPageProps {
  onBack: () => void;
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
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
            DATA PROTECTION
          </span>
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
          Privacy Policy (GDPR)
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm mt-1">
          Our commitment to protecting your personal data and respecting your privacy on cyclinglivestream.com.
        </p>
      </div>

      <div className="space-y-6 text-neutral-300 text-xs md:text-sm leading-relaxed">
        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <Lock className="h-4 w-4 text-red-500" />
            1. Personal Data Collection
          </h2>
          <p>
            Cycling Live Stream (cyclinglivestream.com) respects user privacy. We do not collect any personally identifiable information without your explicit consent. No account registration is required to access the live video player.
          </p>
        </section>

        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <Shield className="h-4 w-4 text-red-500" />
            2. Use of Cookies
          </h2>
          <p>
            This website uses strictly necessary cookies for core interface functionality (display preferences) as well as anonymous audience analytics cookies.
          </p>
        </section>

        <section className="bg-neutral-950 p-5 rounded border border-neutral-800 space-y-2">
          <h2 className="font-display font-bold text-white uppercase text-sm flex items-center gap-2">
            <Lock className="h-4 w-4 text-red-500" />
            3. Your Rights (GDPR)
          </h2>
          <p>
            In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, and erase any personal data concerning you by contacting{" "}
            <a href="mailto:arwebsupport@gmail.com" className="text-red-500 hover:underline">
              contact@cyclinglivestream.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
