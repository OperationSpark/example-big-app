const express = require('express');
const swtvsfaLiB = require('swtvsfa');

const app = express();

app.use(swtvsfaLiB.hijack());


app.listen(8000, () => {
  console.log('listening on port 8000');

})
