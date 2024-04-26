const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText:{
        type: String,
        required:true,
    },
    firstName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },

});

const aboutSchema = new mongoose.Schema({

   description:{
        type: String,
        required: true,
   },
   skills:{
    type:Array,
    required:true,
   }
});
const educationSchema = new mongoose.Schema({
 
    title:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
   description:{
        type: String,
        required: true,
   },

});
const experienceSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    period:{
        type: String,
        required: true,
    },
    description1:{
        type: String,
        required: true,
    },
    description2:{
        type: String,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },
});

const skillsSchema =new mongoose.Schema({
    
    skill:{
        type:Array,
        required: true,
    },

})

const projectsSchema =new mongoose.Schema({
    // des1:{
    //     type:String,
    //     required: true,
    // },
    projecttitle:{
        type:String,
        required: true,
    },
    projectdes:{
        type:String,
        required: true,
    },
    techstack:{
        type:Array,
        required:true,
    },
    image:{
        type:String,
        required: true,
    },
    link:{
        type:String,
        required: true,
    },

})

const contactSchema =new mongoose.Schema({
    
    name:{
        type:Array,
        required: true,
    },
    age:{
        type:Array,
        required: true,
    },
    gender:{
        type:Array,
        required: true,
    },
    email:{
        type:Array,
        required: true,
    },
    mobile:{
        type:Array,
        required: true,
    },
    
    address:{
        type:Array,
        required: true,
    },
    lottieUrl:{
        type: String,
        required: true,
    },

})

module.exports ={
    Intro: mongoose.model("intros",introSchema),
    About: mongoose.model("abouts",aboutSchema ),
    Education: mongoose.model("education",educationSchema),
    Experience: mongoose.model("experience",experienceSchema),
    Skills: mongoose.model("skills",skillsSchema),
    Projects: mongoose.model("projects",projectsSchema),
    Contacts: mongoose.model("contacts",contactSchema),
};
