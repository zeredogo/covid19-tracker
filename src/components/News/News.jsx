import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid,  CardActionArea, CardActions } from '@material-ui/core';
import cx from 'classnames';
import styles from './news.module.css';

const News = () => {
  const [value, setValue] = useState([]);


  async function ak() {
    let response = await fetch("https://newsapi.org/v2/everything?q=coronavirus&apiKey=1ea292b985c5499aac80f70e120f4476");
    let result = await response.json();

    setValue(result.articles);
  }

  ak ();


  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Covid-19 News</h1>
      {
        value.map((data) => {
          return (
            <Grid container spacing={3} justify='center'>
              <Card className={cx(styles.card, styles.root)}>
              <CardActionArea>
                <CardContent>
                 <img src={data.urlToImage} className={styles.media} alt='coronavirus' />
                   <Typography color='textSecondary' gutterBottom>{data.title}</Typography>
                   <Typography variant='body2' color='textSecondary' >{data.description}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <a href={data.url} size='small' color='primary'>
                 Main News
               </a>
              </CardActions>
            </Card>
          </Grid>
          );
        })
      }
    </div>
         )
}

export default News;