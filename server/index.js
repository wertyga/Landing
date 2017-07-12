import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.dev.config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackMiddleware from 'webpack-dev-middleware';
import bodyParser from 'body-parser';

import axios from 'axios';


const app = express();
let compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

app.get('/get-api', (req, res) => {
    return axios({
            method: 'get',
            url:'http://demos.wonderkidstudio.com/sites/crud/api/index.php?/api/products',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }}).then(result => res.json({ result: result.data }));
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});



app.listen(3000, () => console.log('Server run on 3000 port'));





