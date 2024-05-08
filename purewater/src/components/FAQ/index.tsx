
const FAQ = () => {

    return (
        <div id="faq" className="p-8">
            <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
            <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
            <p className="text-center text-gray-600 text-xl mt-2">Anda Bertanya Kami Menjawab</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Apa manfaat yang saya peroleh ketika menggunakan produk filterdari Pure Water?</h4>
                        <p className="text-gray-600 my-2">Anda mendapatkan filter produk berkualitas dengan standar nasional. Anda mendapatkan layanan Voluntary Inspection (Pemeriksaan GRATIS selama 2 kali dalam setengah tahun penggunaan produk filter dari Pure Water).</p>
                    </div>
                </div>
                
                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Bagaimana cara pemasangan produk filternya?</h4>
                        <p className="text-gray-600 my-2">Untuk pemasangan bisa dilakukan sendiri oleh konsumen. Pada saat packing barang kami akan mengirimkan manual book serta link video pemasangan dari youtube yang mudah dipraktekkan oleh konsumen.</p>
                    </div>
                </div>

                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Bagaimana cara pembayaran dalam pembelian produk-produk dari Pure Water?</h4>
                        <p className="text-gray-600 my-2">Konsumen dapat melakukan pembayaran melalui Tranfer Bank, Cicilan pada Marketplace serta pembayaran di tempat atau COD (Cash on Delivery).</p>
                    </div>
                </div>

                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Apakah air hasil filter dari produk Pure Water bisa diminum?</h4>
                        <p className="text-gray-600 my-2">Pada tipe filter / saringan tertentu tentu saja ada yang bisa diminum, dimana hasil akhirnya telah memenuhi kelayakan Standar Air Minum.</p>
                    </div>
                </div>

                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Permasalahan air apa saja yang bisa diatasi dengan filter dari Pure Water?</h4>
                        <p className="text-gray-600 my-2">Permasalahan air yang mengandung kandungan zat besi, mangan dan kapur.</p>
                    </div>
                </div>

                <div className="flex space-x-8 mt-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-gray-700">Apakah ada biaya pengiriman produknya?</h4>
                        <p className="text-gray-600 my-2">Setiap pembelian produk akan dikenakan biaya pengiriman yang ditanggung oleh konsumen. Namun, biaya pengiriman bisa menjadi gratis tergantung promo voucher yang digunakan oleh konsumen pada akun Marketplacenya masing-masing.</p>
                    </div>
                </div>
            
            </div>
            </div>
        </div>
    );
}

export default FAQ;

