// import background from '../assets/images/about/shukan-red.jpg'
import background from '/assets/images/about/about-us.jpg'
import aboutIntroImg from '/assets/images/about/about-intro.jpeg'
import madeInIndiaImg from '/assets/images/about/made-in-india.jpg'
import makeInIndiaSymbol from '/assets/images/about/make-in-india.png'
import cmdDirectorPicture from '/assets/images/about/cmd-director-picture.jpg'

//#region Fundamentals Imports
import design from '/assets/images/about/fundamentals/design.png'
import quality from '/assets/images/about/fundamentals/quality.png'
import culture from '/assets/images/about/fundamentals/culture.png'
//#endregion

export const pageStarter = {
    title: 'About',
    background: background
}

export const introduction = {
    heading: "Shukan",
    subHeading: "Crafting Elegance in Every Detail",
    description: "Welcome to Shukan, where timeless elegance meets functional design in the world of ceramic bathware. We take pride in creating exquisite pieces that elevate your bathing spaces to a realm of sophistication and luxury.\n\nShukan, a name synonymous with quality and craftsmanship, is rooted in a legacy of dedication to the art of ceramics. Established with a passion for creating beautiful and enduring bathware, we draw inspiration from both tradition and innovation.",
    introImage: aboutIntroImg
}

export const fundamentals = [
    {
        title: 'Design',
        image: design
    },
    {
        title: 'Quality',
        image: quality
    },
    {
        title: 'Culture',
        image: culture
    }
]

export const missionVision = {
    mission: {
        title: 'Mission',
        description: 'At Shukan, our mission is to redefine the art of bathing through the seamless fusion of timeless elegance, superior craftsmanship, and sustainable practices. We are dedicated to crafting ceramic bathware that transcends trends, embodying authenticity and durability, while minimizing our environmental impact.\n\nOur commitment extends beyond creating functional products; it encompasses transforming daily rituals into extraordinary experiences. By marrying classical aesthetics with contemporary sensibilities, Shukan aims to inspire moments of serenity and luxury in every bathroom, delivering not just bathware but an elevated lifestyle that harmonizes with both individual well-being and the planet we inhabit.'
    },
    vision: {
        title: 'Vision',
        description: 'Shukan envisions a world where every bathroom becomes a sanctuary of tranquility and style. We aspire to be a global leader in ceramic bathware, setting new standards for excellence, innovation, and environmental responsibility. Through our commitment to timeless design, artisanal craftsmanship, and sustainable practices, we aim to inspire a sense of luxury and well-being in the heart of every home.\n\nOur vision is rooted in a belief that the fusion of tradition and modernity, coupled with a dedication to environmental stewardship, can elevate the daily rituals of individuals, making their living spaces more beautiful, functional, and sustainable. Shukan strives to be a beacon of inspiration for those who seek the perfect balance between aesthetics and ethical responsibility in their lifestyle choices.'
    }
}

export const message = {
    title: 'Message from Chairmain',
    image: cmdDirectorPicture,
    managingDirector: 'Sarvesh Kundariya',
    managingDirectorAbout: 'Managing Director',
    quoteMessage: 'We sculpt more than ceramics; we shape moments of luxury, blending timeless design with a commitment to a greener, more indulgent bathing experience.',
    message: "Dear Valued Customers, Partners, and Friends,\n\nIt is with immense pleasure and pride that I extend a warm welcome to you on behalf of Shukan. As the Chairman of this esteemed company, I am honored to be a part of a legacy that revolves around redefining the art of bathing.\nAt Shukan, we believe that a bathroom is more than just a functional space; it is a sanctuary for relaxation and rejuvenation. Our commitment to seamlessly blending timeless elegance, superior craftsmanship, and sustainable practices reflects our dedication to enhancing your everyday experiences.\nIn each piece of ceramic bathware, you'll find the embodiment of our passion for excellence. Our artisans, with their skillful hands, infuse a sense of authenticity and uniqueness into every creation. We take pride in not only crafting beautiful and enduring products but also in doing so with a profound respect for our environment.\nAs we embark on this journey, we invite you to explore the world of Shukan – a world where aesthetics meet ethics, and every detail is a testament to our commitment to quality and sustainability. Thank you for choosing Shukan, where your indulgence and well-being are at the heart of what we do.\n\nWarm regards,\n\nSarvesh Kundariya\nChairman, Shukan"
}

export const madeInIndia = {
    image: madeInIndiaImg,
    symbol: makeInIndiaSymbol
}