/**
 * Single place to rebrand the site: name, mark, copy, nav, and the hero video.
 */
export const site = {
  brand: {
    name: "Everysphere",
    /** Rendered as a superscript next to the name. Set to null to hide. */
    mark: "®",
  },
  nav: {
    links: [
      { label: "Home", href: "#", active: true },
      { label: "Studio", href: "#studio", active: false },
      { label: "About", href: "#about", active: false },
      { label: "Journal", href: "#journal", active: false },
      { label: "Reach Us", href: "#reach-us", active: false },
    ],
    cta: "Begin Journey",
  },
  hero: {
    /** `muted` segments render in muted-foreground for contrast. */
    headline: [
      { text: "Where ", muted: false },
      { text: "dreams", muted: true },
      { text: " rise ", muted: false },
      { text: "through the silence.", muted: true },
    ],
    subtext:
      "We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.",
    cta: "Begin Journey",
  },
  video: {
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
    type: "video/mp4",
  },
} as const;
