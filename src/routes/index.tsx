import { createFileRoute } from "@tanstack/react-router";
import { AgencyHome } from "@/components/AgencyHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Media Growth & Promotion | Your Brand" },
      { name: "description", content: "Strategic social media promotion and growth solutions for greater reach, audience exposure, engagement and online presence." },
      { property: "og:title", content: "Social Media Growth & Promotion | Your Brand" },
      { property: "og:description", content: "Grow your social media reach, audience exposure and online presence with strategic promotion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgencyHome,
});
