import Section from "./Section";

export default function WhyChoose() {
  const reasons = [
    "Built specifically for small coaching institutes",
    "Works perfectly for offline classes",
    "Ready for hybrid expansion",
    "No technical complexity",
    "Affordable and scalable",
    "Teacher-friendly, owner-focused",
  ];

  return (
    <Section id="why-choose" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Institutes Choose This Platform
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start"
            >
              <span className="text-blue-600 mr-4 text-2xl font-bold">
                {index + 1}
              </span>
              <p className="text-gray-800 text-lg">{reason}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <p className="text-xl font-semibold mb-4">
            This is not a large LMS made for big brands.
          </p>
          <p className="text-lg">
            It is a practical academic system for real classrooms.
          </p>
        </div>
      </div>
    </Section>
  );
}

