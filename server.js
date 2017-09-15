const express = require('express'),
    app     = express(),
    PORT    = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("Lin's Portfolio site running on port: ", PORT);
});
