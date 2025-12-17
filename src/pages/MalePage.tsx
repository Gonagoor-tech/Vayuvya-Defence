// src/pages/MalePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MalePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-poppins">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">M.A.L.E. UAV — Medium Altitude Long Endurance</h1>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl">
            Overview, specifications, development status, key capabilities and integration details for our M.A.L.E. UAV program.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-3">Program summary</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                The M.A.L.E. UAV program focuses on delivering a long-endurance platform capable of persistent surveillance,
                ISR and payload delivery. We are developing the airframe, avionics, propulsion integration and mission software
                with emphasis on modular payload bays and secure data links.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Key capabilities</h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                <li>Endurance: 24+ hours (typical mission profile)</li>
                <li>Payload: modular ISR / EO/IR / communications packages</li>
                <li>Autonomy: waypoint navigation, RTOS flight stack</li>
                <li>Secure datalink & ground control integration</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Development & collaborations</h3>
              <p className="text-sm text-gray-300">
                Active collaboration with DRDO and industry partners for system validation and flight testing. R&D support from
                Gonagoor Technologies for avionics & autonomy stacks.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/drdo.jpg`}
                alt="M.A.L.E. UAV"
                className="w-full h-56 object-cover rounded-md"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.2")}
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h4 className="font-semibold">Downloadable resources</h4>
              <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                <li><a target="_blank" rel="noreferrer" className="text-blue-300 hover:underline" href="/lovable-uploads/drdo-specs.pdf">DRDO interface notes (PDF)</a></li>
                <li><a target="_blank" rel="noreferrer" className="text-blue-300 hover:underline" href="/lovable-uploads/male-overview.pdf">M.A.L.E. overview</a></li>
              </ul>
            </div>

            <div>
              <Link to="/products" className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm text-white hover:bg-gray-800">
                Back to Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default MalePage;
