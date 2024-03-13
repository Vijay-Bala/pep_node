import React from 'react'
import { TextField, Button } from '@mui/material'
import AddMovieStyle from '../styles/AddMovie.css'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        validationSchema: yup.object({
            username: yup.string().required(),
            email: yup.string().required().url().min(10),
            password: yup.string().required().url().min(10),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        },
      });

  return (
    <form className='Register' style={AddMovieStyle} onSubmit={formik.handleSubmit}>
        <h1 style={{color: '#1876d2'}}>
            Register
        </h1>
        <TextField label="User Name" variant="outlined" value={formik.values.username} name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.username && formik.errors.username} helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}/>
        <TextField label="Poster" variant="outlined" value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}/>
        <TextField label="password" variant="outlined" value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}/>
        <Link to='/login'><Button variant="contained" type='submit'>Register</Button></Link>
        <Link to='/login'><Button variant="contained">Login</Button></Link>
    </form>
  )
}

export default Register