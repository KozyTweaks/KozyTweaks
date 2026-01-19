import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Cpu, Check, Star } from "lucide-react";

// SEO + OG metadata
export const metadata = {
  title: "KozyTweaks – Boost FPS & Reduce Latency",
  description: "Premium Windows optimization tweaks for higher FPS, lower latency, and smoother gaming.",
  openGraph: {
    title: "KozyTweaks",
    description: "Unlock maximum FPS and ultra-low latency on Windows.",
  },
};

// Features, pricing, testimonials
const features = [
  { icon: Zap, title: "Higher FPS", desc: "Optimized settings to squeeze every frame out of your system." },
  { icon: Shield, title: "Safe & Reversible", desc: "All tweaks are tested, clean, and easily reversible." },
  { icon: Cpu, title: "Low Latency", desc: "Reduce input delay for competitive gaming." },
];

const plans = [
  { name: "Starter", price: "$19", perks: ["Basic FPS Tweaks", "Windows Optimization", "Restore Point"] },
  { name: "Pro", price: "$39", featured: true, perks: ["Advanced FPS Tweaks", "Latency Reduction", "Game Profiles", "Restore Point"] },
  { name: "Ultimate", price: "$59", perks: ["All Pro Features", "Custom Tweaks", "Lifetime Updates", "Priority Support"] },
];

const testimonials = [
  { name: "Alex M.", quote: "Gained ~60 FPS in Valorant. Worth every dollar." },
  { name: "Jordan R.", quote: "PC feels insanely smooth now. No issues at all." },
  { name: "Chris T.", quote: "Latency improvement was noticeable immediately." },
];

// Checkout placeholders (LemonSqueezy example)
const checkoutLinks = {
  Starter: "https://lemonstand.com/buy/starter",
  Pro: "https://lemonstand.com/buy/pro",
  Ultimate: "https://lemonstand.com/buy/ultimate",
};

// Individual legal page components
export function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p>1. <strong>Acceptance of Terms</strong> – By using KozyTweaks, you agree to these terms.</p>
      <p>2. <strong>Use of Product</strong> – KozyTweaks is for personal Windows optimization. Misuse may void support.</p>
      <p>3. <strong>Disclaimer</strong> – We are not responsible for hardware/software issues beyond normal use.</p>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p>1. <strong>Data Collection</strong> – We only collect minimal data necessary for purchases.</p>
      <p>2. <strong>No Sharing</strong> – Your information will never be sold or shared without consent.</p>
      <p>3. <strong>Cookies</strong> – Cookies are used for analytics and checkout functionality.</p>
    </div>
  );
}

export function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p>1. <strong>Eligibility</strong> – Refunds available within 7 days of purchase if not satisfied.</p>
      <p>2. <strong>Process</strong> – Contact support at support@kozytweaks.com with proof of purchase.</p>
      <p>3. <strong>Exclusions</strong> – Misuse, alterations, or system modifications after purchase may void refund.</p>
    </div>
  );
}

export default function Kozytweaks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-6xl font-bold">KozyTweaks</motion.h1>
        <p className="mt-6 text-zinc-300 max-w-2xl mx-auto text-lg">Premium system optimization tweaks for maximum FPS and lowest latency.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="rounded-2xl bg-red-600">Get Tweaks</Button>
          <Button size="lg" variant="outline" className="rounded-2xl border-red-600 text-red-500">Learn More</Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ y: -6 }}>
            <Card className="bg-black/70 border-red-900 rounded-2xl">
              <CardContent className="p-8">
                <f.icon className="w-10 h-10 mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-zinc-300">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} whileHover={{ y: -8 }}>
              <Card className={`bg-black/70 border-red-900 rounded-2xl ${plan.featured ? "ring-2 ring-red-600" : ""}`}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-6 text-zinc-300">
                    {plan.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2"><Check className="w-4 h-4 text-red-500" />{perk}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 rounded-xl" onClick={() => window.open(checkoutLinks[plan.name], '_blank')}>Buy {plan.name}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Legal links */}
      <footer className="border-t border-red-900 py-10 text-center text-zinc-500">
        <a href="/terms" className="mx-2 hover:text-red-500">Terms of Service</a>
        <a href="/privacy" className="mx-2 hover:text-red-500">Privacy Policy</a>
        <a href="/refund" className="mx-2 hover:text-red-500">Refund Policy</a>
        <div className="mt-2">© {new Date().getFullYear()} KozyTweaks</div>
      </footer>
    </div>
  );
}
