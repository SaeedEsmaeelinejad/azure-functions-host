const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.FUNCTIONS_HTTPWORKER_PORT;

app.use(bodyParser.json()) // for parsing application/json

app.get('/api/httptrigger', (req, res) => {
    let retryCount = req?.body?.Metadata?.RetryContext?.RetryCount || 0;
    let maxRetry = req?.body?.Metadata?.RetryContext?.MaxRetryCount;
    let exception = req?.body?.Metadata?.RetryContext?.Exception?.message || '';
    let errorString = 'An error occurred';
    let json = JSON.stringify({ functionName: req.url.replace("/", ""), retryCount, maxRetry });
    res.send(json);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})