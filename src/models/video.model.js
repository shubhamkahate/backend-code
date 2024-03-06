import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudinary url
        required: true
    },
    thumbnail: {
        type: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublish: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        res: "User"
    }

},
    {
        timeStamps: true
    }

)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.medel("video", videoSchema)