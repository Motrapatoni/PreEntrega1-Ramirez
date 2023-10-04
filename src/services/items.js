export const getItemsList = (limit = 20, offset = 0) => {
    return fetch(`${PRODUCTS}`);
  };


export const PRODUCTS = [
        {
          "name": "product1",
          "price": 10,
          "description": "description1",
          "category": "category1",
          "image": "image1",
          "quantity": 5
        },
        {
          "name": "product2",
          "price": 20,
          "description": "description2",
          "category": "category2",
          "image": "image2",
          "quantity": 3
        },
        {
          "name": "product3",
          "price": 15,
          "description": "description3",
          "category": "category1",
          "image": "image3",
          "quantity": 8
        },
        {
          "name": "product4",
          "price": 25,
          "description": "description4",
          "category": "category3",
          "image": "image4",
          "quantity": 2
        },
        {
          "name": "product5",
          "price": 30,
          "description": "description5",
          "category": "category2",
          "image": "image5",
          "quantity": 4
        },
        {
          "name": "product6",
          "price": 12,
          "description": "description6",
          "category": "category1",
          "image": "image6",
          "quantity": 6
        },
        {
          "name": "product7",
          "price": 18,
          "description": "description7",
          "category": "category3",
          "image": "image7",
          "quantity": 9
        },
        {
          "name": "product8",
          "price": 22,
          "description": "description8",
          "category": "category2",
          "image": "image8",
          "quantity": 1
        },
        {
          "name": "product9",
          "price": 28,
          "description": "description9",
          "category": "category1",
          "image": "image9",
          "quantity": 7
        },
        {
          "name": "product10",
          "price": 35,
          "description": "description10",
          "category": "category3",
          "image": "image10",
          "quantity": 3
        },
        {
          "name": "product11",
          "price": 17,
          "description": "description11",
          "category": "category2",
          "image": "image11",
          "quantity": 4
        },
        {
          "name": "product12",
          "price": 23,
          "description": "description12",
          "category": "category1",
          "image": "image12",
          "quantity": 6
        },
        {
          "name": "product13",
          "price": 29,
          "description": "description13",
          "category": "category3",
          "image": "image13",
          "quantity": 9
        },
        {
          "name": "product14",
          "price": 33,
          "description": "description14",
          "category": "category2",
          "image": "image14",
          "quantity": 2
        },
        {
          "name": "product15",
          "price": 40,
          "description": "description15",
          "category": "category1",
          "image": "image15",
          "quantity": 8
        },
        {
          "name": "product16",
          "price": 16,
          "description": "description16",
          "category": "category3",
          "image": "image16",
          "quantity": 1
        },
        {
          "name": "product17",
          "price": 24,
          "description": "description17",
          "category": "category2",
          "image": "image17",
          "quantity": 5
        },
        {
          "name": "product18",
          "price": 32,
          "description": "description18",
          "category": "category1",
          "image": "image18",
          "quantity": 7
        },
        {
          "name": "product19",
          "price": 38,
          "description": "description19",
          "category": "category3",
          "image": "image19",
          "quantity": 4
        },
        {
          "name": "product20",
          "price": 45,
          "description": "description20",
          "category": "category2",
          "image": "image20",
          "quantity": 3
        },
        {
          "name": "product21",
          "price": 14,
          "description": "description21",
          "category": "category1",
          "image": "image21",
          "quantity": 6
        },
        {
          "name": "product22",
          "price": 21,
          "description": "description22",
          "category": "category3",
          "image": "image22",
          "quantity": 9
        },
        {
          "name": "product23",
          "price": 27,
          "description": "description23",
          "category": "category2",
          "image": "image23",
          "quantity": 2
        },
        {
          "name": "product24",
          "price": 36,
          "description": "description24",
          "category": "category1",
          "image": "image24",
          "quantity": 5
        },
        {
          "name": "product25",
          "price": 44,
          "description": "description25",
          "category": "category3",
          "image": "image25",
          "quantity": 8
        },
        {
          "name": "product26",
          "price": 19,
          "description": "description26",
          "category": "category2",
          "image": "image26",
          "quantity": 1
        },
        {
          "name": "product27",
          "price": 26,
          "description": "description27",
          "category": "category1",
          "image": "image27",
          "quantity": 4
        },
        {
          "name": "product28",
          "price": 34,
          "description": "description28",
          "category": "category3",
          "image": "image28",
          "quantity": 7
        },
        {
          "name": "product29",
          "price": 42,
          "description": "description29",
          "category": "category2",
          "image": "image29",
          "quantity": 3
        },
        {
          "name": "product30",
          "price": 50,
          "description": "description30",
          "category": "category1",
          "image": "image30",
          "quantity": 6
        },
        {
          "name": "product31",
          "price": 15,
          "description": "description31",
          "category": "category3",
          "image": "image31",
          "quantity": 9
        },
        {
          "name": "product32",
          "price": 25,
          "description": "description32",
          "category": "category2",
          "image": "image32",
          "quantity": 2
        },
        {
          "name": "product33",
          "price": 33,
          "description": "description33",
          "category": "category1",
          "image": "image33",
          "quantity": 5
        },
        {
          "name": "product34",
          "price": 41,
          "description": "description34",
          "category": "category3",
          "image": "image34",
          "quantity": 8
        },
        {
          "name": "product35",
          "price": 48,
          "description": "description35",
          "category": "category2",
          "image": "image35",
          "quantity": 1
        }
]

export const getItemByName = (name) => {
    return PRODUCTS.name
}