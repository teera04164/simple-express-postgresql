const { Router } = require('express');
const router = new Router();

router.get('/',(req,res)=> {
    res.status(200).json({
        name: "Sample Resful API Express",
        description: "this is sample api",
        version: process.env.VERSION || "1.0.0",
        release_date: "2020-03-24"
    })
});

module.exports = router;