import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Client from "./beranda/Client";
import Contact from "./beranda/Contact";
import Header from "./beranda/Header";
import Price from "./beranda/Price";
import Whyme from "./beranda/Whyme";

export default function Home() {

    return(

      <Layout title="Pilary Official">
        <Navbar/>
        <Header/>
        <Whyme/>
        <Price/>
        <Client/>
        <Contact/>
        <Footer/>
      </Layout>

    )

}
