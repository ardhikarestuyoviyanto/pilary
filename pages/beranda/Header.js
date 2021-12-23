import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Headers(){

    return (
        <section className="relative">
            <div className="container mx-auto px-6 py-3 lg:px-20">
                <div className="flex" style={{height:"34rem"}}>
                    <div className="lg:w-1/2 lg:mt-24">
                        <h2 className="text-gray-800 font-bold text-5xl leading-tight mb-4" style={{fontFamily:"Roboto"}}>
                            Pilar Teknologi
                        </h2>
                        <p className="text-gray-700 lg:text-xl sm:text-base">
                            PT Pilar Teknologi, perusahaan yang selalu menerapkan prinsip kustomisasi (customization) demi mencapai kesuksesan setiap proyek. Kami telah mengelola ratusan proyek dari berbagai instansi pemerintah, perusahaan, kampus/ sekolah, NGO/ yayasan.
                            Kini saatnya Bisnis anda Go Online! Segera Upgrade Bisnis Anda dengan Website Profesional dengan pelayanan terlengkap, tidak perlu repot seting dan design karena kami menyiapkan semuanya. Terima beres!
                            <br/>
                            <a href="https://api.whatsapp.com/send?phone=081326810290" type="button" target="_blank" className="bg-blue-600 mt-5 p-3 text-white rounded-md transition duration-500 ease-in-out hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110">
                                <FontAwesomeIcon icon="phone-alt" className="mr-2"/>
                                Hubungi Saya
                            </a>

                        </p>
                    </div>
                    <div className="lg:w-1/2 sm:invisible lg:visible">
                        <div className="mt-12">
                            <div className="relative" style={{zIndex:"-2", animation:"up-down 2s ease-in-out infinite alternate-reverse both"}}>
                                <Image
                                    src={"/assets/img/banner.png"}
                                    alt="Pilary Logo"
                                    width={900}
                                    height={700}
                                />
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    )

}