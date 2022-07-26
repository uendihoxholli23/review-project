import yup from 'yup'

const userValidation = yup.object({
    username: yup.string().required('Username must be required'),
    surname: yup.string().required('Surname must be required'),
    comment: yup.string().min(5).max(50).required('Comment must be required')
})

export const idValidationSchema = yup.number().required()
export default userValidation