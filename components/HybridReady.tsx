import Section from "./Section";

export default function HybridReady() {
  const features = [
    "Upload recorded lectures for revision",
    "Share notes and assignments digitally",
    "Track lecture watch progress",
    "Link missed classes to revision content",
    "Combine offline test results with online learning data",
  ];

  return (
    <Section id="hybrid">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {"Hybrid When You're Ready"}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If you decide to go hybrid, the platform supports a smooth
            transition—without disrupting your offline workflow.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Hybrid features include:
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 font-bold">→</span>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center bg-white p-6 rounded-lg border-2 border-blue-200">
          <p className="text-lg text-gray-800 font-medium">
            You can stay offline-first, and enable online features only when
            they add value.
          </p>
        </div>
      </div>
    </Section>
  );
}

