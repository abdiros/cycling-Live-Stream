import React, { useState } from "react";
import {
  ArrowLeft,
  Radio,
  Tv,
  Youtube,
  Trophy,
  Globe,
  AlertCircle,
  Play,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldCheck,
  Calendar
} from "lucide-react";

interface CyclingTodayLiveProps {
  onBack: () => void;
  onNavigateGuide?: (slug: string) => void;
}

const STREAM_SOURCES = [
  {
    name: "Cycling Live Stream HD Player",
    coverage: "All Live WorldTour & Pro Races",
    region: "Global",
    access: "Free",
    url: "https://www.cyclinglivestream.com/"
  },
  {
    name: "Eurosport 1 & 2 / Discovery+",
    coverage: "Tour de France, Classics, World Championship",
    region: "Europe / UK",
    access: "Subscription",
    url: "https://www.eurosport.com/cycling/"
  },
  {
    name: "UCI Official YouTube Live",
    coverage: "World Championships, World Cups, Highlights",
    region: "Global",
    access: "Free",
    url: "https://www.youtube.com/@UCI"
  },
  {
    name: "France.tv Sport",
    coverage: "Tour de France, Paris-Roubaix, Paris-Nice",
    region: "France",
    access: "Free",
    url: "https://www.france.tv/sport/cyclisme/"
  },
  {
    name: "RTBF Auvio / Sporza",
    coverage: "Spring Classics, Monuments, World Championship",
    region: "Belgium",
    access: "Free",
    url: "https://www.rtbf.be/auvio/categorie/sport/cyclisme"
  },
  {
    name: "SBS On Demand Cycling",
    coverage: "Tour de France, Giro d'Italia, La Vuelta",
    region: "Australia",
    access: "Free",
    url: "https://www.sbs.com.au/ondemand/sport/cycling"
  },
  {
    name: "FirstCycling Live Sources",
    coverage: "Multi-feed Cycling Streams & Schedules",
    region: "International",
    access: "Free",
    url: "https://firstcycling.blogspot.com/"
  }
];

export const TIZ_CYCLING_FAQS = [
  {
    question: "Is Tiz Cycling down today? How can I watch Tiz Cycling live?",
    answer:
      "When fans search for 'tiz cycling down' during peak race finales, heavy traffic or ISP blocks often interrupt mirror links. You can watch uninterrupted live road cycling immediately on our main HD player at cyclinglivestream.com or via official free-to-air TV broadcasters listed above."
  },
  {
    question: "Where can I watch a Tiz Cycling live stream 2026 in HD?",
    answer:
      "Our cyclinglivestream.com live player streams daily UCI WorldTour stages, Monuments, and Grand Tours in 2026 with responsive mobile and desktop playback, clean controls, and direct backup stream links."
  },
  {
    question: "Is there a Tiz Cycling YouTube or Tiz Cycling live stream YouTube option?",
    answer:
      "Yes. While third-party streams frequently go offline, official channels like the UCI YouTube channel, Eurosport Cycling, and team channels broadcast live UCI World Cup events, race previews, and full stage highlights free on YouTube."
  },
  {
    question: "How can I watch Tiz Cycling Tour de France and Tiz Cycling TV channels?",
    answer:
      "For Tour de France and daily Tiz Cycling TV coverage, Eurosport 1 & 2, France.tv, RTBF Auvio, SBS On Demand, and ITVX provide full-stage live television coverage alongside our direct homepage broadcast player."
  },
  {
    question: "How do I stream the Tiz Cycling World Championship live today?",
    answer:
      "During the UCI Road World Championships (Elite Men, Elite Women, and Time Trials), you can follow live race coverage on cyclinglivestream.com, the official UCI YouTube live stream (in eligible regions), and national public TV broadcasters."
  }
];

const KEYWORD_TAGS = [
  "tiz cycling live",
  "tiz cycling live stream",
  "tiz cycling tv",
  "tiz cycling youtube",
  "tiz cycling live stream youtube",
  "tiz cycling live stream 2026",
  "tiz cycling live today",
  "tiz cycling down",
  "tiz cycling tour de france",
  "tiz cycling world championship"
];

