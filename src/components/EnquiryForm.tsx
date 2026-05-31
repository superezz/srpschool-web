"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Icon from "@/components/Icon";

export default function EnquiryForm() {
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");
  const [grade, setGrade] = useState(siteConfig.enquiry.classes[0]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!parent.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    setError("");

    const text =
      `*New Admission Enquiry — ${siteConfig.name}*\n\n` +
      `Parent name: ${parent}\n` +
      (child.trim() ? `Student name: ${child}\n` : "") +
      `Class seeking: ${grade}\n` +
      `Phone: ${phone}\n` +
      (message.trim() ? `Message: ${message}\n` : "") +
      `\nAdmission year: ${siteConfig.admission.year}`;

    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/20";

  return (
    <section id="enquire" className="section scroll-mt-24 py-20 sm:py-28">
      <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-royal-500/15 blur-3xl" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <span className="kicker">Admissions Open • {siteConfig.admission.year}</span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Book your child&apos;s seat in <span className="text-gradient-gold">2 minutes</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Fill the form and it opens WhatsApp with your details ready to send — our admission
              team replies quickly. No forms to download, no waiting.
            </p>

            <ul className="mt-7 space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-400/15 text-gold-300">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                Instant reply on WhatsApp
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-400/15 text-gold-300">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {siteConfig.admission.offerNote}
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-400/15 text-gold-300">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                Free campus visit on request
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-300">
              <a
                href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 hover:text-gold-300"
              >
                <Icon name="phone" className="h-4 w-4 text-gold-300" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 hover:text-gold-300"
              >
                <Icon name="mail" className="h-4 w-4 text-gold-300" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-ink-950/40 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Parent / Guardian name *
                  </label>
                  <input
                    className={inputBase}
                    value={parent}
                    onChange={(e) => setParent(e.target.value)}
                    placeholder="e.g. Anita Sharma"
                    autoComplete="name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Student name
                  </label>
                  <input
                    className={inputBase}
                    value={child}
                    onChange={(e) => setChild(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Class seeking admission
                  </label>
                  <select
                    className={inputBase}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    {siteConfig.enquiry.classes.map((c) => (
                      <option key={c} value={c} className="bg-ink-900 text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Phone number *
                  </label>
                  <input
                    className={inputBase}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">
                    Message (optional)
                  </label>
                  <textarea
                    className={`${inputBase} min-h-[90px] resize-y`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Any questions about fees, transport, timings…"
                  />
                </div>
              </div>

              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

              <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
                <Icon name="whatsapp" className="h-5 w-5" />
                Send Enquiry on WhatsApp
              </button>
              <p className="mt-3 text-xs text-slate-500">
                Opens WhatsApp with your details pre-filled. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
