import React from 'react'
import { TextField, Button } from '@mui/material'
import AddMovieStyle from '../styles/AddMovie.css'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: yup.object({
            email: yup.string().required().url().min(10),
            password: yup.string().required().url().min(10),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        },
      });

  return (
    <form className='Login' style={AddMovieStyle} onSubmit={formik.handleSubmit}>
        <h1 style={{color: '#1876d2'}}>
            Login
        </h1>
        <TextField label="Poster" variant="outlined" value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}/>
        <TextField label="password" variant="outlined" value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}/>
        <Link to='/addmovie'><Button variant="contained" type='submit'>Login</Button></Link>
        <Link to='/register'><Button variant="contained">Register</Button></Link>
    </form>
  )
}

export default Login