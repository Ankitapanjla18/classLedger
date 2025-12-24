export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ClassLedger</h3>
            <p className="text-sm">
              A simple academic system for teacher-led coaching institutes.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#offline-first" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Ready to get started?{" "}
              <a href="#contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Get in touch
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} ClassLedger. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

