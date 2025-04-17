import { bannerInformationServicesDetails } from "./bannerinformation";
import { service_solar, service_cctv, service_electrical, service_inspection, service_consultancy, service_batteries } from "../assets/images";

export const servicedetailsdata = {
    
    solar_installation: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_solar,
            title: 'Solar Installation',
            currentLink: 'Solar Installation',
        },

        service_details: {
            title_main: `Harness the Power of `,
            title_primary: 'the Sun',
            title_content: 'At TriniTwin, we specialize in providing tailored solar energy solutions that help you lower electricity costs while promoting a cleaner, greener environment. Whether for your home or business, our expert team ensures that you enjoy reliable, renewable energy designed to meet your unique needs.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'Our Comprehensive Process',
                    highlight_subTitle: 'Our journey begins with a thorough evaluation of your property. We analyze your energy needs, roof structure, and location to ensure the best solar solution.',
                    content: [
                        'Based on the assessment, we create a bespoke solar energy plan that aligns with your energy goals and maximizes efficiency.',
                        'Our skilled technicians use cutting-edge tools and high-quality materials to install your solar system seamlessly and efficiently.',
                        'Before finalizing, we rigorously test the system to guarantee optimal performance and guide you through its operation, ensuring you’re ready to embrace a sustainable future.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Why Choose TriniTwin for Your Solar Needs?',
                    highlight_subTitle: 'Our team brings years of experience in delivering top-notch solar installations.',
                    content: [
                        'Premium Quality: We use only the best components, ensuring durability and reliability.',
                        'Customer-Centric Approach: Your satisfaction is our priority. From consultation to after-sales support, we’re here for you.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Our Solar Solutions',
                    highlight_subTitle: 'We offer a range of solar installation services tailored for:',
                    content: [
                        'Residential Properties: Bring clean energy to your home and lower utility bills.',
                        'Commercial Spaces: Enhance your business’s sustainability and energy independence.',
                        'Industrial Facilities: Power your operations with efficient, large-scale solar systems.',
                        'Our solutions also include battery storage for uninterrupted power and energy management tools to monitor and optimize usage.'
                    ]
                },
                {
                    id: 'collapseExample4',
                    number: '04',
                    highlight_title: 'Benefits of our Solar Energy Solutions',
                    highlight_subTitle: 'First of all, solar increases the value of your property and it provides you with uninterrupted power supply even during grid outages.',
                    content: [
                        'We are one of the most affordable solar energy providers across the country and we do well to find the best solutions that not only fit you, and your budget.',
                        'Here at TriniTwin, we have invested so much into acquiring the best products that have minimal to zero effect on the environment.',
                    ]
                }
            ],
        

        }

    },

    cctv_installation: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_cctv,
            title: 'CCTV Installation',
            currentLink: 'CCTV Installation',
        },

        service_details: {
            title_main: `Stay Secure with `,
            title_primary: 'Reliable CCTV Solutions',
            title_content: 'Protect what matters most with TriniTwin’s state-of-the-art CCTV systems. Whether for your home or business, our installations provide 24/7 surveillance and peace of mind, ensuring that your property is always monitored.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'Enhanced Security Solutions',
                    highlight_subTitle: 'We carefully review your property’s layout and discuss your unique security needs to identify optimal camera placements.',
                    content: [
                        'Our experts design a CCTV system tailored to maximize coverage and integrate effortlessly with your existing setup.',
                        'We ensure professional placement and functionality during the installation process, using the best practices for your peace of mind.',
                        'Once installed, we thoroughly test the system and configure all devices for seamless operation.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Why Choose TriniTwin for CCTV?',
                    highlight_subTitle: 'We Leverage the latest technology, including HD quality, night vision, and motion detection.',
                    content: [
                        'Qualified Experts: Our team delivers impeccable installation and exceptional ongoing support.',
                        'Holistic Service: From initial setup to regular maintenance, we’re dedicated to your security.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Tailored CCTV Solutions',
                    highlight_subTitle: 'We specialize in: Reliable and budget-friendly setups for residential properties and',
                    content: [
                        'Business Surveillance Solutions: Comprehensive systems built for commercial spaces, ',
                        'Industrial Monitoring: Robust and durable systems for large-scale facilities and much more.'
                    ]
                },
                {
                    id: 'collapseExample4',
                    number: '04',
                    highlight_title: 'Advantages of Partnering with Us',
                    highlight_subTitle: 'The provision of state of the art technology you would be able to gain instant access to live video feeds from your devices, anytime, anywhere.',
                    content: [
                        'High-quality footage to aid in resolving security incidents',
                        'Comprehensive protection all around the clock that allows you to focus on what matters most',
                    ]
                }
            ],
        

        }

    },

    electrical_wiring: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_electrical,
            title: 'Electrical Wiring',
            currentLink: 'Electrical Wiring',
        },

        service_details: {
            title_main: `Expert Electrical `,
            title_primary: 'Wiring Services',
            title_content: 'At TriniTwin, we provide professional and reliable electrical wiring solutions tailored to meet the needs of residential, commercial, and industrial properties. Our commitment to safety, efficiency, and quality ensures that every project is handled with the utmost precision and care.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'Our Process',
                    highlight_subTitle: 'We start by evaluating your property and understanding your specific electrical requirements to develop a customized wiring plan.',
                    content: [
                        'Our team designs a detailed wiring layout that ensures optimal performance and adherence to safety standards.',
                        'Using high-quality materials and state-of-the-art techniques, our skilled electricians ensure flawless installation for seamless power distribution.',
                        'We conduct thorough inspections and testing to verify that all wiring systems are functioning safely and efficiently.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Why Choose TriniTwin for Electrical Wiring?',
                    highlight_subTitle: 'Our team is fully licensed and trained to handle all types of wiring projects.',
                    content: [
                        'We use top-quality wires and components to guarantee long-lasting reliability.',
                        'Every project is executed in line with local and international electrical codes.',
                        'We tailor our services to fit your unique property and energy requirements.',
                        'From upgrades to repairs, we’re here to keep your wiring in top condition.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Our Electrical Wiring Solutions',
                    highlight_subTitle: 'Safe and efficient wiring systems for new homes, renovations, or upgrades.',
                    content: [
                        'Scalable and energy-efficient solutions for offices, retail spaces, and more.',
                        'Heavy-duty wiring installations designed to support large-scale operations.'
                    ]
                },
                {
                    id: 'collapseExample4',
                    number: '04',
                    highlight_title: 'Benefits of Professional Electrical Wiring',
                    highlight_subTitle: 'Reduce risks of electrical faults and hazards with expert installations and Optimize power usage with well-planned wiring systems.',
                    content: [
                        'Professional wiring enhances the reliability and appeal of your property.',
                        'Depend on a system designed for long-term performance and safety.',
                    ]
                }
            ],
        

        }

    },

    inspection_and_repair: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_inspection,
            title: 'Inspection and Repair',
            currentLink: 'Inspection and Repair',
        },

        service_details: {
            title_main: `TriniTwin’s Trusted `,
            title_primary: 'Inspection and Repair Services',
            title_content: 'At TriniTwin, we understand the importance of maintaining the safety, efficiency, and longevity of your electrical and solar systems. Our dedicated team provides expert inspection and repair services, ensuring your systems are always in optimal condition.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'What We Provide',
                    highlight_subTitle: 'Our experienced professionals conduct in-depth evaluations of your electrical wiring, solar installations, and related systems. We identify faults, inefficiencies, or potential risks with unmatched precision.',
                    content: [
                        'Using industry-best practices, high-quality tools, and materials, we deliver reliable solutions for any issues uncovered during inspections. Whether it’s faulty wiring or underperforming solar panels, TriniTwin gets the job done.',
                        'Beyond immediate repairs, we offer proactive maintenance plans designed to protect your investment, reduce downtime, and extend the life of your systems.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Why our Inspection and Repair are Vital',
                    highlight_subTitle: 'Our detailed inspections and expert repairs enhance the functionality of your systems, saving energy and reducing costs.',
                    content: [
                        'TriniTwin ensures your property is protected from electrical hazards or system failures.',
                        'Timely repairs minimize the need for expensive replacements down the line.',
                        'Trust in systems that operate smoothly and consistently, powered by TriniTwin’s expertise.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Our Inspection and Repair Process',
                    highlight_subTitle: 'We listen to your concerns and schedule a thorough inspection of your systems, evaluating both functionality and safety.',
                    content: [
                        'Using advanced tools and our team’s expertise, we identify root causes and provide a clear report of the issues.',
                        'Our technicians execute targeted repairs, addressing each problem with solutions tailored to your system’s unique needs.',
                        'We test every component post-repair to guarantee optimal performance and meet TriniTwin’s high-quality standards.'
                    ]
                },
                {
                    id: 'collapseExample4',
                    number: '04',
                    highlight_title: 'Why Partner with TriniTwin?',
                    highlight_subTitle: 'Industry Expertise: Years of experience in electrical and solar systems ensure our services are second to none.',
                    content: [
                        'Reliable Service: We prioritize timely, efficient solutions without compromising quality.',
                        'Tailored Approach: Our solutions are customized to meet the specific needs of your property.',
                        'Commitment to Excellence: At TriniTwin, customer satisfaction is at the heart of everything we do.'
                    ]
                }
            ],
        

        }

    },

    technology_consultancy: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_consultancy,
            title: 'Technology Consultancy',
            currentLink: 'Technology Consultancy',
        },

        service_details: {
            title_main: `TriniTwin Technology Consultancy: `,
            title_primary: 'Innovating Your Future',
            title_content: 'In today’s fast-paced digital world, staying ahead requires tailored technological solutions that align with your unique needs. At TriniTwin, we offer expert technology consultancy services designed to empower homes, businesses, and industries with innovative and practical strategies.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'What We Offer',
                    highlight_subTitle: 'We analyze your goals and challenges to design technology strategies that fit your needs, ensuring efficiency and growth.',
                    content: [
                        'Our seasoned consultants provide reliable advice on system upgrades, integration, and emerging technologies to enhance your operations.',
                        'From concept to execution, we assist in implementing the best solutions to achieve your objectives seamlessly.',
                        'TriniTwin stays ahead of the curve, offering insights into the latest technological advancements that benefit your home or business.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Why Choose Us for Your Technology Consultancy?',
                    highlight_subTitle: 'We deliver strategies uniquely designed for your specific needs.',
                    content: [
                        'Comprehensive Knowledge: Our consultants are skilled in cutting-edge technEnd-to-End Solutions: From planning to execution, we guide you every step of the way.',
                        'End-to-End Solutions: From planning to execution, we guide you every step of the way.',
                        'Customer-Centric Approach: We prioritize your satisfaction by delivering actionable, value-driven insights.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Our Technology Consultancy Covers',
                    highlight_subTitle: 'Modernize your living space with intelligent systems for comfort, security, and energy efficiency.',
                    content: [
                        'Enhance productivity with tailored IT systems, automation, and software solutions.',
                        'Tech for Industries: Implement advanced technologies that improve operations and reduce costs.',
                        'Adopt eco-friendly solutions such as solar energy systems and efficient power storage.'
                    ]
                },
                {
                    id: 'collapseExample4',
                    number: '04',
                    highlight_title: 'Benefits of Partnering with TriniTwin',
                    highlight_subTitle: 'Leverage technology to expand your capabilities and achieve long-term success.',
                    content: [
                        'Cost Efficiency: Optimize processes and reduce unnecessary expenses with expert advice.',
                        'Implement robust systems to safeguard your data and assets.',
                        'Future-Ready Solutions: Stay ahead with innovative technologies designed for scalability and adaptability.'
                    ]
                }
            ],
        

        }

    },

    solar_batteries: {

        hero_banner: {
            ...bannerInformationServicesDetails,
            imageSrc: service_batteries,
            title: 'Solar Batteries',
            currentLink: 'Solar Batteries',
        },

        service_details: {
            title_main: `Reliable `,
            title_primary: 'Solar Batteries by TriniTwin',
            title_content: 'Maximize the efficiency and reliability of your solar energy system with TriniTwin’s high-quality solar batteries. Our range of advanced energy storage solutions is designed to meet the diverse needs of homes, businesses, and industrial facilities.',
            service_highlights: [
                {
                    id: 'collapseExample',
                    number: '01',
                    highlight_title: 'Why Choose TriniTwin for Solar Batteries?',
                    highlight_subTitle: 'We offer durable and efficient batteries from trusted manufacturers, ensuring long-lasting performance.',
                    content: [
                        'Our experts guide you to the ideal battery solution based on your energy needs and budget.',
                        'Store surplus solar energy to power your property during nighttime or outages.',
                        'Reduce your carbon footprint with sustainable and efficient storage options.'
                    ]
                },
                {
                    id: 'collapseExample2',
                    number: '02',
                    highlight_title: 'Benefits of Using Solar Batteries',
                    highlight_subTitle: 'Enjoy consistent power even during grid outages or low sunlight.',
                    content: [
                        'Reduce electricity bills by using stored energy during peak periods.',
                        'Maximize the output of your solar panels with reliable energy storage.',
                        'Contribute to a greener planet by optimizing renewable energy usage.'
                    ]
                },
                {
                    id: 'collapseExample3',
                    number: '03',
                    highlight_title: 'Why TriniTwin Stands Out',
                    highlight_subTitle: 'Expert Support: Our team provides installation, maintenance, and support services for your solar batteries.',
                    content: [
                        'Comprehensive Solutions: We integrate your battery seamlessly into your existing solar setup.',
                        'Customer Satisfaction: We prioritize your needs, offering personalized services and ongoing assistance.'
                    ]
                }
            ],
        

        }

    },
};
