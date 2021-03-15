import downvote from '../../assets/downvote.png';
import upvote from '../../assets/upvote.png';

export default function Post(props) {

  const {
    post: { score, title, url, owner, timestamp },
  } = props;
  const postDate = new Date(timestamp * 1000);
  const hours = Math.round((Date.now() - postDate) / 3600000);
  const days = Math.round((Date.now() - postDate) / 86400000);
  const month = Math.round((Date.now() - postDate) / 2592000000);

  return (
    <div className='post'>
      <div className='vote'>
      <div>
      <img src={upvote} alt='upvote'/>
      </div>
        {score}
        <div>
        <img src={downvote} alt='downvote' />
        </div>
      </div>
      <div className='content'>
        <h2>{title}</h2>
        <div className='sender'>
          Submitted 
          <span className='time'>
            {days < 1 && <p>{hours} hours ago</p>}
            {days > 1 && days < 30 && <p>{days} days ago</p>}
            {days > 30 && <p>{month} month ago</p>}
          </span> 
          by <span className='owner'>{owner}</span>
        </div>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
}
