import CardContainer from "./components/CardContainer";
import FAQContainer from "./components/FAQContainer";
import FeatureTabs from "./components/FeatureTabs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SectionalHeading from "./components/SectionalHeading";

function App() {
  return (
    <main className="overflow-x-hidden">
      <div className="lg:px-10">
        <Navbar />
        <Home />
        <SectionalHeading
          heading="Features"
          description="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go."
          id="features"
        />
        <FeatureTabs />
        <SectionalHeading
          heading="Download the extension"
          description="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
          id="downloads"
        />
        <CardContainer />
        <SectionalHeading
          heading="Frequently Asked Questions"
          description="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
          id="faq"
        />
        <FAQContainer />
      </div>
      <Footer />
    </main>
  );
}

export default App;
