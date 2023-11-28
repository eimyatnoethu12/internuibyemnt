import CardUI from '@/components/CardUI'
import Features from '@/components/Features'
import FooterUL from '@/components/FooterUL'
import Hero from '@/components/Hero'
import HomeUI from '@/components/HomeUI'
import Testimonials from '@/components/Testimonials'



export default function Home() {
  return (
    <main className="relative">
     <div className=' absolute z-20'>
      <HomeUI/>
     </div>
     <Hero/>
    <Features/>
    <Testimonials/>
    <CardUI/>
    <FooterUL/>
    </main>
  )
}
