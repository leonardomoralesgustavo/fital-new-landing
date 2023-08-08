import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HomePageContent } from '@/components/sections'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <HomePageContent/>
  )
}
