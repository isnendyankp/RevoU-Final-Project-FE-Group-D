import { Carousel, FAQ, Product } from '@/components';
import Layout from '@/layout';
import 'flowbite';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Product name={''} description={''} price={0} imageUrl={''} tokopediaLink={''} />
      <FAQ />
    </Layout>
  );
}
