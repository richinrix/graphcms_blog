import React from 'react';
import { getPosts, getPostDetails } from '../../services/';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '../../components';

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post[0]} />
          <Author author={post[0].author} />
          <CommentsForm slug={post[0].slug} />
          <Comments slug={post[0].slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={
                post.categories &&
                post.categories.map((category) => category.slug)
              }
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths({ params }) {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
