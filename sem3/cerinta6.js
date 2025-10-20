const getFilteredObjects = (array, object) => {
    return array.filter((element) => {
        let result = false
        Object.keys(object).forEach(key => {
            if (!element[key] || element[key] !== object[key]) {
                result = true
            }
        })
        return result
    })
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
]

const result = getFilteredObjects(laptops, { processor: 'i5', ram: 8 })
console.log("result ", result)

//----------------------------CERINTA 6-------------------

const getFilteredTelephone = (array, object) => {
  return array.filter((element) => {
    let result = false

    Object.keys(object).forEach(key => {
      if (!element[key] || element[key] !== object[key]) {
        result = true
      }
    })

    return result
  })
}
const phones = [
  {
    brand: 'Samsung',
    model: 'S23',
    storage: 128
  },
  {
    brand: 'Apple',
    model: 'iPhone 15',
    storage: 256
  },
  {
    brand: 'Xiaomi',
    model: 'Redmi Note 12',
    storage: 128
  },
  {
    brand: 'OnePlus',
    model: 'Nord 3',
    storage: 512
  },
]

const resultPhones = getFilteredTelephone(phones, { storage: 128 })
console.log("Telefoane diferite de modelul dat:", resultPhones)
