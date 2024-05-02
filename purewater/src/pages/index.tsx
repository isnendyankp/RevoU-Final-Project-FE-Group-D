import { Navbar,Carousel,FAQ } from '@/components';
import Layout from '@/layout';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <FAQ />
    </Layout>
  );
}
