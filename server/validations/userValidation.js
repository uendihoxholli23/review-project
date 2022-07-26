import yup from 'yup'
const userValidation = yup.object({
    username: yup.string().required(),
    surname: yup.string().required(),
    comment: yup.string().min(5).max(50).required()
})

export const idValidationSchema = yup.number().required()

export default userValidation