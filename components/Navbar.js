import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActiveLink from "./ActiveLink";


export default function Navbar() {

    const buttonOnclick = (event)=>{
        event.preventDefault();
        const button = document.querySelector('.mobile-menu');
        button.classList.toggle('hidden');
    }

    return (
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                  <div className="flex space-x-7">
  
                    <div>
                      <a href="#" className="flex items-center py-4 px-2">
                        <Image
                          src={"/assets/img/logo_navbar.jpg"}
                          alt="Pilary Logo"
                          width={140}
                          height={50}
                        >
                        </Image>
                      </a>
                    </div>
  
                    <div className="hidden md:flex items-center space-x-7">
                      <ActiveLink href="/" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Beranda</a>
                      </ActiveLink>
                      <ActiveLink href="#" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Produk</a>
                      </ActiveLink>
                      <ActiveLink href="#" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Portofolio</a>
                      </ActiveLink>
                      <ActiveLink href="#" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Galeri</a>
                      </ActiveLink>
                      <ActiveLink href="#" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Blog</a>
                      </ActiveLink>
                      <ActiveLink href="#" activeClassname="border-b-4 border-blue-500">
                        <a className="py-4 px-2 text-black-500 font-semibold hover:text-blue-500 transition duration-300">Kontak</a>
                      </ActiveLink>
                    </div>
                  
                  </div>
  
                  <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={buttonOnclick}>
                      <FontAwesomeIcon icon="bars" />
                    </button>
                  </div>
  
              </div>
          </div>
  
          <div className="hidden mobile-menu">
            <ul className="">
              <li className="active">
                <Link href="#">
                  <a className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold ">Beranda</a>
                </Link>            
              </li>
              <li>
                <Link href="#">
                  <a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Product</a>
                </Link>   
              </li>
              <li>
                <Link href="#">
                  <a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Portofolio</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Galeri</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Kontak</a>
                </Link>
              </li>
            </ul>
          </div>
  
        </nav>
  
    )
}
