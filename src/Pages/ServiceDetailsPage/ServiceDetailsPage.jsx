import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './ServiceDetailsPage.css';
import { Navbar, HeroBanner, ServiceDetails, GetInTouch, FooterSection, PageLoader, TestimonialSection } from "../../Components";
import { servicedetailsdata } from "../../Constants";
import { CarouselClick, ScrollAnimation } from "../../utils"; // Import ScrollAnimation

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // For redirection if service not found

  useEffect(() => {
    if (servicedetailsdata[id]) {
      setData(servicedetailsdata[id]);
    } else {
      setData(null);
      // Redirect to services page if invalid service ID
      navigate("/services", { replace: true });
    }
  }, [id, navigate]);

  if (!data) {
    // Show loading spinner or message until data is fetched
    return <PageLoader />;
  }

  return (
    <>
      <Navbar page='services/service detail' />
      <HeroBanner bannerInformation={data.hero_banner} />
      <ServiceDetails data={data.service_details} />
      <TestimonialSection />
      
      <section>
        <div className="container my-5">
          <GetInTouch isFormComplete={false} />
        </div>
      </section>
      <FooterSection />
      <ScrollAnimation />
      <CarouselClick />
    </>
  );
};

export default ServiceDetailsPage;
