import { service_solar, service_cctv, service_electrical, service_inspection, service_consultancy, service_batteries } from "../assets/images";
  
export const servicecolumndata = [
    {
        imageSource: service_solar,
        // subHeading: 'SOLAR',
        heading: 'Solar Installation',
        // number: '01',
        text: 'Customized solar energy solutions to lower electricity costs and promote eco-friendly energy usage.',
        link: '/services/service_detail/solar_installation',
        linkId: 'solar_installation',
    },
    {
        imageSource: service_cctv,
        // subHeading: 'SECURITY',
        heading: 'CCTV Installation',
        // number: '02',
        text: 'Reliable surveillance systems providing 24/7 security and peace of mind for homes and businesses.',
        link: '/services/service_detail/cctv_installation',
        linkId: 'cctv_installation',
    },
    {
        imageSource: service_electrical,
        // subHeading: 'ELECTRICAL',
        heading: 'Satellite Cable Installation',
        // number: '03',
        text: 'Professional satellite cable installation services, ensuring reliable and high-quality connections for your entertainment and communication needs.',
        link: '/services/service_detail/electrical_wiring',
        linkId: 'electrical_wiring',
    },
    {
        imageSource: service_inspection,
        subHeading: 'MEASURES',
        heading: 'Inspection and Repair',
        number: '04',
        text: 'TriniTwin ensures your systems are optimized with expert inspections and reliable repairs.',
        link: '/services/service_detail/inspection_and_repair',
        linkId: 'inspection_and_repair',
    },
    {
        imageSource: service_consultancy,
        subHeading: 'CONSULTANCY',
        heading: 'Technology Consultancy',
        number: '05',
        text: 'We offer Tailored solutions to meet your unique home and business technology needs.',
        link: '/services/service_detail/technology_consultancy',
        linkId: 'technology_consultancy',
    },
    {
        imageSource: service_batteries,
        subHeading: 'Solar Batteries',
        heading: 'Research Solar Batteries',
        number: '06',
        text: 'TriniTwin provides insights into cutting-edge solar batteries for efficient energy storage.',
        link: '/services/service_detail/solar_batteries',
        linkId: 'solar_batteries',
    },
];

