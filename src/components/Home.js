import React, { useEffect, useState } from "react";
// import Header from "../components/homepage/Header/Header";
import Opener from "../components/homepage/Opener/Opener";
import GetStarted from "../components/homepage/GetStarted/GetStarted";
import Footer from "../components/homepage/Footer/Footer"
import "./Home.css";
import Importance from "../components/homepage/Importance/Importance";
import Mission from "../components/homepage/Mission/Mission";
import Team from "../components/homepage/Team/Team";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Opener />
        </div>
      ) : (
        <main id="home">
          {/* <Header /> */}
          <GetStarted />
          <Importance />
          <Mission />
          <Team />
          <Footer />
        </main>
      )}
    </>
  );
}
