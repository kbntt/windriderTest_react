import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const dataList = [
  {
    title: '2021-12-30 제주도',
    imageUrl: 'https://source.unsplash.com/random',
    contents:
      '청주에서 비행기 타고 제주도로 갔다.숙소는 동한이가 사용하고 있는 원룸에서 해결.사진은 제주시 한경면 금등리에서 1993.11월 부터 1995년 11월까지 군(전경)생활한 초소 앞바다 풍경 ',
  },
  {
    title: '2021-07-27 완도에서 제주도가는 배에서',
    imageUrl: 'https://source.unsplash.com/random',
    contents:
      '오산에서 새벽 5시에 킴코 익사이팅 300 타고 출발해서 오후 1시경에 완도 여객터미널에 도착했다. 오후 3시 실버 클라우드 타고 제주도로 출발.한라산과 구름의 조화가 아름답다.',
  },
];

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  media: {
    height: 550,
    [theme.breakpoints.down('sm')]: {
      height: 250,
    },
  },
}));

const Blog = () => {
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();
  useEffect(() => {
    const fetchDataList = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setDataList(null);
        // loading 상태를 true 로 바꿉니다. http://localhost:8083/home/getTest   https://jsonplaceholder.typicode.com/users
        setLoading(true);
        const response = await axios.get('/home/getTest');
        console.log(response.data);
        setDataList(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchDataList();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!dataList) return null;

  return (
    <>
      {dataList.map((data) => (
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            component="img"
            image={data.imgUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.contents}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Blog;
