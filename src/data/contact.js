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
            icon: LocationCityRoundedIcon
        },
        {
            title: "Let's Talk",
            content: ['+91 7990314127', '+91 9824012686', '91 79 26466690/26402270'],
            icon: HeadsetMicRoundedIcon
        },
        {
            title: 'Website',
            content: ['www.mittal-exports.com', 'www.hmssgroup.com'],
            icon: LanguageRoundedIcon
        },
        {
            title: 'Email',
            content: ['romesh@hmssgroup.com', 'marketing1@mittal-exports.com'],
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