import express from 'express'

const app = express()

app.get('/ads', ( request, response) => {
  return response.json([
    {id: 1, name:'Anucio 1'},
    {id: 2, name:'Anucio 2'},
    {id: 3, name:'Anucio 3'},
    {id: 4, name:'Anucio 4'},
    {id: 5, name:'Anucio 5'},
  ])
})

app.listen(3334)

