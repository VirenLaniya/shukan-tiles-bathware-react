import design1 from '/assets/images/products/designs/design1.jpg'
import design2 from '/assets/images/products/designs/design2.jpg'
import design3 from '/assets/images/products/designs/design3.jpg'
import design4 from '/assets/images/products/designs/design4.jpg'

export const collections = [
    { id: 1, title: "HDHMR Collection" },
    { id: 2, title: "Slab Vanity Collection" },
    { id: 3, title: "PVC Vanity Collection" }
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
    {
        id: 1,
        name: "Tiles",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design1,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 2,
        name: "Ritz Wall Hung Basin dsds dds dsds dsds ",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design2,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 3,
        name: "MORITZ HL 01",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design3,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 4,
        name: "MORITZ DARK",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design4,
        collectionId: 2,
        table: [...dummyTable]
    },
    {
        id: 5,
        name: "PLAZO GRAPHITE",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design2,
        collectionId: 3,
        table: [...dummyTable]
    },
    {
        id: 6,
        name: "RANGER BEIGE",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design1,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 7,
        name: "OROMO",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design2,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 8,
        name: "RANGER GRIS",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design3,
        collectionId: 2,
        table: [...dummyTable]
    },
    {
        id: 9,
        name: "PLAZO BIANCO",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design4,
        collectionId: 1,
        table: [...dummyTable]
    },
    {
        id: 10,
        name: "RUBY RUST",
        description: `A set of 60 hand-crafted, high quality tiles in`,
        image: design3,
        collectionId: 1,
        table: [...dummyTable]
    }
]