'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facilityTypes = [
  'Office Building',
  'Warehouse / Distribution',
  'Medical Office',
  'Commercial Property',
  'Retail Space',
  'Other',
];

const serviceInterests = [
  'Office Building Cleaning',
  'Warehouse Facility Cleaning',
  'Day Porter Services',
  'Floor Care & Maintenance',
  'Disinfection Protocols',
  'Full Facility Program',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    facilityType: '',
    squareFootage: '',
    services: [] as string[],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleServiceToggle(service: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission — replace with actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        facilityType: '',
        squareFootage: '',
        services: [],
        message: '',
      });
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-bronze-200 bg-bronze-50/50 p-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-bronze-600">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-navy-950">
              Consultation Request Received
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-500">
              Thank you for reaching out. Our team will review your facility details and
              contact you within one business day to schedule your consultation.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-medium text-bronze-600 transition-colors hover:text-bronze-700"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Contact Information
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700">
                    Full Name <span className="text-bronze-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy-700">
                    Company Name <span className="text-bronze-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                    placeholder="Acme Properties LLC"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700">
                    Email <span className="text-bronze-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                    placeholder="(407) 294-6601"
                  />
                </div>
              </div>
            </div>

            {/* Facility Details */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Facility Details
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="facilityType" className="block text-sm font-medium text-navy-700">
                    Facility Type <span className="text-bronze-500">*</span>
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    required
                    value={formData.facilityType}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                  >
                    <option value="">Select facility type</option>
                    {facilityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="squareFootage" className="block text-sm font-medium text-navy-700">
                    Approximate Square Footage
                  </label>
                  <input
                    type="text"
                    id="squareFootage"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    className="mt-1.5 block w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                    placeholder="e.g. 25,000 sq ft"
                  />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Services of Interest
              </h3>
              <p className="mt-2 text-sm text-navy-400">
                Select all that apply.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {serviceInterests.map((service) => {
                  const isSelected = formData.services.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'border-bronze-400 bg-bronze-50 text-bronze-700'
                          : 'border-navy-200 bg-white text-navy-500 hover:border-navy-300 hover:text-navy-700'
                      }`}
                    >
                      {isSelected && (
                        <svg className="mr-1.5 inline h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      )}
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze-600">
                <span className="h-px w-4 bg-bronze-400/40" />
                Additional Details
              </h3>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-navy-700">
                  Tell us about your facility and current challenges
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1.5 block w-full resize-none rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-950 shadow-sm transition-colors focus:border-bronze-400 focus:outline-none focus:ring-1 focus:ring-bronze-400"
                  placeholder="Describe your facility, current maintenance setup, and any specific challenges or requirements..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-bronze-600 to-bronze-500 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-bronze-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-bronze-600/30 disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Consultation Request'
                )}
              </button>
              <p className="text-xs text-navy-400">
                We respond within one business day.
              </p>
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
