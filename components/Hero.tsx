import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              Built for Classrooms, Not Corporates
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A Simple Academic System for Teacher-Led Coaching Institutes
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Built for offline classes. Ready for hybrid growth.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Run your institute professionally without losing the personal touch
            that makes your teaching effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" href="#contact">
              Request Demo
            </Button>
            <Button variant="secondary" href="#contact">
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

