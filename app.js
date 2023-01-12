const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.json({"name": 'Armaan', "age": '29', "sex": 'Male', "status": 'Single and ready to mingle'})
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
