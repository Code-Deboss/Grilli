import { Nav } from "./components"
import { Hero } from "./pages";
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
    <div className=''>
      <Hero />
    </div>
  )
}
