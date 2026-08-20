import { site } from "@/config/site";

export function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full object-cover"
    >
      <source src={site.video.src} type={site.video.type} />
    </video>
  );
}
