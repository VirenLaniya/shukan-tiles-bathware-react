import logo from '/assets/common/company-logo.png'

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
    path: '/product',
    title: 'Product'
},
{
    path: '/contact',
    title: 'Contact'
}];

export const connect =  [
    {
        platform: 'facebook',
        link: 'https://www.google.com'
    },
    {
        platform: 'whatsapp',
        link: 'https://www.google.com'
    },
    {
        platform: 'instagram',
        link: 'https://www.google.com',
    },
    {
        platform: 'linkedin',
        link: 'https://www.google.com',
    }
]

//#region Footer
export const footerCompany = {
    logo: logo,
    about: 'We are "Shukan", a company that specialises in the manufacture, supply and export of Tiles and Bathware products. We would like to introduce ourselves to you as we wish to do business in India and require your help in this',
    connect: [
        {
            platform: 'facebook',
            link: 'https://www.google.com'
        },
        {
            platform: 'whatsapp',
            link: 'https://www.google.com'
        },
        {
            platform: 'instagram',
            link: 'https://www.google.com',
        },
        {
            platform: 'linkedin',
            link: 'https://www.google.com',
        }
    ]
}

export const footerExplore = [...pages]

export const footerNewsLetter = {
    description: 'Sign up for our latest news & articles. We won’t give you spam mails.'
}

export const footerContact = {
    address: {
        text: '501, Aaryan Workspaces, ST.Xaviers College Corner, Hotel Klassic Gold Road, Navrangpura, Ahmedabad - 380009.',
        link: ''
    },
    mobile1: {
        text: '+91 123456811',
        link: '+91 123456811'
    },
    mobile2: {
        text: '+91 79 123456811/26402270',
        link: '+91 79 123456811/26402270'
    },
    email1: {
        text: 'marketing1@shukan.com',
        link: 'marketing1@shukan.com'
    },
    email2: {
        text: 'mail@shukan.com',
        link: 'mail@shukan.com'
    }
}

export const footerCopyright = {
    copyrightText: 'Copyright © 2023 by Shukan. All Rights Reserved.'
}
//#endregion