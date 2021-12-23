import Image from "next/image";

export default function ListProduk(){

    return (

        <section>

            <div className="bg-gradient-to-l sm:h-56 mb-8 bg-blue-500 md:bg-gradient-to-r lg:h-56">
                <br/><br/>
               <h1 className="text-white text-center text-4xl">
                   Produk
               </h1>
               <p className="italic text-white text-center mt-5">
                    " Pilary Menyediakan Berbagai Produk Berupa Sistem Aplikasi dalam 
               </p>
               <p className="italic text-white text-center">
                    bentuk web, mobile, maupun desktop yang bisa 
                    digunakan di berbagai sektor dan instansi.
               </p>
               <p className="italic text-white text-center">
                    dengan fungsionalitas aplikasi yang sangat mendukung 
                    di berbagai macam sektor, misalnya pendidikan, pemerintahan, dll."
               </p>
            </div>

            <div className="text-center container px-12 py-3">


                <div className="p-10 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <Image
                            src={"/assets/product/ptsp.png"}
                            width="250"
                            height="250"
                            className="w-full"
                        />                   
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mountain</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <Image
                            src={"/assets/product/ptsp.png"}
                            width="250"
                            height="250"
                            className="w-full"
                        />                   
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mountain</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <Image
                            src={"/assets/product/ptsp.png"}
                            width="250"
                            height="250"
                            className="w-full"
                        />                   
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mountain</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <div className="rounded overflow-hidden shadow-lg">
                        <Image
                            src={"/assets/product/ptsp.png"}
                            width="250"
                            height="250"
                            className="w-full"
                        />                   
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Mountain</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    );  

}