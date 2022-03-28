let scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Dagger'
  }

  scenario = {
    murderer: 'Mr Plum',
    room: 'Conservatory',
    weapon: 'Candlestick'
  }

  const changeToRope = function () {
      if (scenario.murderer === 'Mr Plum') {
          scenario.weapon = 'Rope';
        }
  }

  changeToRope()

  scenario.murderer = 'Miss Scarlet'

  const weapon = scenario.weapon

  console.log(`The weapon is the ${weapon}.`)
  console.log(`The room is the ${scenario.room}.`)
  console.log(`The murderer is ${scenario.murderer}`)
