import Head from 'next/head';
import { PostCard, Categories, PostWidget, Layout } from '../components/index';
import FeaturedPosts from '../sections/FeaturedPosts';
import { getPosts } from '../services/';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto  min-h-screen   px-5 py-2  lg:px-10 ">
      <Head>
        <title>Graph CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className=" grid grid-cols-1 gap-12  lg:grid-cols-12 ">
        <div className="col-span-1   lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
