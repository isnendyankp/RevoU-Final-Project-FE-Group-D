import { Carousel,AboutUs,WhyUs, FAQ, Testimonial, Product } from '@/components';
import Layout from '@/layout';
import 'flowbite';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Product />
      <AboutUs />
      <WhyUs />
      <Testimonial />
      <FAQ />
    </Layout>
  );
}
