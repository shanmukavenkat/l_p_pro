import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function LeadershipSection() {
  const testimonials = [
    {
      quote:
         `Lurnexa Publications was founded to create knowledge that empowers and enlightens.
We believe education should inspire curiosity and encourage deep inquiry.
Every publication we produce reflects clarity, credibility, and creativity.
Through collaboration, we aim to nurture research-driven learning for all.
Together, let’s build a future where curiosity leads progress.
      `,
      name: "Narendra Kumar Kurakula",
      designation: "Founder & Chairman — Lurnexa Publications",
      src: "/Founder.jpg",
    },
    {
      quote:
        `At Lurnexa, our vision is to transform knowledge into lasting impact.
We strive to make research and learning more accessible, creative, and meaningful.
Innovation and collaboration guide every step of our journey.
We empower authors, support researchers, and inspire lifelong learners.
Together, we are driving the mission of learning forward`,
      name: "Rushik Burla",
      designation: "Chief Executive Officer — Lurnexa Publications",
      src: "/ceo.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true}  />;
}
