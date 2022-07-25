const yup = require('yup')
const useSchema = yup.object({
    username: yup.string().required(),
    surname: yup.string().required(),
    comment: yup.string().min(5).max(50).required()
})

module.exports = useSchema;