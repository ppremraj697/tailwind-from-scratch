import FeatureTabs from "./components/FeatureTabs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SectionalHeading from "./components/SectionalHeading";

function App() {
  return (
    <main className="">
      <Navbar />
      <Home />
      <SectionalHeading
        heading="Features"
        description="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go."
      />
      <FeatureTabs />
      <SectionalHeading
        heading="Download the extension"
        description="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize."
      />
    </main>
  );
}

export default App;
