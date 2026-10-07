import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/footer';
import Whatour from './components/whatour';
import Newsletter from './components/Newsletter';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <WhyChooseUs /> 
            <Whatour />
            <Newsletter />
            <Footer />
           
        </div>
    );
}