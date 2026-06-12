import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Packages } from "@/components/sections/Packages";
import { WhyUs } from "@/components/sections/WhyUs";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Liaqat Haseeb Travel & Tours — Premium Umrah Packages from Lahore" },
      { name: "description", content: "Trusted Lahore-based Umrah & Islamic travel house with 15+ years of experience. VIP, family and group Umrah packages with Saudi MoFA licensed service." },
      { property: "og:title", content: "Liaqat Haseeb Travel & Tours — Premium Umrah" },
      { property: "og:description", content: "Crafted Umrah journeys for families and VIP travellers since 2009." },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Trust />
      <Packages />
      <WhyUs />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}
