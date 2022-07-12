import React, { useState ,useEffect} from 'react';
import { Card, CardContent, Typography, Button, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import cx from 'classnames';
import styles from './news.module.css';
import photo from './image/kryptozonee.jpeg'

const News = () => {
  const [value, setValue] = useState('paul');


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