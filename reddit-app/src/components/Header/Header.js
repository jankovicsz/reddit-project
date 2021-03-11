import './header.scss';
import logo from '../../assets/reddit-logo2.png';

export default function Header() {
  return (
    <header>
      <div className='title-text'>space</div>
      <div className='head-line'>
      <img src={logo} alt='logo' />
          <p>post to /r/space: news, articles and discussion</p>
        <button className='btn btn-primary'>Log in</button>
        <button className='btn btn-light sign-up'>Sign up</button>
      </div>
    </header>
  );
}
