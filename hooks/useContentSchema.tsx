import React, {useState} from 'react';
import {SiOctopusdeploy, SiGoogleoptimize, SiAndroidstudio, SiMaterialdesignicons} from "react-icons/si";
import {BiAnalyse, BiCartAlt} from "react-icons/bi";
import {CgPerformance, CgWebsite} from "react-icons/cg";
import {DiResponsive} from "react-icons/di"
import {MdDesignServices, MdOutlineDeveloperMode, MdOutlinePhoneInTalk, MdEmail} from "react-icons/md";
import {IoLogoWhatsapp} from "react-icons/io"

export default function UseContentSchema() {
    const [iconClasses, setIconClasses] = useState('text-8xl text-orange-500');
    const [headerInfo, setHeaderInfo] = useState({
        phone: {content: '+977-9851040576', icon: <IoLogoWhatsapp className={`text-4xl text-orange-500`}/>},
        email: {content: 'techbizznepal@gmail.com', icon: <MdEmail className={`text-4xl text-orange-500`}/>}
    });
    const [logo, setLogo] = useState({title: 'Tech Bizz', imagePath: '/logo.png'});
    const [navigationItems, setNavigationItems] = useState([
        {
            title: 'Menu',
            slug: 'menu',
            divStyle: 'p-2 sm:text-sm md:text-md xl:text-xl text-md cursor-pointer'
        },
        {
            title: 'Order Now',
            slug: 'order-now',
            divStyle: 'bg-orange-500 p-2 sm:text-sm md:text-md xl:text-xl text-mdge-500 text-xl text-white rounded-lg cursor-pointer'
        },
        {
            title: 'Catering',
            slug: 'catering',
            divStyle: 'p-2 sm:text-sm md:text-md xl:text-xl text-md cursor-pointer'
        },
        {
            title: 'Events',
            slug: 'events',
            divStyle: 'p-2 sm:text-sm md:text-md xl:text-xl text-md cursor-pointer'
        },
        {
            title: 'About',
            slug: 'about',
            divStyle: 'p-2 sm:text-sm md:text-md xl:text-xl text-md cursor-pointer'
        },
        {
            title: 'Sign In',
            slug: 'sign-in',
            divStyle: 'p-2 sm:text-sm md:text-md xl:text-xl text-md cursor-pointer'
        }
    ]);
    const [workProcessComponent, setWorkProcessComponent] = useState({
        heading: 'our work process',
        processes: [
            {
                slug: 'analysis',
                title: 'Analysis',
                image: 'https://via.placeholder.com/150.png',
                icon: <BiAnalyse className={iconClasses}></BiAnalyse>
            },
            {
                slug: 'designing',
                title: 'Designing',
                image: 'https://via.placeholder.com/150.png',
                icon: <MdDesignServices className={iconClasses}/>
            },
            {
                slug: 'development',
                title: 'Development',
                image: 'https://via.placeholder.com/150.png',
                icon: <MdOutlineDeveloperMode className={iconClasses}></MdOutlineDeveloperMode>
            },
            {
                slug: 'testing',
                title: 'Testing',
                image: 'https://via.placeholder.com/150.png',
                icon: <CgPerformance className={iconClasses}></CgPerformance>
            },
            {
                slug: 'launch',
                title: 'Launch',
                image: 'https://via.placeholder.com/150.png',
                icon: <SiOctopusdeploy className={iconClasses}></SiOctopusdeploy>
            }
        ]
    });
    const [whyChooseUs, setWhyChooseUs] = useState({
        heading: 'why choose us',
        content: 'Tech Bizz offers professional Website design and development, Mobile Application, SEO and Marketing of your product.\n' +
            '\n' +
            'We strive to offer the best solution for your business and impartial advice at an honest price. We are constantly investigating new latest technologies and recommend them when they make sense.\n' +
            '\n' +
            'We provide solutions and guarantee our work. You can be rest assured that you won’t have any unpleasant surprises. We are always ready to help.'
    });
    const [whatWeDo, setWhatWeDo] = useState({
        heading: "what we do",
        items: [
            {
                icon: <CgWebsite className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Web Development',
                slug: 'web-development',
                description: 'Tech Bizz delivers end to end business solutions that leverage the deep industry and functional expertise.',
            }, {
                icon: <BiCartAlt className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'E-commerce Solution',
                slug: 'e-commerce-solution',
                description: 'Tech Bizz provides innovative multi channel e-commerce solutions for retailers of both mid cap and large cap.'
            },
            {
                icon: <SiAndroidstudio className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Android Development',
                slug: 'android-development',
                description: 'We build android application solutions improving your business effectiveness and efficiency.'
            },
            {
                icon: <SiMaterialdesignicons className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Web Designing',
                slug: 'web-designing',
                description: 'Tech Bizz is a web & software development company that provides effective solutions in web designing.'
            },
            {
                icon: <DiResponsive className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'Responsive Web Design',
                slug: 'responsive-web-design',
                description: 'Tech Bizz Software provides comprehensive services for mobile responsive website development for all main platforms.'
            },
            {
                icon: <SiGoogleoptimize className={iconClasses}/>,
                image: 'https://via.placeholder.com/150.png',
                title: 'SEO',
                slug: 'seo',
                description: 'At Tech Bizz, a team of search engine optimization specialists work with you for long term positioning to get impactful results.'
            },
        ]
    });
    const [clients, setClients] = useState([{}, {}, {}, {}, {}, {}, {}, {},]);


    return {
        navigationItems,
        logo,
        workProcessComponent,
        whyChooseUs,
        whatWeDo,
        clients,
        headerInfo
    };
}


