const express = require('express')

const app = express()

app.get('/', (req, res) => {

 res.send("This is homepage api")

})

app.get('/usernames', (req, res) => {

    var usernames = ['john', 'alexander', 'Ali', 'Dani']
    res.send(usernames)
})

app.listen(3000, () => {

    console.log("server started on port 3000")
})