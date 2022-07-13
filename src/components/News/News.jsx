import React, { useState ,useEffect} from 'react';
import { Card, CardContent, Typography, Button, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
import cx from 'classnames';
import styles from './news.module.css';
import photo from './image/kryptozonee.jpeg'

const News = () => {
  const [value, setValue] = useState([]);


  async function ak() {
    let response = await fetch("https://newsapi.org/v2/everything?q=coronavirus&apiKey=1ea292b985c5499aac80f70e120f4476");
    let result = await response.json();
    console.log(result);
    console.log(result.articles);

   // let p = result.articles.map((a) => { return <div>{a.urlToImage}</div> });
    //console.log(p);
    setValue(result.articles)
  }

  ak ();

  //const getNews = () => {
    // axios.get("https://newsapi.org/v2/everything?q=tesla&apiKey=1ea292b985c5499aac80f70e120f4476").then((response) => {
      //console.log(response);
   //  })
  //}


  return (
    <div>
      {
        value.map((data) => {
          return (
            <Card className={cx(styles.card, styles.root)}>
            <CardActionArea>
              <CardContent>
               <img src={data.urlToImage} className={styles.media} alt='coronavirus' />
                 <Typography color='textSecondary' gutterBottom>{data.title}</Typography>
                 <Typography variant='body2' color='textSecondary' >{data.description}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             <Button size='small' color='primary'>
               Read More
             </Button>
            </CardActions>
          </Card>
          );
        })
      }
      <h4>hello am </h4>
    </div>
         )
}

export default News