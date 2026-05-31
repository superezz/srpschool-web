/**
 * =============================================================================
 *  SINGLE SOURCE OF TRUTH FOR THE WHOLE SITE
 * =============================================================================
 *  Edit ONLY this file to re-brand the template for any school.
 *  Replace placeholder text, numbers, phone/WhatsApp, and image notes.
 *
 *  NOTE: All content below is PLACEHOLDER for the SRPIC School demo.
 *  Verify real figures (results %, fees, year established) before going live.
 * =============================================================================
 */

export const siteConfig = {
  // --- Identity ---------------------------------------------------------------
  shortName: "SRPIC",
  name: "SRPIC School",
  fullName: "SRPIC Public School",
  tagline: "Where Small-Town Roots Meet Big-World Dreams",
  board: "State Board",
  grades: "Nursery to Class 12",
  established: 2009, // placeholder
  // Short address line for header/footer (placeholder)
  location: "Siswa Bazar, Maharajganj, Uttar Pradesh",

  // --- Contact / Lead capture -------------------------------------------------
  // IMPORTANT: WhatsApp number must be in international format, digits only.
  // e.g. India number 9876543210 -> "919876543210"
  whatsapp: "919876543210", // placeholder
  phoneDisplay: "+91 98765 43210", // placeholder
  email: "admissions@srpicschool.com", // placeholder
  addressFull:
    "SRPIC School Campus, Station Road, Siswa Bazar, Maharajganj, Uttar Pradesh 273153", // placeholder
  // Google Maps embed query (place name or lat,lng). Placeholder uses town name.
  mapQuery: "Siswa Bazar, Maharajganj, Uttar Pradesh",

  // --- Social (placeholder links) ---------------------------------------------
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },

  // --- Admission campaign banner ---------------------------------------------
  admission: {
    open: true,
    year: "2026-27",
    headline: "Admissions Open for 2026-27",
    subline: "Limited seats from Nursery to Class 12. Early-bird offer ends soon.",
    offerNote: "Zero registration fee + free uniform set for the first 100 admissions",
  },

  // --- Hero --------------------------------------------------------------------
  hero: {
    kicker: "State Board • Nursery–12 • Co-Educational",
    titleLines: ["Education that", "shapes confident,", "future-ready children."],
    subtitle:
      "A nurturing campus where strong values, modern teaching, and personal attention help every child discover their best self.",
    primaryCta: "Enquire on WhatsApp",
    secondaryCta: "Book a Campus Visit",
  },

  // --- Trust stats (placeholder numbers) -------------------------------------
  stats: [
    { value: "15+", label: "Years of trusted teaching" },
    { value: "1,800+", label: "Happy students" },
    { value: "95%", label: "Board pass rate" },
    { value: "60+", label: "Qualified teachers" },
  ],

  // --- Why choose us ----------------------------------------------------------
  features: [
    {
      icon: "sparkles",
      title: "Concept-First Teaching",
      desc: "Activity-based learning that builds real understanding, not rote memorisation.",
    },
    {
      icon: "shield",
      title: "Safe & Caring Campus",
      desc: "CCTV-monitored premises, trained staff, and a warm, disciplined environment.",
    },
    {
      icon: "users",
      title: "Small Class Sizes",
      desc: "Personal attention so no child is left behind and every talent is noticed.",
    },
    {
      icon: "trophy",
      title: "Beyond Academics",
      desc: "Sports, arts, music, and public-speaking that build confidence for life.",
    },
    {
      icon: "bus",
      title: "Safe Transport",
      desc: "GPS-enabled buses covering nearby villages and town routes.",
    },
    {
      icon: "lab",
      title: "Modern Facilities",
      desc: "Smart classrooms, science & computer labs, and a well-stocked library.",
    },
  ],

  // --- Programs (Nursery to 12) ----------------------------------------------
  programs: [
    {
      name: "Pre-Primary",
      grades: "Nursery – UKG",
      desc: "Play-based foundation focused on curiosity, motor skills, and joyful learning.",
      points: ["Activity & play learning", "Phonics & number sense", "Safe, colourful classrooms"],
    },
    {
      name: "Primary",
      grades: "Class 1 – 5",
      desc: "Strong literacy and numeracy with values, creativity, and good habits.",
      points: ["Reading & writing fluency", "Hands-on science", "Art, music & sports"],
    },
    {
      name: "Middle School",
      grades: "Class 6 – 8",
      desc: "Conceptual depth across subjects with projects, labs, and digital skills.",
      points: ["Smart-class lessons", "Science & computer labs", "Olympiad preparation"],
    },
    {
      name: "Secondary & Sr. Secondary",
      grades: "Class 9 – 12",
      desc: "Focused board preparation with mentoring, tests, and career guidance.",
      points: ["Regular practice tests", "Doubt-clearing & mentoring", "Career counselling"],
    },
  ],

  // --- Results / achievements (placeholder) ----------------------------------
  results: {
    heading: "Results that make parents proud",
    sub: "Consistent board performance and steady growth, year after year.",
    highlights: [
      { value: "95%", label: "Class 12 pass rate (2025)" },
      { value: "92%", label: "Class 10 pass rate (2025)" },
      { value: "40+", label: "Students above 90% (2025)" },
      { value: "12", label: "District-level toppers (last 5 yrs)" },
    ],
  },

  // --- Gallery (placeholder tiles; replace `note` with real photos later) -----
  gallery: [
    { note: "Main campus building", tone: "from-royal-600/40 to-ink-700" },
    { note: "Smart classroom", tone: "from-gold-500/30 to-ink-700" },
    { note: "Annual day celebration", tone: "from-royal-500/30 to-ink-800" },
    { note: "Sports ground", tone: "from-emerald-500/25 to-ink-700" },
    { note: "Science laboratory", tone: "from-cyan-500/25 to-ink-800" },
    { note: "Library", tone: "from-gold-400/25 to-ink-700" },
  ],

  // --- Testimonials (placeholder) --------------------------------------------
  testimonials: [
    {
      quote:
        "The teachers know my daughter personally and guide her like family. Her confidence has grown so much this year.",
      name: "Sunita Devi",
      role: "Parent, Class 4",
    },
    {
      quote:
        "Good discipline, regular tests, and proper guidance for board exams. We are very satisfied with the school.",
      name: "Ramesh Yadav",
      role: "Parent, Class 10",
    },
    {
      quote:
        "Safe transport and caring staff. As a working parent, I never have to worry about my son's day at school.",
      name: "Anjali Gupta",
      role: "Parent, Class 2",
    },
  ],

  // --- Enquiry form options ---------------------------------------------------
  enquiry: {
    classes: [
      "Nursery",
      "LKG",
      "UKG",
      "Class 1",
      "Class 2",
      "Class 3",
      "Class 4",
      "Class 5",
      "Class 6",
      "Class 7",
      "Class 8",
      "Class 9",
      "Class 10",
      "Class 11",
      "Class 12",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
