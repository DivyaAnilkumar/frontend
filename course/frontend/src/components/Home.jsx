import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, Stack } from '@mui/material';
import  {useNavigate} from 'react-router-dom';
import axios from 'axios'
const Home = () => {
  const [inputs ,setInputs] = useState([])
  const navigate = useNavigate()
  let deleteCourse =(p)=>{
    axios.delete('http://localhost:3000/course/deleteCourse/'+p).then((res)=>{
      window.location.reload()
    }
//navigate /path
    ).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(() => {
    axios.get('http://localhost:3000/course')
        .then((res) => {
            setInputs(res.data); // Set fetched product data
        })
        .catch((error) => {
            console.error("Error fetching data: ", error); // Handle error
        });
}, []);

  return (

    
    <Container>
            <Grid container spacing={8}>
                {inputs.map((input) => (
                    <Grid item key={input.courseId} xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={input.courseImageurl}
                                alt={input.title}
                                style={{ objectFit: 'contain' }} // Ensures the image fits nicely within the card
                            />
                            <CardContent>
                            <Typography variant="h6" component="div">
                                    {input.courseId}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {input.courseName}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {input.courseCategory}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {input.courseDescription}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {input.courseDuration}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {input.courseFee}
                                </Typography>

                                <Stack direction="row" spacing={4}>
                                <Button  variant="contained" color="success" >Edit</Button>

                                <Button  variant="contained" color="error" onClick={()=>{deleteCourse(input._id)}} >Delete</Button>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
  )
}

export default Home