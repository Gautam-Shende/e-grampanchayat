import React, { useContext } from 'react'
import AppRoutes from './routes/AppRoutes'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { AppContext } from './contexts/AppContext'

const App = () => {
  const { theme } = useContext(AppContext)

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className="bg-white  text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 p-3">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
