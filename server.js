const { response } = require('express')
const express= require('express')
const app= express()
const PORT= 8000

const tea= {
   'Green tea': {
        'name': 'Yogi Pure Green Tea',
        'region grown': 'Japan',
        'caffinated': 'no'
    },

      'Black tea': {
        'name': 'Pure black tea',
        'region grown': 'columbia',
        'caffinated': 'yes'
    },

    'Matcha tea': {
        'name': 'Matcha average tea',
        'region grown': 'China',
        'caffinated': 'yes'
    },

    'unknown': {
        'name': 'unknown',
        'region grown': 'unknown',
        'caffinated': 'unknown'
    }
  

    }
    


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (req, res) =>{
 const teaName= req.params.name.toLowerCase()
 if(tea [teaName] ){
    res.json(tea[teaName])
 }else{
    res.json(tea['unknown'])
 }
 
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})