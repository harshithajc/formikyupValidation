import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'
import *as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string()
        .required('name is required')
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup.string().email('enter valid email').required('email is required'),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
})

function FormValidation() {
    const formik = useFormik({                            //additional variable like usestate is not needed
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submit', JSON.stringify(values));
        },
        validationSchema: validationSchema
    })
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={formik.handleSubmit}>
                {/* <label>UserName</label> */}
                <TextField
                    style={{ marginTop: '20px' }}
                    id="name"
                    name="name"
                    label='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name} />
                {/* {formik.errors.name ? <div className='errors'>{formik.errors.name}</div> : null} */}
                {/* <label>Email</label> */}
                <TextField
                    style={{ marginTop: '25px' }}
                    id="email"
                    name="email"
                    label='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email} />


                {/* {formik.errors.email ? <div className='errors'>{formik.errors.email}</div> : null} */}
                {/* <label>Password</label> */}
                <TextField
                    style={{ marginTop: '30px' }}
                    id="password"
                    name="password"
                    label='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password} />

                {/* {formik.errors.password ? <div className='errors'>{formik.errors.password}</div> : null} */}
                <Button type="submit" varient='contained' color='primary'>Submit</Button>
            </form>
        </div>
    )
}

export default FormValidation