'use client';

import { GraduationCap, BookOpen, Users, Award, CheckCircle, Star, Clock } from 'lucide-react';

export default function UgPgService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              UG & PG Courses
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive undergraduate and postgraduate programs from grade 10th onwards with renowned university partnerships
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* Course Levels */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Complete Education Pathway</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From grade 10th to postgraduate level, we offer diverse courses delivered by renowned universities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Undergraduate Programs (UG)</h3>
              <p className="text-slate-600 mb-6">Foundation level programs designed to build strong academic and professional foundations</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Grade 10th onwards admission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Multiple specialization options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Flexible learning schedules</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Industry-relevant curriculum</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Postgraduate Programs (PG)</h3>
              <p className="text-slate-600 mb-6">Advanced programs for career advancement and specialized knowledge development</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Masters degree programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Research-oriented curriculum</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Working professional friendly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>International recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Programs */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Popular Programs</h2>
            <p className="text-xl text-slate-600">Most sought-after courses by working professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl">
              <Users className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">B.Ed. Courses</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>UGC-Recognized Universities</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>Complete Online Coursework</span>
                </li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition-all duration-300">
                Enroll Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl">
              <Award className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Management Courses</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>Internationally Accredited</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>Flexible Learning Options</span>
                </li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition-all duration-300">
                Enroll Now
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-2xl">
              <GraduationCap className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Engineering Courses</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>Multiple Specializations</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                  <span>Industry Partnerships</span>
                </li>
              </ul>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg transition-all duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose GradifyNow?</h2>
            <p className="text-xl text-slate-600">Over 14 years of excellence in education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Working Professional Focus</h3>
              <p className="text-slate-600">Tailored specifically for busy working professionals with flexible schedules</p>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">University Partnerships</h3>
              <p className="text-slate-600">Collaborations with prestigious universities ensuring quality and credibility</p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">End-to-End Support</h3>
              <p className="text-slate-600">Comprehensive assistance from course selection to study completion</p>
            </div>

            <div className="text-center">
              <BookOpen className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dedicated Support Team</h3>
              <p className="text-slate-600">Experienced team providing personalized counseling throughout your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
