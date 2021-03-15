import ControlBox from '../Main/ControlBox';

export default function Registration() {
  return (
    <main>
      <div className='post-container'>
        <div className='left-container'>
          <div className='reg-content'>
            <h2>Registration</h2>
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
              <div className='mb-3'>
                <label htmlFor='password-again' className='form-label'>
                  Password again
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password-again'
                  name='password-again'
                />
              </div>
              <div className='mb-3'/>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
              <div className='mb-3'/>
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
