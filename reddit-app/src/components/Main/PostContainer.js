import Post from './Post';
import ControlBox from './ControlBox';

export default function PostContainer() {
    return (
        <div className='post-container'>
            <div className="left-container">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="right-container">
                <ControlBox />
                <ControlBox />
                <ControlBox />
            </div>
        </div>
    )
}