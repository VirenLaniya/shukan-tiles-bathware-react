import background from '../assets/images/hero/intro.png'

//#region Contact Information Imports
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
//#endregion

export const pageStarter = {
    title: 'Contact',
    background: background
}

export const contactInformation = {
    title: 'Get In Touch',
    information: [
        {
            title: 'Address',
            content: ['501, Aaryan Workspaces, ST.Xaviers College Corner, Hotel Klassic Gold Road, Navrangpura, Ahmedabad - 380009.'],
            type: 'address',
            icon: LocationCityRoundedIcon
        },
        {
            title: "Let's Talk",
            content: ['+91 1234567890', '+91 1237894560', '+91 1597538246'],
            type: 'mobile',
            icon: HeadsetMicRoundedIcon
        },
        {
            title: 'Website',
            content: ['www.google.com', 'www.facebook.com'],
            type: 'website',
            icon: LanguageRoundedIcon
        },
        {
            title: 'Email',
            content: ['virenlaniya.developer@gmail.com', 'virenlaniya.developer@gmail.com'],
            type: 'email',
            icon: EmailRoundedIcon
        }
    ]
}

export const map = {
    title: 'Locate Us'
}

export const contactForm = {
    title: 'Enquiry'
}