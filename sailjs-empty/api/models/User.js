module.exports={
    attributes:{
        name:{
            type:'string',
            required: true
        },
        role:{
            type:'string',
            required: true
        },
        email:{
            type:'string',
            required: true,
            unique: true
        },
        pass:{
            type:'string',
            required: true
        },
        post:{
            type:'number',
            defaultsTo:0
        },
        status:{
            type:'string',
            defaultsTo:'Hoạt Động'
        }
    },
}