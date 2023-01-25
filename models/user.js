const mongoose = require("mongoose")

const userSchema = new mongoose.Schema (
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        token: String
    },
    {
        timestamps: true,
        toJSON: {
			transform: (_doc, user) => {
				delete user.password
				return user
			}
		}
    }
)
    //mongoose model: User
    //collection: users
module.exports = mongoose.model("User", userSchema)