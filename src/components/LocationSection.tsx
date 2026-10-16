import React from 'react';
import { MapPin, Navigation, Calendar, Clock, ExternalLink, Bus, Car } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsDirectionsUrl =
    'https://www.google.com/maps/search/?api=1&query=MEI+Layout+Ground+Bagalagunte+Bengaluru';

  return (
    <section id="location" className="py-24 bg-[#101A35] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182547] border border-[#D6AD55]/30 text-[#D6AD55] text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Exhibition Venue</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Meet Us at{' '}
            <span className="text-gold-gradient font-normal">MEI Layout Ground.</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto">
            Conveniently situated in the educational hub of Bagalagunte, easily accessible from Hesaraghatta Main Road, Tumkur Road, and Jalahalli.
          </p>
        </div>

        {/* Location & Map Split Card */}
        <div className="bg-[#182547] border border-[#D6AD55]/40 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Venue Info Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-[#182547] to-[#101A35] border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6AD55]/20 text-[#D6AD55] text-xs font-bold uppercase tracking-wider mb-6 border border-[#D6AD55]/30">
                <Navigation className="w-3 h-3" />
                <span>Verified Exhibition Grounds</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                MEI Layout Ground
              </h3>

              <div className="space-y-4 mb-8 text-sm text-slate-300 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D6AD55] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Venue Address</span>
                    <span>MEI Layout Ground, Bagalagunte, Bengaluru North, Karnataka, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#D6AD55] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Event Dates</span>
                    <span>9 and 10 January 2027 (Saturday & Sunday)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D6AD55] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Event Timings</span>
                    <span>11:00 AM – 8:00 PM on both days</span>
                  </div>
                </div>
              </div>

              {/* Transit hints */}
              <div className="p-4 rounded-xl bg-[#101A35] border border-white/5 space-y-2 text-xs text-slate-400 mb-8">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Car className="w-4 h-4 text-[#D6AD55]" />
                  <span>Ample designated parking available on-site for visitors</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Bus className="w-4 h-4 text-[#D6AD55]" />
                  <span>Direct BMTC connectivity from Dasarahalli Metro & 8th Mile</span>
                </div>
              </div>
            </div>

            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#F3DF9A] via-[#D6AD55] to-[#B88E38] text-[#101A35] hover:brightness-105 active:scale-95 shadow-md transition-all"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Interactive Map Embed (Right 7 Cols) */}
          <div className="lg:col-span-7 h-96 sm:h-[480px] lg:h-auto min-h-[380px] relative bg-[#101A35]">
            <iframe
              title="MEI Layout Ground Map Location"
              src="https://maps.google.com/maps?q=MEI+Layout+Ground+Bagalagunte+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#101A35]/95 backdrop-blur-md border border-[#D6AD55]/40 py-2 px-3.5 rounded-lg shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D6AD55] animate-ping" />
              <span className="text-xs font-semibold text-white">
                MEI Layout Ground · Bagalagunte
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
