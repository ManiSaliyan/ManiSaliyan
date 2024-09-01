const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
app.use(express.json())
app.use(cors());

app.get('/create/:dynamic',  async function (req, res){
    const {dynamic} = await req.params;
    const data = {
        workspace: '4407c165-dbd3-4d13-8f3a-cabb49039e88',
        qr_data: dynamic,
        primary_color: '#1DA1F2'
    };
     const url = "https://hovercode.com/api/v2/hovercode/create/";
     const fet = await fetch(url,data,data, {
        mathod: 'POST',
        headers: {
            Authorization: '629f8bd3185ec03b1e803625260387fd03de6516'
        }
    })
     let rest = await fet.json();
    res.status(200).send(rest);
})

app.get('/read/:dynamic',  async function (req, res){
    const {dynamic} = await req.params;
     const url = `https://hovercode.com/api/v2/hovercode/${dynamic}/`;
     const fet = await fetch(url,{
        headers: {
            Authorization: '629f8bd3185ec03b1e803625260387fd03de6516'
        }
    })
     let rest = await fet.json();
    res.status(200).send(rest);
})

app.get('/update/:param1/:param2',  async function (req, res){
    const param1 = await req.params.param1;
    const param2 = await req.params.param2;
    const data = {
        qr_data: param2,
        display_name: 'hi'
    };
     const url = `https://hovercode.com/api/v2/hovercode/${param1}/update/`;
     const fet = await fetch(url,data,data, {
        mathod: 'POST',
        headers: {
            Authorization: '629f8bd3185ec03b1e803625260387fd03de6516'
        }
    })
     let rest = await fet.json();
    res.status(200).send(rest);
})


module.exports = app;
 app.listen(port, () => { console.log(`server started ${port}`);
})
