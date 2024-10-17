import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      

      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-20">
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Manage Your Finances, Anytime, Anywhere
          </h2>
          <p className="text-lg font-light mb-10">
            Simple, secure, and easy-to-use financial tools designed for your modern needs.
          </p>

          <div className="space-x-4">
            {/* Get Started (Sign Up) Button */}
            <SignUpButton>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200">
                Get Started
              </button>
            </SignUpButton>

            {/* Sign In Button */}
            <SignInButton>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Why Choose FintechApp?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.104 0-2 .896-2 2v4c0 1.104.896 2 2 2s2-.896 2-2v-4c0-1.104-.896-2-2-2zm0 0v-3m-6 3h6M6 12h6M18 9v12m0 0h-6m6 0H9"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
              <p className="text-gray-600">
                Your transactions are always safe and secure.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3v12m3 6v-6m3 6v-6m3 6v-6m3 6v-6m3 6v-6m3 6v-6"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Track Expenses</h4>
              <p className="text-gray-600">
                Monitor and control your financial activities with ease.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7-7v14m7-7H5"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Grow Your Wealth</h4>
              <p className="text-gray-600">
                Use our financial tools to plan and grow your investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} FintechApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
