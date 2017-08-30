import travelsData from './index.json'

const helper = {}

helper.countriesCount = function () {
  const countries = []
  travelsData.oldTravels.forEach((travel) => {
    if (countries.indexOf(travel.country) === -1) {
      countries.push(travel.country)
    }
  })
  return countries.length
}

export default helper
