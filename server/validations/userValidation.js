import yup from 'yup'

const userValidation = yup.object({
    username: yup.string().min(2).max(10).required('Username must be required'),
    surname: yup.string().min(2).max(10).required('Surname must be required'),
    comment: yup.string().min(5).max(50).required('Comment must be required')
})

export const idValidationSchema = yup.number().required()
export default userValidation