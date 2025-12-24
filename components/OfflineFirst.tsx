import Section from "./Section";

export default function OfflineFirst() {
  const problems = [
    "Manual attendance registers",
    "Paper-based tests with no analysis",
    "Constant parent follow-ups",
    "No clear tracking of weak students",
  ];

  const solutions = [
    "Simple attendance tracking",
    "Offline test marks → digital analysis",
    "Student-wise performance history",
    "Teacher remarks & follow-ups",
    "Structured parent updates",
  ];

  return (
    <Section id="offline-first" className="bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Designed for Offline First
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Most institutes teach offline, but struggle with:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Common Challenges
            </h3>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">✗</span>
                  <span className="text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              What it does for offline classes:
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center bg-blue-50 p-6 rounded-lg">
          <p className="text-lg text-gray-800 font-medium">
            Our platform converts offline classroom activity into clear academic
            insights, without changing how you teach.
          </p>
          <p className="text-base text-gray-600 mt-4">
            No complex setup. No extra staff required.
          </p>
        </div>
      </div>
    </Section>
  );
}

