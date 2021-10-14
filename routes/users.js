const express=require('express')
const { v4: uuidv4 } = require('uuid');

const router=express.Router()

let users=[]
//All routes in here are stating with /users 
router.get('/', (req, res)=>{
    res.send(users)
})

router.post('/',async (req,res)=>{
    try {
        const user=req.body
        const newUser= await users.push({...user, id:uuidv4()})
    res.send({
        success:true,
        message:`User with id of ${newUser.id} has been added to the databse`,
        data:{
            newUser
        }
    })
    console.log(newUser)
    } catch (error) {
          console.log(error)
    }
   
})

router.delete('/:id',(req, res)=>{
    const {id}=req.params
     users=users.filter((user)=>user.id !==id)
     res.send(`user with the id ${id} deleted `)
     //id to deleate 123
     //john 123
     //jane 321
})
router.get('/:id',(req,res)=>{
         const {id}=req.params
       const user=users.find((user)=>user.id===id)

       res.status(200).send({
           success:true,
           data:{
               user
           }
       })
})


router.patch('/:id',(req, res)=>{
    const {id}=req.params
    const {firstName, lastName, age}=req.body
     const user=users.find((user)=> user.id==id)

     if(firstName){
         user.firstName=firstName
     }
     if(lastName){
         user.lastName=lastName
     }
     if(age){
         user.age=age
     }
    res.send(`user with the id ${id} has been updated`)
})
module.exports=router