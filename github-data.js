let data = require('./data')

// 1)
const numOfRepos = (array) => {
  let count = 0
  array.forEach((repository) => {
    count ++
  })
  return `${count} Launch Academy repositories.`
}
console.log('\n1) ' + numOfRepos(data))

// 2)
const largestRepo = (array) => {
  array.sort((a,b) => {
    return b.size - a.size
  })
  return `The repository with the largest size is '${array[0].name}'.`
}

console.log('\n2) ' + largestRepo(data))

// 3)
const mostRecentRepo = (array) => {
  array.sort((a,b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  })
  return `The most recently created repository is '${array[0].name}'.`
}

console.log('\n3) ' + mostRecentRepo(data))

// 4)
const noGazers = (array) => {
  starCount = 0
  array.forEach((repository) => {
    if (repository.stargazers_count === 0){
      starCount ++
    }
  })
  return starCount + ' repositories have ZERO stargazers.'
}
console.log('\n4) ' + noGazers(data))

// 5)
const maxGazers = (array) => {
  array.sort((a,b) => {
    return b.stargazers_count - a.stargazers_count
  })
  return `The repository with the largest number of stargazers is '${array[0].name}'.`
}

console.log('\n5) ' + maxGazers(data))

// 6)
const hasDescriptions = (array) => {
  let descriptionNotNull = []
  array.forEach((repository) => {
    if (repository.description != null) {
      descriptionNotNull.push(`${repository.name}`)
    }
  })
  return JSON.stringify(descriptionNotNull)
}

console.log('\n6) ' + hasDescriptions(data))

//7)
const newDescriptionsArray = (array) => {
  let descriptionsArray = array.map((repository) => {
    if (repository.description === null) {
      return "No description provided."
    } else {
      return repository.description
    }
  })
  return JSON.stringify(descriptionsArray)
}

console.log('\n7) ' +  newDescriptionsArray(data))

//8)
let keyInfo = (array) => {
  let keyInfoArray = array.map((repository) => {
    let name = JSON.stringify(repository.name)
    let owner = JSON.stringify(repository.owner)
    let watchers = repository.watchers_count
    return(` Name: ${name}; Owner: ${(owner)}; Number of Watchers: ${watchers}`)
  })
  return `[${keyInfoArray}]`
}
console.log('\n8) ' +  keyInfo(data))

//9)
let monkeyKeys = (array) => {
  let monkeyArray = []
  array.forEach((repository) => {
    if (repository.name === "monkey_party"){
      monkeyArray.push(Object.keys(repository.license))
    }
  })
  return monkeyArray
}
console.log('\n9) ' + monkeyKeys(data))

//10)
let urlValue = (array) => {
  let urlArray = []
  array.forEach((repository) => {
    if (repository.name === "monkey_party"){
      urlArray.push(repository.license.url)
    }
  })
  return "Monkey Party's license URL: " + urlArray
}
console.log('\n10) ' + urlValue(data))

module.exports = { numOfRepos, largestRepo, mostRecentRepo, noGazers, maxGazers, hasDescriptions, newDescriptionsArray, keyInfo, monkeyKeys, urlValue }
