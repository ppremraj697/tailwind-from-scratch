import FeatureTabs from "./components/FeatureTabs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SectionalHeading from "./components/SectionalHeading";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <SectionalHeading
        heading="Features"
        description="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go."
      />
      <FeatureTabs />
    </main>
  );
}

export default App;
