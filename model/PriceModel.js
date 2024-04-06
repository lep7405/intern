const { default: mongoose, Schema } = require('mongoose');
const PriceSchema = new mongoose.Schema(
    {   
        NO:{
            type:String,
            required:true
        },
        Website: {
            type: String,
            required: true,
        },
        Ads_Position: {
            type: String,
            required: true,
        },
        Dimensions:{
           type:String,
           required: true
        },
        PlatForm: {
            type: String,
            required: true,
        },
        Demo: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    url: {
                        type: String,
                        // required: true
                    }
                }
        ],
        BuyingMethod:{
            type:String,
            // require:true
        },
        HomePage:{
            type:Number,
            // type:String,
            // require:true,
        },
        Dongia:{
            type:Number,
        },
        XuyenDetail:{
            type:Number,
         
        },
        Cross_siteRoadBlock:{
            type:Number,
        },
        Week:{
            type:String,
       
        },
        Month:{
           
            type:Number
        },
        Quater:{
          
            type:Number
        },
        Subject:{
            type:Number,
        },
       
        AverageCTR:{
            type:String,
           
        },
        EstCTR:{
            type:String,
        },
        EstImpression:{
            type:String
        },
        EstTraffic:{
            type:String
        },
        Note:{
            type:String
        }
    },
    {
        collection: 'prices',
        timestamps: true,
        strict: true,
    },
);


const PriceModel = mongoose.model('PriceModel', PriceSchema);
module.exports = PriceModel;
