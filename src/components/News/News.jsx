import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import cx from 'classnames';
import styles from './news.module.css';
import photo from './image/kryptozonee.jpeg'

const News = () => {
  const [value, setValue] = useState([]);

  const getNews = () => {
     axios.get("https://newsapi.org/v2/everything?q=tesla&apiKey=1ea292b985c5499aac80f70e120f4476")
     .then((response) => {
      console.log(response);
     })
  }


  return (
         <Card className={cx(styles.card, styles.root)}>
           <CardActionArea>
             <CardContent>
              <img src={photo} className={styles.media} alt='coronavirus' />
                <Typography color='textSecondary' gutterBottom>Infected</Typography>
                <Typography varaint='h5'></Typography>
                <Typography color='textSecondary' >{value}</Typography>
                <Typography variant='body2' color='textSecondary' >Number of active cases of COVID-19</Typography>
             </CardContent>
           </CardActionArea>
           <CardActions>
            <Button size='small' color='primary'>
              Read More
            </Button>
           </CardActions>
         </Card>
  )
}

export default News