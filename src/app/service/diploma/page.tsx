'use client';

import { Award, BookOpen, Users, CheckCircle, Globe, Clock } from 'lucide-react';

export default function DiplomaService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Diploma Programs
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              UGC-recognized diploma courses with flexible learning options for working professionals
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Explore Diplomas
            </button>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Available Diploma Programs</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive diploma courses across multiple disciplines with complete online coursework support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Traditional Courses</h3>
              <p className="text-slate-600 mb-4">Back-to-basics education following long-established academic principles</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Classical curriculum</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Proven methodologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Yoga & Health Sciences</h3>
              <p className="text-slate-600 mb-4">Comprehensive yoga and naturopathy programs with practical examinations</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>One-year full-time program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Practical examination mandatory</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Globe className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Computer Science</h3>
              <p className="text-slate-600 mb-4">Core computer science fundamentals with modern programming approaches</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Theory of Computation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Web Applications & Databases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Award className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Engineering Courses</h3>
              <p className="text-slate-600 mb-4">Compelling engineering programs with lucrative career opportunities</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Multiple specializations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Esteemed university partnerships</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Journalism & Mass Comm</h3>
              <p className="text-slate-600 mb-4">Media and communication programs for aspiring media professionals</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Media industry insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Practical training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Globe className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Health & Environment</h3>
              <p className="text-slate-600 mb-4">Environmental health and public health protection programs</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Environmental public health</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Public health protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Our Diploma Programs?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Learning</h3>
                <p className="text-slate-600">Study at your own pace with online coursework designed for working professionals</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">UGC Recognition</h3>
                <p className="text-slate-600">All programs are recognized by UGC and delivered by renowned universities</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-slate-600">Dedicated counseling and support throughout your educational journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
