const express = require('express');
const customersRoutes = require('./src/customers/customersRoutes');
const deliveryRoutes = require('./src/delivery/deliveryRoutes')

const app = express();
const port = 3000;

app.use(express.json());

var cors = require('cors')
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.use('/api/v1/customers', customersRoutes)
app.use('/api/v1/delivery', deliveryRoutes)


app.listen(port, () => console.log(`app listening on port ${port}`));