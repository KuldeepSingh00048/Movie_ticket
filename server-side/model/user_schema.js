const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    phone_number:{
        type : Number,
    },
    movie_name:{
        type : String,
    },
    time:{
        type : String,
    },
    city:{
        type : String,
    },
    price:{
        type : String,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User= mongoose.model('users',userSchema);
module.exports=User;


























// const jwt = require('jsonwebtoken')
// const bycrypt = require('bcryptjs');
// const { JsonWebTokenError } = require('jsonwebtoken');
// password:{
    //     type : String,
//     required : true
// },
// cpassword:{
//     type : String,
//     required : true
// },
// tokens:[
//     {
    //         token :{
        //             type :String,
//             required: true
//         }
//     }
// ]
// userSchema.pre('save', async function(next){
//     if(this.isModified('password'))
//     {
//         this.password = await bycrypt.hash(this.password,12);
//         this.cpassword = await bycrypt.hash(this.cpassword,12);
//     }
// })

// userSchema.methods.generateAuthToken = async function(){
//     try{
    //         let token = jwt.sign({_id:this._id},'kuldeepsinghsudipsinghkuldeepsinghsudipsinghkuldeepsinghsudipsingh')
//         this.tokens =this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }
//     catch(error)
//     {
    //         console.log(error);
    //     }
    // }
