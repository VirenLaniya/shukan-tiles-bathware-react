import background from '/assets/images/contact/contact.jpeg'

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
            content: ['SHUKAN BATHWARE, Khokhara Hanuman Road, Opp. Monolith Surface LLP., Morbi 363 642,Gujarat (India)'],
            type: 'address',
            icon: LocationCityRoundedIcon
        },
        {
            title: "Let's Talk",
            content: ['Care : +91 9662788188', 'Export : +91 9537255155'],
            type: 'mobile',
            icon: HeadsetMicRoundedIcon
        },
        {
            title: 'Website',
            content: ['www.shukanbathware.com', 'www.shukanceramic.com', 'www.tilescape.in'],
            type: 'website',
            icon: LanguageRoundedIcon
        },
        {
            title: 'Email',
            content: ['info@shukanbathware.com', 'sarvesh.kundariya@shukanbathware.com'],
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