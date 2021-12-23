import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import ListProduk from "./ListProduk";

export default function Product(){

    return (
        <Layout title="Produk">
            <Navbar/>
            <ListProduk/>
        </Layout>
    );

}