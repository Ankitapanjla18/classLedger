import Section from "./Section";

export default function TeacherFirst() {
  const features = [
    "Fast attendance marking",
    "Quick test entry (manual or Excel)",
    "Simple student remarks",
    "Automatic identification of weak students",
    "Clear class-level insights",
  ];

  return (
    <Section id="teacher-first" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Teacher-First by Design
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In small institutes, the teacher is everything.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {"That's why the system is built to reduce teacher workload, not increase it."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
            >
              <p className="text-gray-800 font-medium">{feature}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <p className="text-xl font-semibold">
            Everything is designed to take seconds, not minutes.
          </p>
        </div>
      </div>
    </Section>
  );
}

