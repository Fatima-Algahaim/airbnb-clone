function filterByCity(targetCity, listingCityArray) {
  let indices = [];
  for (let i = 0; i < listingCityArray.length; i++) {
    if (listingCityArray[i].toLowerCase() === targetCity.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  let indices = [];
  for (let i = 0; i < listingPriceArray.length; i++) {
    if (listingPriceArray[i] >= minPrice && listingPriceArray[i] <= maxPrice) {
      indices.push(i);
    }
  }
  return indices;
}

// LevelUp!
function filterByTypes(targetTypes, listingTypeArray) {
  let indices = [];
  for (let i = 0; i < listingTypeArray.length; i++) {
    if (targetTypes.includes(listingTypeArray[i])) {
      indices.push(i);
    }
  }
  return indices;
}
