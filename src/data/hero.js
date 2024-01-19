import image1 from '/assets/images/hero/carousel-images/image1.jpg'
import image2 from '/assets/images/hero/carousel-images/image2.jpg'
import image3 from '/assets/images/hero/carousel-images/image3.jpg'

import heroIntroImg from '/assets/images/hero/hero-intro.jpg'
import acknowledgementPeopleMeeting from '/assets/images/hero/acknowledgement-people-meeting.jpg'

import creationImage1 from '/assets/images/hero/carousel-images/image1.jpg';
import creationImage2 from '/assets/images/hero/carousel-images/image2.jpg';
import creationImage3 from '/assets/images/hero/carousel-images/image3.jpg';

//#region Products Imports
import agricultureIcon from '/assets/images/hero/products/agriculture.png'
import biodegradableIcon from '/assets/images/hero/products/biodegradable.png'
import chemicalsIcon from '/assets/images/hero/products/chemicals.png'
import garpheneIcon from '/assets/images/hero/products/garphene.png'
import lozengeIcon from '/assets/images/hero/products/lozenge.png'
import textileIcon from '/assets/images/hero/products/textile.png'
//#endregion

//#region Design Imports
import design1 from '/assets/images/hero/designs/design1.jpg'
import design2 from '/assets/images/hero/designs/design2.jpg'
import design3 from '/assets/images/hero/designs/design3.jpg'
import design4 from '/assets/images/hero/designs/design4.jpg'
//#endregion

//#region What we do Imports
import whatWeDoImg from '/assets/images/hero/what-we-do.jpg'
//#endregion

//#region Hero Landing Carousel(Slider)

export const landingSlider = [{
    title: 'Shukan',
    description: 'Welcome to',
    image: image1,
    buttonText: 'Know About Us',
    buttonLink: '/about'    
}, {
    title: 'Every Space',
    description: 'Elegance for',
    image: image2,
    buttonText: 'Explore Collections',
    buttonLink: '/collection'
}, {
    title: 'Exquisite Designs',
    description: 'Elevate your daily routine with our',
    image: image3,
    buttonText: 'Connect with Us',
    buttonLink: '/contact'
}];

//#endregion

//#region Intro
// export const introduction = {
//     heading: "Anonymous Exports",
//     subHeading: "FOR US SOURCING OF MATERIALS IS A MATTER OF TIME...",
//     description: "The company excels the skill to source out the products from Indian Market for the clients on right time and from right place. The mission of the company is to set a landmark in service industry an upcoming industry with high potential. A strong base in India Manufacturing Sector, Service Sector and Technology Sector is our strength, which is a key factor to bridge the needs of our overseas clients and Indian Market.",
//     introImage: introImg
// }
export const introduction = {
    heading: "We stands for Design, Quality and Culture.",
    subHeading: "Elevate Your Bathing Experience with Shukan: Where Design Brilliance, Uncompromising Quality, and Cultural Sustainability Converge.",
    description: "A fusion of design brilliance, uncompromising quality, and a cultural dedication to elevate the art of bathing. Our ceramic bathware transcends the ordinary, embodying a harmonious blend of exquisite aesthetics, enduring craftsmanship, and a commitment to fostering a culture of sustainability in every detail.",
    introImage: heroIntroImg,
    discoverMorePath: '/about',
    discoverMore: 'Discover More'
}
//#endregion

//#region Discover Creations
export const discoverCreations = {
    title: 'Discover Creations',
    creations: [
        {
            title: 'HDHMR',
            image: creationImage1
        },
        {
            title: 'Slab Vanity',
            image: creationImage2
        },
        {
            title: 'PVC Vanity',
            image: creationImage3
        }
    ]
}
//#endregion

//#region Acknowledgement
export const acknowledgement = {
    backgroundImage: acknowledgementPeopleMeeting,
    text: "Unlocking India's Craftsmanship: We're Your Trusted Export Partner, Bringing You the Best of Incredible Indian Products"
}
//#endregion

//#region Designs
export const designs = [
    design1,
    design2,
    design3,
    design4,
    design1,
    design2,
    design3,
    design4
]
//#endregion

//#region Products

export const productsHeading = "Our Products";

export const  products = [
    {
        title: 'Agriculture Products & Grain',
        link: '',
        icon: agricultureIcon
    },
    {
        title: 'Textile & Fabric',
        link: '',
        icon: textileIcon
    },
    {
        title: 'Garphene',
        link: '',
        icon: garpheneIcon
    },
    {
        title: '100% Biodegradable Plastic Product',
        link: '',
        icon: biodegradableIcon
    },
    {
        title: 'Chemicals',
        link: '',
        icon: chemicalsIcon
    },
    {
        title: 'Lozenges',
        link: '',
        icon: lozengeIcon
    }
]
//#endregion

