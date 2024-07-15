import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <ClerkProvider>
      <html lang={locale ?? 'en'} className="h-full">
        <body className="h-full">
          <div className="flex flex-col h-screen">
            <main className="flex-1 flex items-stretch p-4 overflow-hidden">
              <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md flex flex-col">
                <SignedOut>
                  <div className="flex-1 flex items-center justify-center p-6">
                    <div className="text-center max-w-md w-full">
                      <h1 className="mb-6 text-2xl font-bold text-gray-800">Welcome</h1>
                      <SignInButton mode="modal">
                        <button className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">
                          Sign In
                        </button>
                      </SignInButton>
                    </div>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex justify-end p-4">
                    <UserButton />
                  </div>
                  <div className="flex-1 overflow-auto p-6">
                    {children}
                  </div>
                </SignedIn>
              </div>
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default LocaleLayout
