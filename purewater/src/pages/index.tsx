import { Carousel, FAQ } from '@/components';
import 'flowbite';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Carousel />
      <FAQ />
    </div>
  );
}
