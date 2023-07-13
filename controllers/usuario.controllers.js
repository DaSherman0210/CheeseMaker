const getUsers = (req,res)=>{
    res.json({
        "message":"Get hello from restserver with POO"
    })
}

const postUsers = (req,res)=>{
    res.json({
        "message":"Post hello from restserver with POO"
    })            
}

const deleteUsers = (req,res)=>{
    res.json({
        "message":"Delete hello from restserver with POO"
    })            
}

const putUsers = (req,res)=>{
    res.json({
        "message":"Put hello from restserver with POO"
    })            
}

const patchUsers = (req,res)=>{
    res.json({
        "message":"Patch hello from restserver with POO"
    })            
}

module.exports = {getUsers,postUsers,deleteUsers,putUsers,patchUsers};