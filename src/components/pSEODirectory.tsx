import React from "react";
import { Link2, Search, Sparkles } from "lucide-react";
import { SEO_PAGES, SEOPage } from "../data/seoKeywords";

interface PSEODirectoryProps {
  activeSlug: string | null;
  searchQuery?: string;
  onSelectSEOPage: (page: SEOPage | null) => void;
}

export default function PSEODirectory({ activeSlug, searchQuery = "", onSelectSEOPage }: PSEODirectoryProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPages = normalizedQuery
    ? SEO_PAGES.filter(
        (page) =>
          page.keyword.toLowerCase().includes(normalizedQuery) ||
          page.title.toLowerCase().includes(normalizedQuery) ||
          page.metaDescription.toLowerCase().includes(normalizedQuery) ||
          page.tags.some((t) => t.toLowerCase().includes(normalizedQuery)) ||
          page.broadcasters.some((b) => b.name.toLowerCase().includes(normalizedQuery))
      )
    : SEO_PAGES;

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-5" id="seo-pages-directory">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-neutral-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4.5 w-4.5 text-red-500 animate-pulse" />
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider">
            Sitemap Index &amp; Streaming Guides
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
          <Search className="h-3.5 w-3.5 text-red-500" />
          <span>Search-optimized broadcast guides (Long-Tail Keywords)</span>
        </div>
      </div>

      {filteredPages.length === 0 ? (
        <p className="text-xs text-neutral-500 py-4 text-center">
          No streaming guides match &quot;{searchQuery}&quot;.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredPages.map((page) => {
            const isActive = page.slug === activeSlug;
            return (
              <a
                key={page.slug}
                href={`?page=${page.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectSEOPage(isActive ? null : page);
                }}
                className={`flex items-start gap-2.5 p-3 rounded text-left transition-all duration-200 border text-xs leading-relaxed ${
                  isActive
                    ? "bg-red-600/15 border-red-600 text-white font-medium shadow-sm"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white"
                }`}
              >
                <Link2 className={`h-4 w-4 shrink-0 mt-0.5 ${isActive ? "text-red-500" : "text-neutral-500"}`} />
                <div className="flex flex-col gap-1">
                  <span className={`font-semibold ${isActive ? "text-red-500" : "text-white"}`}>
                    {page.keyword}
                  </span>
                  <span className="text-[11px] text-neutral-500 line-clamp-2">
                    {page.title} — {page.metaDescription}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {page.tags.slice(0, 3).map((t, i) => (
                      <span key={i} className="bg-neutral-800 text-[9px] px-1.5 py-0.5 rounded text-neutral-400">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
