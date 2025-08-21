'use client';

import { Book, Users, Award, CheckCircle, FileText, Pen } from 'lucide-react';

export default function BiographyService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Book className="w-16 h-16 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Biography Writing Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Transform your life story into a compelling narrative that inspires and preserves your legacy for generations
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Start Your Biography Journey
            </button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Offer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              GradifyNow personalized biography writing service showcases your story in the most compelling way, 
              crafting powerful narratives that highlight your lifes journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Pen className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Professional Writing</h3>
              <p className="text-slate-600 mb-4">Expert biography writers collaborate with you to understand your unique experiences and craft compelling narratives.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>80 pages (20,000 words)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Detailed life walkthrough with images</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Research & Interviews</h3>
              <p className="text-slate-600 mb-4">Comprehensive research including location visits, neighbor and relative interviews for authentic storytelling.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>In-depth interviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Historical research</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Publishing Support</h3>
              <p className="text-slate-600 mb-4">Complete publication assistance including graphic design and publishing house connections.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Professional graphic design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Publication house connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our 16-Step Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Initial consultation and project planning",
                "Information gathering and research",
                "Synopsis writing with team feedback", 
                "First draft completion with multiple rewrites",
                "Rest period and fresh review process",
                "Final draft with comprehensive editing",
                "Graphics design team assignment",
                "Professional completion and review",
                "Client review and feedback incorporation",
                "Optional publication house connection"
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
