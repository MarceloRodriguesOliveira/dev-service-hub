import Navbar from "./components/navbar/navbar";
import LandingPageHeader from "./components/header/LandingPageHeader";
import ServiceSection from "./components/servicesection/ServiceSection";
import CallToActionSection from "./components/calltoaction/callToActionSection";
import WorkingProcessSection from "./components/workingprocess/workingProcessSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden ">
      <Navbar />
      <main className="flex flex-col gap-[100px] row-start-2 items-center sm:items-start ">
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-stretch md:text-left px-4 md:px-16 xl:px-24 mt-[100px]">
          <LandingPageHeader />
        </section>
        <section
          className="w-full scroll-mt-[100px] px-4 md:px-16 xl:px-24"
          id="services"
        >
          <ServiceSection />
        </section>
        <section
          className="w-full scroll-mt-[100px] px-4 md:px-16 xl:px-24"
          id="proccess"
        >
          <WorkingProcessSection />
        </section>
        <section className="w-full scroll-mt-[100px] px-4 md:px-16 xl:px-24">
          <CallToActionSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
