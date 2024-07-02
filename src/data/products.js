import brassFaucet from '/assets/images/products/designs/brass faucet-1.jpg'
import bronzeFaucet from '/assets/images/products/designs/bronze faucet-1.jpg'
import goldBronzeFaucet from '/assets/images/products/designs/gold bronze faucet-1.jpg'
import goldenFaucet from '/assets/images/products/designs/golden faucet-1.jpg'
import blackVanity from '/assets/images/products/designs/IMG_6556.jpg'
import whiteVanity from '/assets/images/products/designs/IMG_6746.jpg'
import livePhoto1 from '/assets/images/products/designs/live photo-1.jpg'
import livePhoto2 from '/assets/images/products/designs/live photo-2.jpg'
import livePhoto3 from '/assets/images/products/designs/live photo-3.jpg'
import livePhoto4 from '/assets/images/products/designs/live photo-4.jpg'
import livePhoto5 from '/assets/images/products/designs/live photo-5.jpg'
import livePhoto6 from '/assets/images/products/designs/live photo-6.jpg'
import livePhoto7 from '/assets/images/products/designs/live photo-7.jpg'
import livePhoto8 from '/assets/images/products/designs/live photo-8.jpg'
import livePhoto9 from '/assets/images/products/designs/live photo-9.jpg'
import livePhoto10 from '/assets/images/products/designs/live photo-10.jpg'
import hdhmrProd1 from '/assets/images/products/designs/HDHMR_prod 1.png'
import hdhmrProd2 from '/assets/images/products/designs/HDHMR_prod 2.png'

export const collections = [
    { id: 1, title: "HDHMR Collection" },
    { id: 2, title: "Slab Vanity Collection" },
    { id: 3, title: "PVC Vanity Collection" },
    { id: 4, title: "Sanitary Set" },
    { id: 5, title: "Shower Set" },
]

const dummyTable= [
    {
        C: 'Cabinet',
        L: '787mm',
        W: '460mm',
        H: '460mm'
    },
    {
        C: 'Sanitary',
        L: '800mm',
        W: '470mm',
        H: '10mm'
    },
    {
        C: 'Mirror',
        L: '800mm',
        W: '460mm',
        H: '4mm'
    },
    {
        C: 'Side cabinet',
        L: '255mm',
        W: '200mm',
        H: '1270mm'
    }
]

export const products = [
    // {
    //     id: 1,
    //     name: "Brass Faucet",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: brassFaucet,
    //     collectionId: 5,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 2,
    //     name: "Bronze Faucet",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: bronzeFaucet,
    //     collectionId: 5,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 3,
    //     name: "Gold Bronze Faucet",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: goldBronzeFaucet,
    //     collectionId: 5,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 4,
    //     name: "Golden Faucet",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: goldenFaucet,
    //     collectionId: 5,
    //     table: [...dummyTable]
    // },
    {
        id: 5,
        name: "BLACK VANITY",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: blackVanity,
        collectionId: 2,
        table: [...dummyTable]
    },
    {
        id: 6,
        name: "White Vanity",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: whiteVanity,
        collectionId: 3,
        table: [...dummyTable]
    },
    // {
    //     id: 7,
    //     name: "Live Photo 1",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto1,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 8,
    //     name: "Live Photo 2",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto2,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 9,
    //     name: "Live Photo 3",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto3,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 10,
    //     name: "Live Photo 4",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto4,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 11,
    //     name: "Live Photo 5",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto5,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 12,
    //     name: "Live Photo 6",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto6,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 13,
    //     name: "Live Photo 7",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto7,
    //     collectionId: 4,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 14,
    //     name: "Live Photo 8",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto8,
    //     collectionId: 1,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 15,
    //     name: "Live Photo 9",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto9,
    //     collectionId: 1,
    //     table: [...dummyTable]
    // },
    // {
    //     id: 16,
    //     name: "Live Photo 10",
    //     description: `A set of 60 hand-crafted, high quality tiles in`,
    //     image: livePhoto10,
    //     collectionId: 1,
    //     table: [...dummyTable]
    // },
    {
        id: 17,
        name: "HDHMR Product 1",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: hdhmrProd1,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 18,
        name: "HDHMR Product 2",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: hdhmrProd2,
        collectionId: 1,
        table: [...dummyTable]
    },
]