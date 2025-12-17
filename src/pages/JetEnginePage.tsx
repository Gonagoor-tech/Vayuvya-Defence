// src/pages/JetEnginePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const JetEnginePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-poppins">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold">Indigenously Developed Jet Engine</h1>
          <p className="mt-3 text-sm md:text-base text-gray-300 max-w-3xl">
            Full assembly milestones, specifications, test program status and next steps on propulsion validation and integration.
          </p>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-3">Engine summary</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our micro jet engine is designed for high thrust-to-weight and compact dimensions to suit small tactical aircraft and UAVs.
                The assembly is complete and the test campaign is planned for component level and integrated hot-run trials.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Technical highlights</h3>
              <ul className="list-disc list-inside text-sm text-gray-300">
                <li>Compact centrifugal & axial flow hybrid stages</li>
                <li>Advanced thermal coatings & additive manufactured components</li>
                <li>Optimised fuel & airflow for high efficiency</li>
                <li>Built for easy integration with UAV propulsion mounts</li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-2">Test program & roadmap</h3>
              <p className="text-sm text-gray-300">
                Next steps: ground hot-run testing, vibration & endurance cycles, then integration on a demonstrator airframe for flight trials.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/jet.jpg`}
                alt="Jet Engine"
                className="w-full h-56 object-cover rounded-md"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0.2")}
              />
            </div>

            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-black/70 border border-gray-800 p-6">
              <h4 className="font-semibold">Resources</h4>
              <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                <li><a target="_blank" rel="noreferrer" className="text-blue-300 hover:underline" href="/lovable-uploads/jet-assembly.pdf">Assembly report (PDF)</a></li>
                <li><a target="_blank" rel="noreferrer" className="text-blue-300 hover:underline" href="/lovable-uploads/jet-test-plan.pdf">Test plan</a></li>
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

export default JetEnginePage;
