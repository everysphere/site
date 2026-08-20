import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { VideoBackground } from "@/components/VideoBackground";

export default function App() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background">
      <VideoBackground />
      <Navigation />
      <Hero />
    </main>
  );
}