//#region What we do
export const whatWeDoHeading = "What We Do?"

export const whatWeDoIntro = {
    image: whatWeDoImg,
    description: "CERTAIN COMMONALITIES ARE WHAT MAKE MITTAL EXPORTS THE TOP CHOICE.",
    experienceTitle: 'IMPORT / EXPORTS EXPERIANCE...',
    experienceValue: 100
}

export const whatWeDoPoints = [
    {
        title:  "STRONG MANAGEMENT",
        description: "management is the backbone of any successful company. This is not to say that employees are not also important."
    },
    {
        title:  "ESTABLISHED EXPORT GROUP",
        description: "The MITTAL EXPORTS is an informal group of countries established in 1960 to help member countries to identify those exports."
    },
    {
        title:  "INTERNATIONAL MARKETING",
        description: "management is the backbone of any successful company. This is not to say that employees are not also important."
    }
]
//#endregion

export const statistics = {
    backgroundImage: acknowledgementPeopleMeeting,
    data: [
        {
            statsFor: 'Experience',
            statsValue: 25
        },
        {
            statsFor: 'Countries',
            statsValue: 25
        },
        {
            statsFor: 'Top Corporate Clients',
            statsValue: 55
        }
    ]
}

//#region Why Choose Us

export const whyChooseUs = {
    title: 'Why Choose Us ?',
    description: 'We are in the export business from many years. Our ancestors have imparted business skills in hereditary. We always believe in best possible quality. Customer satisfaction has been our utmost priority.',
    tabs: [
        {
            tabName: 'Our Mission',
            tabContent: 'We believe in quality and we work with only genuine Impoter & exporter.We can match any above Product request, and have it produced to your exact specifications. However, we have access to many other items and products as well.'
        },
        {
            tabName: 'Our Vision',
            tabContent: "To become World's Best Global Platform, Integrating Interests of SMEs, large Corporate, MNCs, Banks, Investors, Policy makers, Youth & Women Entrepreneurs, Students and Start-Ups for better Growth in their Business, Career and other Life areas like Health & Sports."
        },
        {
            tabName: 'Our History',
            tabContent: "Our parent company HMSS established in the year of 1960 in Ahmedabad, Gujarat. It main business is Export Import Consultancy. Provide services to Exporters & Importers and doing all DGFT works. HMSS is the brand name in the industry. Our another company HMSS Logistics handle all logistic and customs parts."
        }
    ],
    points: ['BIGGEST NETWORK FOR EXPORT IMPORT.', 'ONE STOP SOLUTION FOR EVERYTHING.', 'NO.1 AWARD WINNING ORGANIZATION.', 'VERIFIED INTERNATIONAL BUYERS.', 'CUSTOMS HOUSE AGENTS IN ALL MAJOR CITIES.', 'CONNECTED WITH TOP AGENCIES AND GOVT.']
}

//#endregion

//#region Testimonials
export const testimonials = [
    {
        text: "Shukan exceeded my expectations! Their bathware not only adds a touch of elegance to my space but also showcases exceptional craftsmanship. A reliable export partner indeed!",
        author: "Sarah M., Interior Designer"
    },
    {
        text: "Impressed with Shukan's commitment to quality and sustainability. The ceramic products are not just beautiful; they're a statement of cultural brilliance. A proud addition to our collection!",
        author: "Michael L., Retailer"
    },
    {
        text: "The fusion of design and cultural sustainability in Shukan's bathware is unparalleled. A true testament to India's rich craftsmanship. Highly recommended!",
        author: "Elena S., Homeowner"
    },
    {
        text: "As an exporter, Shukan has been our go-to partner for sourcing unique Indian products. The reliability and quality they offer make them stand out in the industry.",
        author: "Alex K., Exporter and Distributor"
    }
]
//#endregion

export const awardRecognition = {
    heading: 'Award Recognition',
    imageArchive: [
        "https://res.cloudinary.com/mister-shadrack/image/upload/v1618444282/samples/landscapes/nature-mountains.jpg",
        "https://res.cloudinary.com/mister-shadrack/image/upload/v1618444278/samples/landscapes/beach-boat.jpg",
        "https://res.cloudinary.com/mister-shadrack/image/upload/v1618444275/samples/landscapes/girl-urban-view.jpg",
        "https://res.cloudinary.com/mister-shadrack/image/upload/v1618444275/samples/landscapes/girl-urban-view.jpg",
        "https://res.cloudinary.com/mister-shadrack/image/upload/v1618444277/samples/animals/three-dogs.jpg"
    ]
}