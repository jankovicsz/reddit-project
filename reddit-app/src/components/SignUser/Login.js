import ControlBox from '../Main/ControlBox';

export default function Login() {
  return (
    <main>
      <div className='post-container'>
        <div className='left-container'>
          <div className='reg-content'>
            <h2>Login</h2>
            <form>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                />
              </div>
              <div className='mb-3'></div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              <div className='mb-3' />
              <button type='button' className='btn btn-primary'>
                Google LogIn
              </button>
              <div className='mb-3' />
            </form>
          </div>
        </div>
        <div className='right-container'>
          <ControlBox />
        </div>
      </div>
    </main>
  );
}
