import Section from "./Section";

export default function ParentCommunication() {
  const benefits = [
    "Attendance summaries",
    "Test score updates",
    "Progress trends",
    "Teacher comments",
  ];

  return (
    <Section id="parent-communication">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Parent Communication Without Stress
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Parents want clarity, not daily phone calls.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            The platform provides:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Shared through controlled, periodic updates, keeping parents informed
            and confident.
          </p>
        </div>
      </div>
    </Section>
  );
}

