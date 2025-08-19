'use client';

import { motion } from 'framer-motion';
import { Award, Star, Globe, Users, CheckCircle } from 'lucide-react';

const benefits = [
  "Global career recognition from renowned institutions",
  "No thesis or coursework – awarded for real-life impact",
  "Enhances credibility, status & professional influence",
  "Invitations to special events, conferences & panels",
  "Expands your global network of peers & thought leaders",
  "Motivates you to continue making an impact"
];

const eligibility = [
  "Proven record of outstanding achievement in a field or community",
  "Notable contribution to society, business, science, culture, education, or service",
  "Demonstrated leadership, innovation, or inspiration",
  "Must NOT be an existing employee or current student of the awarding institution"
];

const faqs = [
  {
    q: "What is an Honorary Doctorate?",
    a: "An honorary doctorate is a prestigious award granted by a university or educational body to individuals who have made significant contributions to their field or to society, without the requirement of thesis or traditional study."
  },
  {
    q: "Who can receive an Honorary Doctorate?",
    a: "Leaders, professionals, philanthropists, artists, and innovators who have a record of substantial achievement and impact."
  },
  {
    q: "Do I need to pay tuition or attend classes?",
    a: "No. Honorary Doctorates are conferred as recognition and do not involve conventional academic coursework."
  },
  {
    q: "Is the Honorary Doctorate globally recognized?",
    a: "Yes, we facilitate honorary degrees from accredited and reputed global universities."
  }
];

const timeline = [
  "Nomination & Application",
  "Review & Due Diligence",
  "Approval by Academic Panel",
  "Official Communication & Invitations",
  "Conferral Ceremony (in-person or virtual)",
];

const features = [
  { icon: <Award className="w-8 h-8 text-cyan-400" />, title: "Prestige", desc: "A lifelong milestone, recognized globally." },
  { icon: <Users className="w-8 h-8 text-cyan-400" />, title: "Global Network", desc: "Join other changemakers, visionaries, and leaders." },
  { icon: <Star className="w-8 h-8 text-cyan-400" />, title: "No Research Required", desc: "Recognizes impact, not academic submissions." },
  { icon: <Globe className="w-8 h-8 text-cyan-400" />, title: "International Reach", desc: "Partnered with top universities worldwide." }
];

export default function HonoraryDoctorateService() {
  return (
    <div className="bg-slate-50 text-slate-800" style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          >
            Honorary Doctorate – An Award of a Lifetime
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-10 text-cyan-100"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block font-semibold uppercase text-cyan-300 mb-2">Hold Your Head Up a Little Higher</span>
            Honorary Doctorate serves as a remarkable form of recognition for individuals who have made outstanding contributions to society. It is a prestigious award depicting the achievements and impact of the awardee—boosting reputation, credibility, and inspiring excellence.
          </motion.p>
          <a 
            href="#apply"
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 mb-0"
          >
            Apply for Nomination
          </a>
        </div>
      </section>

      {/* Benefits / Why it Matters */}
      <section className="py-16 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-7"
              initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Receive an <span className="text-cyan-400">Honorary Doctorate?</span></h2>
              <ul className="space-y-3">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                    <span className="text-base text-slate-700 font-light">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cyan-400"
              initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What Makes You Eligible?</h3>
              <ul className="space-y-3 mb-4">
                {eligibility.map((e, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1" />
                    <span className="text-slate-700 text-sm font-light">{e}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-xs">
                *Eligibility subject to university panel assessment and nomination review
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-slate-100 rounded-xl p-6 text-center shadow-sm border-t-4 border-cyan-400">
                <div className="flex justify-center mb-3">{f.icon}</div>
                <div className="text-lg font-bold text-slate-800 mb-1">{f.title}</div>
                <div className="text-sm text-slate-700 font-light">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Process */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">How Does it Work?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {timeline.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-12 h-12 text-xl font-semibold flex items-center justify-center rounded-full border-[3px] ${i === timeline.length-1 ? 'border-cyan-400' : 'border-slate-300'} mb-2 bg-white shadow`}>
                  {i + 1}
                </div>
                <div className="text-slate-700 text-sm font-medium">{step}</div>
                {i < timeline.length - 1 && (
                  <span className="w-3 h-8 border-l-2 border-dashed border-cyan-300 block mt-2"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-slate-50">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="text-2xl font-bold mb-7 text-slate-900 text-center">Frequently Asked Questions</h3>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow border border-slate-100">
                <div className="font-semibold text-cyan-600 mb-1">{f.q}</div>
                <div className="text-slate-700 text-sm">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application / CTA */}
      <section id="apply" className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready To Be Recognized?
          </h3>
          <p className="text-lg mb-8 text-cyan-100">
            Nominate yourself or someone else for an Honorary Doctorate. Our team will guide you through every step.
          </p>
          <form className="space-y-4 bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 mx-auto max-w-xl">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-lg border-0 text-slate-800 w-full focus:ring-2 focus:ring-cyan-400" required placeholder="Full Name" />
              <input className="px-4 py-3 rounded-lg border-0 text-slate-800 w-full focus:ring-2 focus:ring-cyan-400" required placeholder="Email" type="email" />
            </div>
            <input className="px-4 py-3 rounded-lg border-0 text-slate-800 w-full focus:ring-2 focus:ring-cyan-400" required placeholder="Phone Number" type="tel" />
            <textarea className="px-4 py-3 rounded-lg border-0 text-slate-800 w-full focus:ring-2 focus:ring-cyan-400 resize-none" rows={4} placeholder="Tell us why you/they deserve this recognition..." required />
            <button type="submit" className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 w-full">
              Submit Nomination
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
