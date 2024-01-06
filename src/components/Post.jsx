// Post.js
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Post ID: {id}</h2>
      {/* Other content related to the post */}
    </div>
  );
};

export default Post;
