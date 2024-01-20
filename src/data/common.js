import logo from '/assets/common/company-logo.jpg'
import logo2 from '/assets/common/company-logo-2.jpg'

export const companyName = 'Shukan'
export const since = '1960'
export const companyLogo = logo
export const fadeRevealTime = 0.4

export const pages = [{
    path: '/',
    title: 'Home'
}, 
{
    path: '/about',
    title: 'About'
}, 
{
    path: '/collection',
    title: 'Collection'
},
{
    path: '/contact',
    title: 'Contact'
}];

export const connect =  [
    // {
    //     platform: 'facebook',
    //     link: 'https://www.google.com'
    // },
    {
        platform: 'whatsapp',
        link: 'https://wa.me/919662788188'
    },
    {
        platform: 'instagram',
        link: 'https://www.instagram.com/sarvesh_shukan_bathware?igsh=MWllb3JjYzlzaG5oNQ==',
    },
    // {
    //     platform: 'linkedin',
    //     link: 'https://www.google.com',
    // },
    {
        platform: 'mail',
        link: 'sarvesh.kundariya@shukanbathware.com',
    },

]

//#region Footer
export const footerCompany = {
    logo: logo2,
    about: "Hello from 'Shukan'! We're all about crafting exceptional bathware ceramics. Specializing in manufacturing, supplying, and exporting, we're eager to explore business opportunities in India. Your assistance would mean the world to us. Let's embark on this exciting journey together!",
    connect: [
        {
            platform: 'facebook',
            link: 'https://www.facebook.com/'
        },
        {
            platform: 'whatsapp',
            link: 'https://wa.me/919662788188'
        },
        {
            platform: 'instagram',
            link: 'https://www.instagram.com/sarvesh_shukan_bathware?igsh=MWllb3JjYzlzaG5oNQ==',
        },
        {
            platform: 'linkedin',
            link: 'https://www.linkedin.com/',
        }
    ]
}

export const footerExplore = [...pages]

export const footerNewsLetter = {
    description: 'Sign up for our latest news & articles. We won’t give you spam mails.'
}

export const footerContact = {
    address: {
        text: 'SHUKAN BATHWARE, Khokhara Hanuman Road, Opp. Monolith Surface LLP., Morbi 363 642,Gujarat (India)',
        link: ''
    },
    mobile1: {
        text: '+91 9662788188',
        link: '+91 9662788188'
    },
    mobile2: {
        text: '+91 9537255155',
        link: '+91 9537255155'
    },
    email1: {
        text: 'info@shukanbathware.com',
        link: 'info@shukanbathware.com'
    },
    email2: {
        text: 'sarvesh.kundariya@-shukanbathware.com',
        link: 'sarvesh.kundariya@shukanbathware.com'
    }
}

export const footerCopyright = {
    copyrightText: 'Copyright © 2023 by Shukan. All Rights Reserved.'
}
//#endregion

//#region Search
export const search = {
    notFoundMsg: 'No Product Found!'
}
//#endregion