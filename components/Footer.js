import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){

    return (
        <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
  
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
  
            {/* 1st block */}
            <div className="sm:col-span-12 lg:col-span-3">
              <div className="mb-2">
                {/* Logo */}
                <Link href="#" className="inline-block" aria-label="Cruip">
                    <a>
                    <Image
                        src={"/assets/img/logo_navbar.jpg"}
                        alt="Pilary Logo"
                        width={140}
                        height={50}
                    >
                    </Image>
                    </a>
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                Maksimalkan Potensi Internet Untuk Marketing Perusahaan Anda
                Jika Anda ingin bisa bersaing dengan bisnis-bisnis besar diluar sana, Anda harus memaksimalkan semua sumber daya yang ada. Kami hadir di sini untuk membantu Anda memaksimalkannya!
              </div>
            </div>
  
            {/* 2nd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-800 font-medium mb-2">About Company</h6>
              <ul className="text-sm">
              <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Tentang</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Syarat dan Ketentuan</a></Link>
                </li>   
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Ketentuan Privasi</a></Link>
                </li>                       
              </ul>
            </div>
  
            {/* 3rd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-800 font-medium mb-2">Company</h6>
              <ul className="text-sm">
              <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Beranda</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Services</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Portofolio</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Galeri</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Blog</a></Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                  <Link href="#" className="text-gray-600"><a>Kontak</a></Link>
                </li>
              </ul>
            </div>
  
            {/* 4th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-gray-800 font-medium mb-2">Kontak</h6>
              <ul className="text-sm">
                <li className="mb-2 hover:text-blue-500">
                <FontAwesomeIcon icon="phone-alt" className="mr-2"/>
                  <Link href="#" className="text-gray-600">
                      <a>081326810290</a>
                  </Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                <FontAwesomeIcon icon="paper-plane" className="mr-2"/>
                  <Link href="#" className="text-gray-600">
                      <a>082313104589</a>
                  </Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                <FontAwesomeIcon icon="at" className="mr-2"/>
                  <Link href="#" className="text-gray-600">
                      <a>info@pilary.id</a>
                  </Link>
                </li>
                <li className="mb-2 hover:text-blue-500">
                <FontAwesomeIcon icon="heart" className="mr-2"/>
                  <Link href="#" className="text-gray-600">
                    <a>pilary_official</a>
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* 5th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <h6 className="text-gray-800 font-medium mb-2">Alamat</h6>
              <p className="text-sm text-gray-600 mb-4">
                  Bondalem RT 02/RW 05, Jumantoro, Jumapolo, Karanganyar, Jawa Tengah. Kode Pos 57783
              </p>
              <p className="text-sm text-gray-600 mb-4">
                  Pilary.id <br/>
                  Senin-Jumat : 09.00-17.00 <br/>
                  Sabtu : appointment
              </p>
            </div>          
  
          </div>
  
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
  
            {/* Copyrights note */}
            <div className="text-sm text-gray-600 mr-4">Made by <a className="text-blue-600 hover:underline" href="#">Pilary.id</a>. All rights reserved.</div>
  
          </div>
  
        </div>
      </footer>
    )

}