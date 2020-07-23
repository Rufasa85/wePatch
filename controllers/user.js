const router = require("express").Router();
const db = require("../models");


router.get('/',(req,res)=>{
    db.User.findAll({}).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).end()
    })
})

router.get("/withpatches",(req,res)=>{
    db.User.findAll({
        include:[db.Patch]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).end()
    })
})
router.get("/withdata",(req,res)=>{
    db.User.findAll({
        include:[db.Patch,{
            model:db.Patch,
            as: "Gardens",
            include:[db.User]
        }]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).end()
    })
})

router.post('/',(req,res)=>{
    db.User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).end()
    })
})

router.get('/:id',(req,res)=>{
   db.User.findOne({
       where:{
           id:req.params.id
       }
   }).then(userData=>{
       res.json(userData)
   }).catch(err=>{
       console.log(err);
       res.status(500).end()
   })
})
router.get('/:id/withpatches',(req,res)=>{
   db.User.findOne({
       where:{
           id:req.params.id
       },
       include:[db.Patch]
   }).then(userData=>{
       res.json(userData)
   }).catch(err=>{
       console.log(err);
       res.status(500).end()
   })
})

router.delete('/:id',(req,res)=>{
   db.User.destroy({
       where:{
           id:req.params.id
       }
   }).then(userData=>{
       res.json(userData)
   }).catch(err=>{
       console.log(err);
       res.status(500).end()
   })
})
router.put('/:id',(req,res)=>{
   db.User.update({
       name:req.body.name,
        email:req.body.email,
        password:req.body.password
   },{
       where:{
           id:req.params.id
       }
   }).then(userData=>{
       res.json(userData)
   }).catch(err=>{
       console.log(err);
       res.status(500).end()
   })
})



module.exports = router;