export default function CyclingTodayLive({ onBack, onNavigateGuide }: CyclingTodayLiveProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <article className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-xl">
      {/* Back navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold font-mono uppercase group transition-all cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to live stream
        </button>

        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>2026 LIVE STREAMS ACTIVE</span>
        </div>
      </div>

      {/* Hero Heading */}
      <header className="border-b border-neutral-800 pb-5 flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-red-600/10 border border-red-600/40 text-red-400 text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-full">
            TIZ CYCLING LIVE GUIDE 2026
          </span>
          <span className="text-neutral-500 text-xs">•</span>
          <span className="text-neutral-400 text-xs font-mono">
            TV, YouTube, Tour de France &amp; World Championship
          </span>
        </div>

        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight leading-tight">
          Tiz Cycling Live Stream 2026 — Watch Tiz Cycling TV, YouTube &amp; Live Today
        </h1>

        <p className="text-neutral-300 text-xs md:text-sm leading-relaxed border-l-4 border-red-600 pl-4 bg-neutral-950/50 p-4 rounded-r">
          Searching for <strong>tiz cycling live</strong>, a reliable{" "}
          <strong>tiz cycling live stream 2026</strong>, or instant backup coverage when{" "}
          <strong>tiz cycling down</strong> happens before the final climb?{" "}
          <strong>Cycling Live Stream</strong> (cyclinglivestream.com) connects you directly to
          today&apos;s live road cycling races, <strong>tiz cycling tv</strong> channels, official{" "}
          <strong>tiz cycling youtube</strong> streams, the <strong>Tour de France</strong>, and the{" "}
          <strong>UCI World Championship</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase text-xs tracking-wider px-4 py-2.5 rounded transition-all cursor-pointer"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Watch Cycling Live Today
          </button>

          {onNavigateGuide && (
            <button
              onClick={() => onNavigateGuide("cycling-today-live-stream")}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-display font-bold uppercase text-xs tracking-wider px-4 py-2.5 rounded transition-all cursor-pointer"
            >
              <Calendar className="h-3.5 w-3.5 text-red-500" />
              Cycling Today TV Schedule
            </button>
          )}
        </div>
      </header>

      {/* Tiz Cycling Down Alert Banner */}
      <section className="bg-neutral-950/80 border border-amber-800/40 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <h2 className="font-display font-bold text-sm text-white uppercase tracking-wide">
              Tiz Cycling Down? Instant Working Alternative for Today&apos;s Race
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              During high-traffic race finales, searches for <strong>tiz cycling down</strong>{" "}
              spike as mirror servers overload. Use our direct embedded video player on{" "}
              <strong className="text-neutral-200">cyclinglivestream.com</strong> for fast,
              mobile-friendly <strong>tiz cycling live today</strong> streaming without pop-up ads.
            </p>
          </div>
        </div>
      </section>

      {/* Core SEO Topic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="bg-neutral-950/60 border border-neutral-800 rounded-lg p-5 flex flex-col gap-2.5">
          <h2 className="font-display font-bold text-sm text-white uppercase tracking-wide flex items-center gap-2">
            <Radio className="h-4 w-4 text-red-500" />
            Tiz Cycling Live &amp; Live Stream 2026
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Follow every <strong>tiz cycling live stream 2026</strong> across the UCI WorldTour,
            Spring Classics, and stage races. Whether you watch on smartphone, tablet, or desktop,
            our adaptive HD player delivers continuous <strong>tiz cycling live today</strong>{" "}
            broadcasts from kilometer zero to the finish line.
          </p>
        </section>

        <section className="bg-neutral-950/60 border border-neutral-800 rounded-lg p-5 flex flex-col gap-2.5">
          <h2 className="font-display font-bold text-sm text-white uppercase tracking-wide flex items-center gap-2">
            <Tv className="h-4 w-4 text-red-500" />
            Tiz Cycling TV &amp; Official Live Broadcasts
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Looking for <strong>tiz cycling tv</strong> channels? Watch live coverage via Eurosport 1
            &amp; 2, Discovery+, and official free-to-air national networks including France.tv
            Sport, RTBF Auvio, Sporza, RAI Sport, ITVX, and SBS On Demand with full race
            commentary.
          </p>
        </section>

        <section className="bg-neutral-950/60 border border-neutral-800 rounded-lg p-5 flex flex-col gap-2.5">
          <h2 className="font-display font-bold text-sm text-white uppercase tracking-wide flex items-center gap-2">
            <Youtube className="h-4 w-4 text-red-500" />
            Tiz Cycling YouTube &amp; Live Stream YouTube
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Prefer a <strong>tiz cycling live stream youtube</strong> feed? Many international UCI
            races, Gravel &amp; Cyclo-cross World Cups, team presentations, and extended stage
            highlights stream legally on <strong>tiz cycling youtube</strong> alternatives such as
            the official UCI channel and Eurosport Cycling on YouTube.
          </p>
        </section>

        <section className="bg-neutral-950/60 border border-neutral-800 rounded-lg p-5 flex flex-col gap-2.5">
          <h2 className="font-display font-bold text-sm text-white uppercase tracking-wide flex items-center gap-2">
            <Trophy className="h-4 w-4 text-red-500" />
            Tiz Cycling Tour de France &amp; World Championship
          </h2>
          <p className="text-neutral-400 text-xs leading-relaxed">
            Never miss a mountain stage of <strong>tiz cycling tour de france</strong>, Giro
            d&apos;Italia, La Vuelta, or the <strong>tiz cycling world championship</strong> road
            races and time trials. Bookmark this guide for verified live stream feeds throughout the
            2026 Grand Tour and World Championship calendar.
          </p>
        </section>
      </div>

      {/* Broadcasters & Live Stream Table */}
      <section className="bg-neutral-950/80 rounded-lg border border-neutral-800 p-5">
        <h2 className="font-display font-bold text-base text-white uppercase tracking-wider mb-1 flex items-center gap-2">
          <Globe className="h-4 w-4 text-red-500" />
          Tiz Cycling Live Stream &amp; TV Channel Directory (2026)
        </h2>
        <p className="text-neutral-400 text-xs mb-4 leading-relaxed">
          Verified live video players, official TV broadcasters, and free YouTube cycling streams
          for today&apos;s races.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 uppercase font-mono text-[10px]">
                <th className="py-2.5 px-2">Platform / Channel</th>
                <th className="py-2.5 px-2">Race Coverage</th>
                <th className="py-2.5 px-2">Region</th>
                <th className="py-2.5 px-2">Access</th>
                <th className="py-2.5 px-2 text-right">Watch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              {STREAM_SOURCES.map((source, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/40 text-neutral-300 font-medium">
                  <td className="py-3 px-2 font-semibold text-white">{source.name}</td>
                  <td className="py-3 px-2 text-neutral-400">{source.coverage}</td>
                  <td className="py-3 px-2">{source.region}</td>
                  <td className="py-3 px-2">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                        source.access.toLowerCase().includes("free")
                          ? "bg-green-950 text-green-400"
                          : "bg-amber-950 text-amber-400"
                      }`}
                    >
                      {source.access}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right">
                    {source.url === "https://www.cyclinglivestream.com/" ? (
                      <button
                        onClick={onBack}
                        className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-400 font-bold uppercase transition-all cursor-pointer"
                      >
                        Watch Live
                        <Play className="h-3 w-3 fill-current" />
                      </button>
                    ) : (
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-400 font-bold uppercase transition-all"
                      >
                        Open
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="font-display font-bold text-base text-white uppercase tracking-tight mb-4 flex items-center gap-1.5">
          <Info className="h-5 w-5 text-red-500" />
          Tiz Cycling Live Stream FAQs (2026)
        </h2>

        <div className="space-y-2.5">
          {TIZ_CYCLING_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-800 rounded bg-neutral-950/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-display font-bold uppercase tracking-wide text-white text-xs hover:bg-neutral-800/30 transition-all cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-red-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-red-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="bg-neutral-900/60">
                    <p className="p-4 text-neutral-300 text-xs leading-relaxed font-sans border-t border-neutral-900">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Keyword Tags */}
      <div className="flex flex-wrap gap-1.5 border-t border-neutral-800 pt-4">
        {KEYWORD_TAGS.map((tag) => (
          <span
            key={tag}
            className="bg-neutral-950 text-neutral-400 text-[10px] font-mono px-2.5 py-1 rounded border border-neutral-800"
          >
            #{tag.replace(/\s+/g, "")}
          </span>
        ))}
      </div>
    </article>
  );
}
