import React, { useState, useEffect } from "react";
import { Navbar, HeroBanner, ServiceDetails, GetInTouch, FooterSection, PageLoader, TestimonialSection, ServiceToggler } from "../../Components";
import { servicedetailsdata } from "../../Constants";
import { CarouselClick, ScrollAnimation } from "../../utils";

const MainServiceDetailPage = () => {
    const [id, setId] = useState('solar_installation');

    const [data, setData] = useState(null);
    
    useEffect(() => {
        setData(servicedetailsdata[id] || null);
    }, [id]);

    if (!data) {
        return (
            <PageLoader>
                <Navbar page="services/service detail" />
                <p>Service not found. Please check the URL or select a valid service.</p>
            </PageLoader>
                
        );
    }

    return (
        <>
            <Navbar page="services/service detail" />
            <HeroBanner bannerInformation={data.hero_banner} />
            <ServiceToggler id={id} setId={setId} /> 
            <ServiceDetails data={data.service_details} />
            <TestimonialSection />
            <section className="getin-touch py-5">
                <div className="container">
                    <GetInTouch isFormComplete={false} />
                </div>
            </section>
            <FooterSection />
            <CarouselClick />
            <ScrollAnimation id={id}/>
        </>
    );
};

export default MainServiceDetailPage;
