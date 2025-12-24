import Section from "./Section";
import Button from "./Button";

export default function ClosingCTA() {
  return (
    <Section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Teach the way you always have.
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10">
          We&apos;ll handle the system behind the scenes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="secondary" href="#contact" className="bg-white text-blue-600 hover:bg-blue-50">
            Get a Demo
          </Button>
          <Button variant="primary" href="#contact" className="bg-blue-800 text-white hover:bg-blue-900 border-2 border-white">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}

