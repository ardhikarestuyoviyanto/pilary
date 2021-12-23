import Image from 'next/image';

export default function Client(){

    return (
        <section className="relative bg-white">
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="text-gray-800 font-bold text-4xl leading-tight mb-4">Client Kami</h2>
              <center><div className="divide-y bg-blue-500 h-1 w-48 mb-4"></div></center>
              <p className="text-xl text-gray-600">
                Kepercayaan pelanggan adalah kebanggaan kami. Ratusan pelanggan dari instansi sampai dengan perusahaan telah sukses & mempercayakan pengembangan website bersama kami. Kini saatnya anda menjadi bagian dari kami.
              </p>
            </div>
  
            <div className="max-w-sm md:max-w-2xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
                <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/sulsel.png"}
                        width={90}
                        height={90}
                        title="Provinsi Sulawesi Selatan"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/kemenag.png"}
                        width={90}
                        height={90}
                        title="Kemenag Sulawesi Selatan"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/kemendikbud.jpg"}
                        width={90}
                        height={90}
                        title="Kemendikbud Sulawesi Selatan"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/man-pare-pare.png"}
                        width={90}
                        height={90}
                        title="MAN 1 Pare Pare"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/logo-smkn-gudo.png"}
                        width={90}
                        height={90}
                        title="SMKN 01 Gudo Jombang"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/stie.png"}
                        width={90}
                        height={90}
                        title="Sekolah Tinggi Ilmu Ekonomi Yogyakarta"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/yap.jpg"}
                        width={90}
                        height={90}
                        title="Yayasan YAP"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/baznas.png"}
                        width={90}
                        height={90}
                        title="Baznaz SULSEL"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>  
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/pgri.jpg"}
                        width={90}
                        height={90}
                        title="PGRI Sulsel"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <Image
                        src={"/assets/client/perhutani.jpg"}
                        width={90}
                        height={90}
                        title="Dinas Perhutani"
                        className="opacity-50 hover:opacity-100"
                    />
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )

}