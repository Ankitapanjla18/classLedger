import Section from "./Section";

export default function WhoIsItFor() {
  const audiences = [
    "Individual teachers running batches",
    "Small coaching institutes (50–500 students)",
    "Offline institutes planning hybrid teaching",
    "Teachers who value control, simplicity, and results",
  ];

  return (
    <Section id="who-is-it-for">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who Is It For?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200 shadow-sm"
            >
              <div className="flex items-start">
                <span className="text-blue-600 mr-4 text-xl font-bold">
                  →
                </span>
                <p className="text-gray-800 text-lg font-medium">{audience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

