import Navbar from './components/Homepage/Navbar';
import Hero from './components/Homepage/Hero';
import Services from './components/Homepage/Services';
import WhyChooseUs from './components/Homepage/WhyChooseUs';
import Footer from './components/Homepage/footer';
import Whatour from './components/Homepage/whatour';
import Newsletter from './components/Homepage/Newsletter';


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