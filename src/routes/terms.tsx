import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Service | CareNest" }, { name: "description", content: "The terms that govern your use of CareNest." }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: January 2026" />
      <section className="container-page py-16 max-w-3xl">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <div><h2 className="text-foreground font-bold text-xl">Acceptance of terms</h2><p>By using CareNest, you agree to these terms. If you don't agree, please don't use the platform.</p></div>
          <div><h2 className="text-foreground font-bold text-xl">Eligibility</h2><p>You must be 18 or older to use CareNest. Care workers must complete identity verification and background checks.</p></div>
          <div><h2 className="text-foreground font-bold text-xl">Marketplace role</h2><p>CareNest is a marketplace that connects families and care workers. We are not the employer of care workers and care relationships are between families and the workers they engage.</p></div>
          <div><h2 className="text-foreground font-bold text-xl">Payments</h2><p>Bookings are paid through CareNest. Platform fees apply as set out on the Pricing page.</p></div>
          <div><h2 className="text-foreground font-bold text-xl">Conduct</h2><p>Treat each other with respect. Harassment, discrimination and unsafe behaviour will result in removal from the platform.</p></div>
          <div><h2 className="text-foreground font-bold text-xl">Liability</h2><p>To the extent permitted by law, CareNest is not liable for the actions of users on the platform. We provide insurance and safety measures, but you're responsible for the relationships you build.</p></div>
        </div>
      </section>
    </>
  );
}
