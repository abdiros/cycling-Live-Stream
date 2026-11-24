import React, { useState, useEffect } from "react";
import {
  Search,
  Info,
  Award,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  X,
  Radio,
  Globe,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Datasets
import { SEO_PAGES, SEOPage } from "./data/seoKeywords";

// Components
import LivePlayer from "./components/LivePlayer";
import PSEODirectory from "./components/pSEODirectory";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MentionsLegales from "./components/MentionsLegales";
import PrivacyPage from "./components/PrivacyPage";

type PageType = "home" | "about" | "contact" | "legal-notice" | "privacy" | "seo-page";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedSEOPage, setSelectedSEOPage] = useState<SEOPage | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  // Parse URL search params on load and on popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get("page");

      if (pageParam === "about" || pageParam === "a-propos") {
        setCurrentPage("about");
        setSelectedSEOPage(null);
      } else if (pageParam === "contact") {
        setCurrentPage("contact");
        setSelectedSEOPage(null);
      } else if (pageParam === "legal-notice" || pageParam === "mentions-legales") {
        setCurrentPage("legal-notice");
        setSelectedSEOPage(null);
      } else if (pageParam === "privacy" || pageParam === "confidentialite") {
        setCurrentPage("privacy");
        setSelectedSEOPage(null);
      } else if (pageParam) {
        const legacySlugMap: Record<string, string> = {
          "cyclisme-en-direct-streaming-gratuit": "watch-cycling-live-stream-free"
        };
        const resolvedSlug = legacySlugMap[pageParam] || pageParam;
        const matchingSeo = SEO_PAGES.find((p) => p.slug === resolvedSlug);
        if (matchingSeo) {
          setSelectedSEOPage(matchingSeo);
          setCurrentPage("seo-page");
        } else {
          setCurrentPage("home");
          setSelectedSEOPage(null);
        }
      } else {
        setCurrentPage("home");
        setSelectedSEOPage(null);
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  // Update dynamic document title, description meta, and canonical link
  useEffect(() => {
    let title = "Cycling Live Stream - Watch Free Pro Cycling Races HD | cyclinglivestream.com";
    let description = "Watch free cycling live streams online in HD at cyclinglivestream.com. Live broadcasts, official TV channels, and pro cycling streaming guides.";
    let canonicalUrl = "https://cyclinglivestream.com/";

    if (currentPage === "about") {
      title = "About Us - Cycling Live Stream | cyclinglivestream.com";
      description = "Learn about Cycling Live Stream (cyclinglivestream.com), the independent live broadcast portal for professional road cycling.";
      canonicalUrl = "https://cyclinglivestream.com/?page=about";
    } else if (currentPage === "contact") {
      title = "Contact - Cycling Live Stream | Support & Stream Reports";
      description = "Contact the Cycling Live Stream team at cyclinglivestream.com for inquiries, broken stream reports, or media partnerships.";
      canonicalUrl = "https://cyclinglivestream.com/?page=contact";
    } else if (currentPage === "legal-notice") {
      title = "Legal Notice - Cycling Live Stream | cyclinglivestream.com";
      description = "View the legal notice and terms of use for Cycling Live Stream (cyclinglivestream.com).";
      canonicalUrl = "https://cyclinglivestream.com/?page=legal-notice";
    } else if (currentPage === "privacy") {
      title = "Privacy Policy - Cycling Live Stream | cyclinglivestream.com";
      description = "Privacy policy and GDPR personal data protection disclosures for Cycling Live Stream (cyclinglivestream.com).";
      canonicalUrl = "https://cyclinglivestream.com/?page=privacy";
    } else if (currentPage === "seo-page" && selectedSEOPage) {
      title = selectedSEOPage.title;
      description = selectedSEOPage.metaDescription;
      canonicalUrl = `https://cyclinglivestream.com/?page=${selectedSEOPage.slug}`;
    }

    document.title = title;

    // Update canonical link in DOM
    const canonicalTag = document.getElementById("canonical-link") as HTMLLinkElement | null;
    if (canonicalTag) {
      canonicalTag.href = canonicalUrl;
    }

    // Update meta description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", description);
    }
  }, [currentPage, selectedSEOPage]);

  // Client-side Navigation helper
  const navigateTo = (pageParam: string | null, seoPage: SEOPage | null = null) => {
    const targetUrl = pageParam ? `?page=${pageParam}` : window.location.pathname;
    window.history.pushState({}, "", targetUrl);

    if (!pageParam) {
      setCurrentPage("home");
      setSelectedSEOPage(null);
    } else if (pageParam === "about") {
      setCurrentPage("about");
      setSelectedSEOPage(null);
    } else if (pageParam === "contact") {
      setCurrentPage("contact");
      setSelectedSEOPage(null);
    } else if (pageParam === "legal-notice") {
      setCurrentPage("legal-notice");
      setSelectedSEOPage(null);
    } else if (pageParam === "privacy") {
      setCurrentPage("privacy");
      setSelectedSEOPage(null);
    } else if (seoPage) {
      setSelectedSEOPage(seoPage);
      setCurrentPage("seo-page");
    } else {
      const match = SEO_PAGES.find((p) => p.slug === pageParam);
      if (match) {
        setSelectedSEOPage(match);
        setCurrentPage("seo-page");
      } else {
        setCurrentPage("home");
        setSelectedSEOPage(null);
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">

      {/* Header */}
      <header className="bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo(null);
            }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="bg-red-600 text-white font-display font-extrabold text-2xl px-4 py-2 rounded transform -skew-x-6 shadow-md border-r-4 border-neutral-900 select-none flex flex-col justify-center leading-none group-hover:bg-red-700 transition-all">
              <span className="text-white text-xs tracking-widest block text-left">CYCLING</span>
              <span className="text-neutral-950 text-2xl font-black italic">LIVE STREAM</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl uppercase tracking-wide text-neutral-200 group-hover:text-white">
                CYCLINGLIVESTREAM.COM
              </h1>
              <p className="text-neutral-500 text-xs font-mono">
                Free live cycling video &amp; HD race streaming
              </p>
            </div>
          </a>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search broadcasts, channels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md py-2 pl-9 pr-8 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-sans"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-2.5 text-neutral-500 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-neutral-900 border-t border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 flex overflow-x-auto select-none scrollbar-none">
            {[
              { id: null, label: "HOME", href: "/" },
              { id: null, label: "LIVE STREAM", badge: true, href: "/" },
              { id: "about", label: "ABOUT", href: "?page=about" },
              { id: "contact", label: "CONTACT", href: "?page=contact" },
            ].map((tab, idx) => {
              const isActive = (tab.id === null && currentPage === "home") ||
                               (tab.id === "about" && currentPage === "about") ||
                               (tab.id === "contact" && currentPage === "contact");

              return (
                <a
                  key={idx}
                  href={tab.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(tab.id);
                  }}
                  className={`px-5 py-3.5 text-xs font-display font-bold uppercase tracking-wider border-b-2 transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? "border-red-600 text-white bg-neutral-800/50"
                      : "border-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/30"
                  }`}
                >
                  {tab.label}
                  {tab.badge && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Main Content View */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 flex flex-col gap-6 relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === "about" && (
            <motion.div key="about" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <AboutPage onBack={() => navigateTo(null)} onNavigateContact={() => navigateTo("contact")} />
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ContactPage onBack={() => navigateTo(null)} />
            </motion.div>
          )}

          {currentPage === "legal-notice" && (
            <motion.div key="legal-notice" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <MentionsLegales onBack={() => navigateTo(null)} />
            </motion.div>
          )}

          {currentPage === "privacy" && (
            <motion.div key="privacy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <PrivacyPage onBack={() => navigateTo(null)} />
            </motion.div>
          )}

          {currentPage === "seo-page" && selectedSEOPage && (
            <motion.div
              key={selectedSEOPage.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col gap-6 shadow-xl relative overflow-hidden"
            >
              {/* Back button */}
              <button
                onClick={() => navigateTo(null)}
                className="self-start flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold font-mono uppercase mb-2 group transition-all"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to live player
              </button>

              {/* Tag */}
              <div className="flex items-center gap-2">
                <span className="bg-red-600/10 border border-red-600/40 text-red-400 text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-full">
                  BROADCAST GUIDE
                </span>
                <span className="text-neutral-500 text-xs">•</span>
                <span className="text-neutral-400 text-xs font-mono">{selectedSEOPage.keyword}</span>
              </div>

              {/* Title */}
              <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight leading-none border-b border-neutral-800 pb-4">
                {selectedSEOPage.h1}
              </h1>

              {/* Intro */}
              <div className="text-neutral-300 text-sm leading-relaxed border-l-4 border-red-600 pl-4 bg-neutral-950/40 p-4 rounded-r">
                <p>{selectedSEOPage.introduction}</p>
              </div>

              {/* Broadcasters Table */}
              <div className="bg-neutral-950/80 rounded-lg border border-neutral-800 p-5">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-red-500" />
                  {selectedSEOPage.keySubheading}
                </h3>
                <p className="text-neutral-400 text-xs mb-4 leading-relaxed">
                  {selectedSEOPage.keyDetails}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-800 text-neutral-400 uppercase font-mono text-[10px]">
                        <th className="py-2.5 px-2">Channel / Platform</th>
                        <th className="py-2.5 px-2">Region</th>
                        <th className="py-2.5 px-2">Access</th>
                        <th className="py-2.5 px-2 text-right">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-900">
                      {selectedSEOPage.broadcasters.map((b, idx) => (
                        <tr key={idx} className="hover:bg-neutral-900/40 text-neutral-300 font-medium">
                          <td className="py-3 px-2 font-semibold text-white">{b.name}</td>
                          <td className="py-3 px-2">{b.region}</td>
                          <td className="py-3 px-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold font-mono ${
                              b.fee.toLowerCase().includes("free")
                                ? "bg-green-950 text-green-400"
                                : "bg-amber-950 text-amber-400"
                            }`}>
                              {b.fee}
                            </span>
                          </td>
                          <td className="py-3 px-2 text-right">
                            <a
                              href={b.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-400 font-bold uppercase transition-all"
                            >
                              Open
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQs */}
              <div className="mt-2">
                <h3 className="font-display font-bold text-base text-white uppercase tracking-tight mb-4 flex items-center gap-1.5">
                  <Info className="h-5 w-5 text-red-500" />
                  Frequently Asked Questions (FAQs)
                </h3>

                <div className="space-y-2.5">
                  {selectedSEOPage.faqs.map((faq, idx) => {
                    const isOpen = openFAQIndex === idx;
                    return (
                      <div key={idx} className="border border-neutral-800 rounded bg-neutral-950/40 overflow-hidden">
                        <button
                          onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-display font-bold uppercase tracking-wide text-white text-xs hover:bg-neutral-800/30 transition-all"
                        >
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp className="h-4 w-4 text-red-500" /> : <ChevronDown className="h-4 w-4 text-red-500" />}
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-neutral-900/60"
                            >
                              <p className="p-4 text-neutral-300 text-xs leading-relaxed font-sans border-t border-neutral-900">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2 border-t border-neutral-800 pt-4">
                {selectedSEOPage.tags.map((tag, idx) => (
                  <span key={idx} className="bg-neutral-950 text-neutral-500 text-[10px] font-mono px-2.5 py-1 rounded border border-neutral-800">
                    #{tag.toLowerCase().replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === "home" && (
            <motion.div
              key="main-stream-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              {/* Header Title Banner */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-600/10 border border-red-600/30 rounded-lg text-red-500">
                    <Radio className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-base text-white uppercase tracking-tight">
                      Cycling Live Stream
                    </h2>
                    <p className="text-neutral-400 text-xs">
                      Watch live road cycling broadcasts in high definition on cyclinglivestream.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-3 py-1.5 rounded">
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>LIVE ACTIVE</span>
                </div>
              </div>

              {/* Main Live Player */}
              <LivePlayer />

              {/* Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-red-500" />
                    About the Broadcast
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Access professional road cycling live streams in HD at cyclinglivestream.com. Our platform brings together direct access to international official channels and continuous live video feeds.
                  </p>
                </div>

                <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
                  <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-red-500" />
                    Quality &amp; Accessibility
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    Smooth playback adapted to every screen (mobile, tablet, desktop). Use fullscreen controls and adjust stream resolution for the best viewing experience.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
          <PSEODirectory
            activeSlug={selectedSEOPage?.slug || null}
            searchQuery={searchQuery}
            onSelectSEOPage={(page) => {
              if (page) {
                navigateTo(page.slug, page);
              } else {
                navigateTo(null);
              }
            }}
          />

          <div className="border-t border-neutral-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="font-display font-bold uppercase tracking-wider text-neutral-400 text-xs">
                CYCLING LIVE STREAM — CYCLINGLIVESTREAM.COM
              </span>
              <span>
                Live broadcast and streaming portal for professional road cycling.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 font-mono text-[10px]">
              <a
                href="?page=about"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("about");
                }}
                className="hover:text-white cursor-pointer"
              >
                About
              </a>
              <a
                href="?page=contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("contact");
                }}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </a>
              <a
                href="?page=legal-notice"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("legal-notice");
                }}
                className="hover:text-white cursor-pointer"
              >
                Legal Notice
              </a>
              <a
                href="?page=privacy"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("privacy");
                }}
                className="hover:text-white cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white cursor-pointer text-red-500 font-bold"
              >
                XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
