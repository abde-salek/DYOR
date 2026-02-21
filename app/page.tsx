import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { services, steps, gallery, testimonials, faqs } from "@/lib/data";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="services"
          kicker="Services"
          title="Everything you need — done properly"
          subtitle="Choose a full-service partnership or plug in the parts you need. Clear deliverables, fast execution."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </Section>

        <Section
          id="process"
          kicker="Process"
          title="A simple workflow that closes faster"
          subtitle="We keep things structured and transparent so you always know what happens next."
          className="bg-slate-50/60 border-y"
        >
          <Process steps={steps} />
        </Section>

        <Section
          id="gallery"
          kicker="Gallery"
          title="Modern visuals that win attention"
          subtitle="Use strong presentation to attract higher-intent leads — photos, angles, and clean positioning."
        >
          <Gallery items={gallery} />
        </Section>

        <Section
          id="reviews"
          kicker="Reviews"
          title="Trusted by buyers, landlords, and investors"
          subtitle="A premium experience with real outcomes."
          className="bg-slate-50/60 border-y"
        >
          <Testimonials items={testimonials} />
        </Section>

        <Section
          id="faq"
          kicker="FAQ"
          title="Questions, answered"
          subtitle="Quick answers to common questions about how we work."
        >
          <FAQ items={faqs} />
        </Section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <CTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
