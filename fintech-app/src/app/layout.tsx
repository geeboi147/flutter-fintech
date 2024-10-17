import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
            <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">FintechApp</h1>
          <div>
            <SignInButton>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </nav>
            </SignedOut>
            <SignedIn>
              <nav className="w-full bg-white shadow-md">
              <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
              <div>
              <UserButton />
              </div>
              </div>
              </nav>
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}