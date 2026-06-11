import { Toaster } from 'sonner'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MarqueeBand from '@/components/ui/MarqueeBand'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Projects from '@/components/sections/Projects'
import Commitments from '@/components/sections/Commitments'
import Pricing from '@/components/sections/Pricing'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Chatbot from '@/components/ui/Chatbot'

export default function Home() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: '#111115',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#FAFAF8',
          },
        }}
      />
      <Nav />
      <main>
        <Hero />
        <MarqueeBand />
        <Services />
        <Stats />
        <Projects />
        <Commitments />
        <Pricing />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
