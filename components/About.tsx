import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About the Platform
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Small coaching institutes succeed because of good teachers, personal
          attention, and discipline.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our platform is built to strengthen these fundamentals, not complicate
          them.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          It acts as a quiet digital backbone—handling attendance, test records,
          student progress, and parent communication—so teachers can focus on
          teaching.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you run purely offline classes or plan to gradually move
          towards a hybrid model, the system adapts to your teaching style.
        </p>
      </div>
    </Section>
  );
}

