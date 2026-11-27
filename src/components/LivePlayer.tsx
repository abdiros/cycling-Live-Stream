import React, { useState, useEffect } from "react";
import {
  Lock,
  Unlock,
  Play,
  ShieldCheck,
  Radio,
  Clock,
  ExternalLink
} from "lucide-react";

declare global {
  interface Window {
    og_load?: () => void;
    call_locker?: () => void;
  }
}

const STREAM_EMBED_URL = "https://freetv.studio/embed/Eurosport2.fr";
const OGADS_LOCKER_URL = "https://apptrck.org/cl/i/rn4m3d";
const PREVIEW_SECONDS = 15;
const STORAGE_KEY = "cycling_live_unlocked";

export default function LivePlayer() {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    if (params.get("unlocked") === "1") {
      sessionStorage.setItem(STORAGE_KEY, "true");
      return true;
    }
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  const [previewStarted, setPreviewStarted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(PREVIEW_SECONDS);
  const [previewEnded, setPreviewEnded] = useState(false);

  useEffect(() => {
    if (!previewStarted || isUnlocked || previewEnded) {
      return;
    }

    if (secondsLeft <= 0) {
      setPreviewEnded(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [previewStarted, secondsLeft, isUnlocked, previewEnded]);

  const handleUnlockClick = () => {
    if (typeof window.og_load === "function") {
      window.og_load();
      return;
    }

    if (typeof window.call_locker === "function") {
      window.call_locker();
      return;
    }

    window.location.href = OGADS_LOCKER_URL;
  };

  const shouldRenderIframe = isUnlocked || (previewStarted && !previewEnded);

  return (
    <div
      className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden shadow-2xl"
      id="video-stream-player"
    >
      {/* Top Stream Status Header */}
      <div className="bg-neutral-950 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800">
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
          </div>
          <span className="font-display font-bold tracking-wider text-[11px] sm:text-xs text-white uppercase leading-tight">
            LIVE VIDEO — CYCLING LIVE STREAM
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {previewStarted && !isUnlocked && !previewEnded && (
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-amber-300 bg-amber-950/60 border border-amber-700/50 px-2 sm:px-2.5 py-0.5 rounded font-mono whitespace-nowrap">
              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              <span>FREE PREVIEW: {secondsLeft}s</span>
            </div>
          )}

          <div
            className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] px-2 py-0.5 rounded font-mono border whitespace-nowrap ${
              isUnlocked || (previewStarted && !previewEnded)
                ? "text-emerald-400 bg-emerald-950/60 border-emerald-800/40"
                : "text-red-400 bg-red-950/60 border-red-800/40"
            }`}
          >
            {isUnlocked || (previewStarted && !previewEnded) ? (
              <>
                <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span>STREAM ONLINE</span>
              </>
            ) : (
              <>
                <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span>VERIFICATION REQUIRED</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Video Screen Area */}
      {shouldRenderIframe ? (
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          <iframe
            src={STREAM_EMBED_URL}
            title="Cycling Live Stream — Eurosport 2"
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="relative w-full min-h-[260px] sm:aspect-video bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex flex-col items-center justify-center px-4 py-7 sm:p-6 text-center gap-3 sm:gap-4">
          {!previewStarted ? (
            <>
              <div className="p-3 sm:p-4 rounded-full bg-red-600/15 border border-red-600/40 text-red-500">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-current" />
              </div>
              <div className="w-full max-w-md flex flex-col gap-1.5">
                <h2 className="font-display font-bold text-base sm:text-xl md:text-2xl text-white uppercase tracking-tight leading-snug">
                  Cycling Live Stream HD Ready
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Watch live road cycling coverage in high definition. Start your{" "}
                  {PREVIEW_SECONDS}-second free preview now, then complete quick verification to
                  keep watching live.
                </p>
              </div>
              <button
                onClick={() => {
                  setPreviewStarted(true);
                  setSecondsLeft(PREVIEW_SECONDS);
                }}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase text-xs tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 rounded shadow-lg transition-all cursor-pointer"
              >
                <Play className="h-4 w-4 fill-current shrink-0" />
                <span>Watch Live Stream</span>
              </button>
            </>
          ) : (
            <>
              <div className="p-3 sm:p-4 rounded-full bg-red-600/15 border border-red-600/40 text-red-500">
                <Lock className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="w-full max-w-md flex flex-col gap-1.5">
                <h2 className="font-display font-bold text-base sm:text-xl md:text-2xl text-white uppercase tracking-tight leading-snug">
                  Unlock Full HD Live Stream
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Your free preview has ended. Complete a quick human verification step to
                  continue watching uninterrupted live cycling in HD.
                </p>
              </div>
              <button
                onClick={handleUnlockClick}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase text-xs tracking-wider px-5 py-2.5 sm:px-6 sm:py-3 rounded shadow-lg transition-all cursor-pointer"
              >
                <Unlock className="h-4 w-4 shrink-0" />
                <span>Unlock Live Stream Now</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Server & Stream Info Bar */}
      <div className="bg-neutral-950 px-3 sm:px-4 py-3.5 sm:p-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse shrink-0" />
            <span>Primary Broadcast Source (Live)</span>
          </h4>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Click here to{" "}
            <a
              href="https://firstcycling.blogspot.com/"
              rel="nofollow"
              target="_blank"
              className="text-red-500 font-bold hover:underline inline-flex items-center gap-1 break-words"
            >
              <span>WATCH OTHER LIVE STREAM SOURCES</span>
              <ExternalLink className="h-3 w-3 shrink-0" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
