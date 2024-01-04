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
    subHeading: "FOR US SOURCING OF MATERIALS IS A MATTER OF TIME...",
    description: "The company excels the skill to source out the products from Indian Market for the clients on right time and from right place. The mission of the company is to set a landmark in service industry an upcoming industry with high potential. A strong base in India Manufacturing Sector, Service Sector and Technology Sector is our strength, which is a key factor to bridge the needs of our overseas clients and Indian Market.",
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam a massa et lectus vehicula accumsan.Duis convallis sapien vitae vestibulum congue.In blandit quam mauris, eu laoreet eros luctus quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam volutpat nibh nec lacus molestie mattis.Maecenas eleifend neque a est porttitor facilisis.Aliquam diam justo, ullamcorper id erat quis, tempor fermentum est.Integer vehicula lacinia venenatis.Donec iaculis leo vel aliquam fringilla.Nam nisl turpis, maximus at est eget, dapibus volutpat dui.Nulla ornare, sapien imperdiet rutrum malesuada, elit sapien commodo mi, quis sodales ex tellus ac nibh.Nam feugiat eu diam placerat sodales.Maecenas in ex aliquet, lobortis dui sit amet, ultrices nisl.Nam sit amet magna at odio auctor aliquet.Aliquam sollicitudin semper elit, quis suscipit lectus pretium sed.Donec tincidunt tellus purus.'
    },
    vision: {
        title: 'Vision',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam a massa et lectus vehicula accumsan.Duis convallis sapien vitae vestibulum congue.In blandit quam mauris, eu laoreet eros luctus quis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam volutpat nibh nec lacus molestie mattis.Maecenas eleifend neque a est porttitor facilisis.Aliquam diam justo, ullamcorper id erat quis, tempor fermentum est.Integer vehicula lacinia venenatis.Donec iaculis leo vel aliquam fringilla.Nam nisl turpis, maximus at est eget, dapibus volutpat dui.Nulla ornare, sapien imperdiet rutrum malesuada, elit sapien commodo mi, quis sodales ex tellus ac nibh.Nam feugiat eu diam placerat sodales.Maecenas in ex aliquet, lobortis dui sit amet, ultrices nisl.Nam sit amet magna at odio auctor aliquet.Aliquam sollicitudin semper elit, quis suscipit lectus pretium sed.Donec tincidunt tellus purus.'
    }
}

export const message = {
    title: 'Message from Chairmain',
    image: cmdDirectorPicture,
    managingDirector: 'Jhon Mayers',
    managingDirectorAbout: 'Managing Director',
    quoteMessage: '',
    message: ''
}

export const madeInIndia = {
    image: madeInIndiaImg,
    symbol: makeInIndiaSymbol
}