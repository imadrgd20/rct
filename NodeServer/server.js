
const express = require('express');
const app = express();

app.get('/api/:dateString?', (req, res) => {
    let dateString = req.params.dateString;
    
    // If dateString is undefined, use the current date
    if (!dateString) {
        dateString = new Date().toISOString();
    }

    // Check if dateString is a number (timestamp) or a valid date string
    let date;
    if (!isNaN(dateString)) {
        date = new Date(parseInt(dateString));
    } else {
        date = new Date(dateString);
    }

    // Respond with the appropriate JSON
    if (date.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
    } else {
        res.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
});


app.listen(8080, () => {
    console.log('App is listening on port 8080');
});
