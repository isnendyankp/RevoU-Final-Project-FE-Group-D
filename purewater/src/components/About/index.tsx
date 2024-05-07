const AboutUs = () => {
    return (
      <div id="aboutus" className=" isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-black">Dalam lautan kehidupan, kita adalah tetes-tetes air bersih yang menyegarkan. Bersama, kita mengalir sebagai sungai yang menghidupi dan membersihkan segala yang kita sentuh. Di setiap percakapan, kita menemukan kedalaman dan kejernihan seperti sumber air yang tak pernah surut. Bersama, kita adalah penjaga keberlangsungan, memastikan kejernihan hati dan pikiran dalam setiap langkah kita. Kita adalah pelangi setelah hujan, menyejukkan dan memberi kehidupan, tak pernah kehilangan cahaya dan kehangatan.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">Why Us <span aria-hidden="true">&rarr;</span></a>
              <a href="#">Product <span aria-hidden="true">&rarr;</span></a>
              <a href="#">Testimoni<span aria-hidden="true">&rarr;</span></a>
              <a href="#">FAQ <span aria-hidden="true">&rarr;</span></a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 text-black lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7">Product</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">4</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7">Customers</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">300+</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7">Consumable Water</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Fresh</dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7">Kayak ada manis-manisnya</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">Sweet</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
}

export default AboutUs;