import { Carousel, AboutUs, WhyUs, FAQ, Product, Testimonial } from '@/components';
import Layout from '@/layout';
import 'flowbite';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <AboutUs />
      <WhyUs />
      <Product />
      <Testimonial />
      <FAQ />
    </Layout>
  );
}
