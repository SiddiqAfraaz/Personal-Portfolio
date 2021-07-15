import Head from 'next/head'
import Hero from '../Components/Hero/Hero'
import Works from '../Components/Works/Works'
import Skills from '../Components/Skills/Skills'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import { Container } from '../styles/GlobalComponents'

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddiq Afraaz | Personal Portfolio</title>
      </Head>

      <Container>
        <Hero />
        <Works />
        <Skills />
        <About />
        <Footer />
      </Container>
    </>
  )
}
