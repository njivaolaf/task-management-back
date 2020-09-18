const router = require("express").Router();
const jfs = require('jfs');

const myDb = new jfs("data");

router.get('/', (req, res) => {
    res.send({ success: true });
});

router.post('/', function(req, res) {
    const bodyDetails = req.body;
    console.log("bodyDetails:", bodyDetails);

    myDb.save(bodyDetails, function(err) { // id, objet, callback
        if (err) {
            return res.status(500).send("Could not save user");
        }
        return res.send('Got a POST request !');
    });
});

router.put('/', function(req, res) {
    res.send('Got a PUT request');
});

router.delete('/', function(req, res) {
    res.send('Got a DELETE request');
});

module.exports = router;