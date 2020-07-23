const router = require("express").Router();
const db = require("../models");


router.get('/', (req, res) => {
    db.Patch.findAll({}).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

router.get("/withowners",(req, res) => {
    db.Patch.findAll({
        include:[db.User]
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
router.post('/', (req, res) => {
    db.Patch.create({
        area: req.body.area,
        lat: req.body.lat,
        lng: req.body.lng,
        UserId: req.body.UserId
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

router.get('/:id', (req, res) => {
    db.Patch.findOne({
        where: {
            id: req.params.id
        }
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
router.get('/:id/withowner', (req, res) => {
    db.Patch.findOne({
        where: {
            id: req.params.id
        },
        include:[db.User]
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})

router.delete('/:id', (req, res) => {
    db.Patch.destroy({
        where: {
            id: req.params.id
        }
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
router.put('/:id', (req, res) => {
    db.Patch.update({
        area: req.body.area,
        lat: req.body.lat,
        lng: req.body.lng
    }, {
        where: {
            id: req.params.id
        }
    }).then(patchData => {
        res.json(patchData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})



module.exports = router;