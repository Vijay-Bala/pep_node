import React from 'react'
import { TextField, Button } from '@mui/material'
import AddMovieStyle from '../styles/AddMovie.css'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'

const AddMovie = () => {

    const formik = useFormik({
        initialValues: {
          name: '',
          poster: '',
          trailer: '',
          summary: '',
          rating: '',
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            poster: yup.string().required().url().min(10),
            trailer: yup.string().required().url().min(10),
            summary: yup.string().required().min(10).max(200),
            rating: yup.number().required().min(0).max(10),
        }),
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        },
      });

  return (
    <form className='AddMovie' style={AddMovieStyle} onSubmit={formik.handleSubmit}>
        <h1 style={{color: '#1876d2'}}>
            Add Movies
        </h1>
        <TextField label="Name" variant="outlined" value={formik.values.name} name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}/>
        <TextField label="Director" variant="outlined" value={formik.values.poster} name='poster' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.poster && formik.errors.poster} helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : null}/>
        <TextField label="trailer" variant="outlined" value={formik.values.trailer} name='trailer' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.trailer && formik.errors.trailer} helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null}/>
        <TextField label="Summary" variant="outlined" value={formik.values.summary} name='summary' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.summary && formik.errors.summary} helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null}/>
        <TextField label="Rating" variant="outlined" value={formik.values.rating} name='rating' onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.rating && formik.errors.rating} helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null}/>
        <Button variant="contained" type='submit'>Add Movie</Button>
        <Link to='/login'><Button variant="contained">Log out</Button></Link>
    </form>
  )
}

export default AddMovie