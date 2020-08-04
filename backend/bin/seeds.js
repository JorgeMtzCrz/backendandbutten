const mongoose = require('mongoose')
const Character = require('../models/Character')
const Episode = require('../models/Episode')

const characters = [{
        name: 'Beavis',
        gender: 'Male',
        race: 'White',
        hair: 'Blond',
        age: 14,
        birthday: 'October 28th',
        job: 'Fry cook at Burger World',
        image: 'https://vignette.wikia.nocookie.net/beavisandbutthead/images/9/93/Beavis-1.png/revision/latest?cb=20120108001944'
    },
    {
        name: 'Butthead',
        gender: 'Male',
        race: 'White',
        hair: 'Dark brown',
        age: 15,
        birthday: 'November 28th',
        job: 'Assistant manager at Burger World',
        image: 'https://vignette.wikia.nocookie.net/beavisandbutthead/images/b/b1/Butt-head.png/revision/latest?cb=20120108001808'
    },
    {
        name: 'The great Cornholio',
        gender: 'Male',
        race: 'White',
        hair: 'Blond',
        age: 22,
        birthday: 'October 18th',
        job: 'Lead teacher at Ironhack',
        image: 'https://static1.squarespace.com/static/53d58588e4b0c3fee1f6ee3b/53d589f6e4b02158d29d2376/5c379dd74fa51a2a27f42a3d/1548626787633/Cornholio.png?format=1000w'
    },
]

const episodes = [{
        title: 'Frog Baseball',
        season: 0,
        episode_number: 0,
        US_airdate: 'March 11, 1993'
    },
    {
        title: 'The Great Cornholio',
        season: 4,
        episode_number: 31,
        US_airdate: 'July 15, 1994'
    },
    {
        title: 'Going down',
        season: 8,
        episode_number: 22,
        US_airdate: 'December 29, 2011'
    }
]

mongoose.connect('mongodb://localhost/backend', { useNewUrlParser: true })
    .then(async() => {
        const res1 = await Character.create(characters)
        const res2 = await Episode.create(episodes)
        console.log(`${res1.length} characters created.
        ${res2.length} episodes created`)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
        mongoose.connection.close()
    })