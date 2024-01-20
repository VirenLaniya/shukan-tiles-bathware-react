import { collections, products } from '../../data/products'

export const getProductById = (productId) => {
    return products.find(product => product.id == productId)
}

export const getCollectionById = (collectionId) => {
    return collections.find(collection => collection.id == collectionId)
}