import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BooksSection from "@/components/BooksSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <BooksSection />
      <Footer/>
    </Layout>
  );
};

export default Home;
