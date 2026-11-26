import React, { useState } from "react";
import { Send, CheckCircle2, ArrowLeft, MessageSquare, AlertCircle, Loader2 } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

const TARGET_EMAIL = "arwebsupport@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

const SUBJECT_LABELS: Record<string, string> = {
  "stream-report": "Report a video stream issue",
  "broadcast-info": "Broadcast schedule & channel inquiry",
  partnership: "Partnership / Media inquiry",
  other: "Other subject"
};

export default function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "stream-report",
    message: "",
    honeypot: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const subjectLabel = SUBJECT_LABELS[formData.subject] || formData.subject;

  const buildMailtoHref = () => {
    const mailSubject = encodeURIComponent(`[Cycling Live Stream] ${subjectLabel} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${subjectLabel}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${TARGET_EMAIL}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    if (formData.honeypot) {
      return;
    }

    setIsSending(true);
    setErrorMessage(null);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          subject: subjectLabel,
          _subject: `[Cycling Live Stream] ${subjectLabel} - ${formData.name.trim()}`,
          _template: "table",
          _captcha: "false",
          message: formData.message.trim()
        })
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false || result?.success === "false") {
        throw new Error(
          result?.message || "Unable to send your message automatically right now."
        );
      }

      setSubmitted(true);
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : "Network error while sending your message. Please try again or email us directly.";
      setErrorMessage(message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-8 flex flex-col gap-6 shadow-xl">
      <button
        onClick={onBack}
        className="self-start flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold font-mono uppercase group transition-all cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to live stream
      </button>

      <div className="border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-red-600/10 border border-red-600/30 text-red-400 text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-full">
            SUPPORT &amp; CONTACT
          </span>
        </div>
        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">
          Contact the Cycling Live Stream Team
        </h1>
        <p className="text-neutral-400 text-xs md:text-sm mt-1">
          Have a question about our broadcasts, a broken stream link to report, or a media partnership inquiry? Get in touch.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-950/60 border border-emerald-800 p-6 rounded-lg text-emerald-200 flex flex-col items-center text-center gap-3">
          <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          <h2 className="font-display font-bold text-lg text-white uppercase">Message Sent Successfully!</h2>
          <p className="text-xs max-w-md text-emerald-300">
            Thank you, {formData.name}. Your message regarding &quot;{subjectLabel}&quot; has been delivered to our team at {TARGET_EMAIL}. We will reply to {formData.email} as soon as possible.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setErrorMessage(null);
              setFormData({ name: "", email: "", subject: "stream-report", message: "", honeypot: "" });
            }}
            className="mt-2 bg-emerald-800 hover:bg-emerald-700 text-white font-mono text-xs px-4 py-2 rounded cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={handleSubmit} className="lg:col-span-2 flex flex-col gap-4">
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Name / Handle *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600"
              >
                <option value="stream-report">Report a video stream issue</option>
                <option value="broadcast-info">Broadcast schedule &amp; channel inquiry</option>
                <option value="partnership">Partnership / Media inquiry</option>
                <option value="other">Other subject</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Your Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your inquiry in detail..."
                className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-600"
              ></textarea>
            </div>

            {errorMessage && (
              <div className="bg-red-950/60 border border-red-800 rounded p-3 text-xs text-red-200 flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
                <a
                  href={buildMailtoHref()}
                  className="self-start text-red-300 underline hover:text-white font-mono text-[11px]"
                >
                  Open in your email app ({TARGET_EMAIL})
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="self-start inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold uppercase text-xs px-6 py-2.5 rounded transition-all shadow-md cursor-pointer"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800 flex flex-col gap-4 text-xs text-neutral-400">
            <h3 className="font-display font-bold text-sm text-white uppercase flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-red-500" />
              Direct Contact Details
            </h3>
            <div className="flex flex-col gap-2 font-mono">
              <span className="text-neutral-300 font-bold">Direct Email:</span>
              <a href={`mailto:${TARGET_EMAIL}`} className="text-red-500 hover:underline break-all">
                {TARGET_EMAIL}
              </a>
            </div>

            <div className="border-t border-neutral-800 pt-3 flex items-start gap-2 text-[11px] leading-relaxed text-neutral-500">
              <AlertCircle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
              <span>
                For any copyright notice or external link removal request, please include exact details and URLs in your message.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
