import React from "react";
import { Radio, ExternalLink, ShieldCheck } from "lucide-react";

export default function LivePlayer() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl" id="video-stream-player">
      {/* Top Stream Status Header */}
      <div className="bg-neutral-950 px-4 py-3 flex items-center justify-between gap-2 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </div>
          <span className="font-display font-bold tracking-wider text-xs text-white uppercase">
            LIVE VIDEO — CYCLING LIVE STREAM
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded font-mono">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>STREAM ONLINE</span>
        </div>
      </div>

      {/* Main Video Screen Area */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center group overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://freetv.studio/embed/Eurosport2.fr"
            title="Cycling Live Stream — Eurosport 2"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Server & Stream Info Bar */}
      <div className="bg-neutral-950 p-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse" />
            Primary Broadcast Source (Live)
          </h4>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Click here to{" "}
            <a
              href="https://arwebsol.blogspot.com/"
              rel="nofollow"
              target="_blank"
              className="text-red-500 font-bold hover:underline inline-flex items-center gap-0.5"
            >
              WATCH OTHER LIVE STREAM SOURCES <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
