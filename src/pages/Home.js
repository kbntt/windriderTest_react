import { Link } from 'react-router-dom';
import MainFeaturedPost from './../components/MainFeaturedPost';
import FeaturedPost from './../components/FeaturedPost';
import Markdowns from './../components/Markdowns';
import Grid from '@mui/material/Grid';

const Home = () => {
  const mainFeaturedPost = {
    title: 'My life is a wind.',
    description: "Come empty, return empty. I only exist in people's Memories.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
  ];

  return (
    <div>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={1} sx={{ mt: 2 }}></Grid>
        <Markdowns fileName={'File/Project/Md/blog-post.1.md'} />
      </main>
    </div>
  );
};

export default Home;
