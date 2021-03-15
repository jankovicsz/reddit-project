import { useState, useEffect } from 'react';
import db from '../../firebase/index';

import Post from './Post';
import ControlBox from './ControlBox';

export default function PostContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('test-posts')
      .get()
      .then((querySnapshot) => {
        let tempPostArray = [];
        querySnapshot.forEach((doc) => {
          const postsData = {
            ...doc.data(),
            id: doc.id,
          };
          tempPostArray = [...tempPostArray, postsData];
        });

        setPosts(tempPostArray);
      });
  }, []);

  return (
    <div className='post-container'>
      <div className='left-container'>
      {posts.map((post) => (
          <Post key={post.id} post={post} />
      ))}
      </div>
      <div className='right-container'>
        <ControlBox />
      </div>
    </div>
  );
}
