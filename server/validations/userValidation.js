import yup from 'yup'

const userValidation = yup.object({
    username: yup.string().min(2).max(10).required(),
    surname: yup.string().min(2).max(10).required(),
    comment: yup.string().min(5).required()
})

export const idValidationSchema = yup.number().required()
export default userValidation