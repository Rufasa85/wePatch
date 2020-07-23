const router = require("express").Router();
const db = require("../models")

router.get("/",(req,res)=>{
    db.Patch.findAll({
        include:[db.User]
    }).then(patchData=>{
        const patchDataJSON = patchData.map(patchObj=>{
            return patchObj.toJSON();
        })
        const hbsObj= {
            patches:patchDataJSON
        }
        res.render("index",hbsObj)
    })
})

router.get('/usercards',(req,res)=>{
    db.User.findAll({
        include:[db.Patch]
    }).then(userData=>{
        const userDataJSON = userData.map(userObj=>{
            return userObj.toJSON();
        })
        const hbsObj= {
            users:userDataJSON
        }
        console.log(userDataJSON);
        res.render("usercards",hbsObj);
    })
})

router.get("/profile/:id",(req,res)=>{
    db.User.findOne({
        where:{
            id:req.params.id
        },
        include:[db.Patch,{
            model:db.Patch,
            as:"Gardens",
            include:[db.User]
        }]
    }).then(userData=>{
        const userJSON = userData.toJSON();
        res.render("profile",userJSON);
    })
})

module.exports = router;