import ControlBox from '../Main/ControlBox';

export default function NewPost() {

    return (
<main>
      <div className='post-container'>
        <div className='left-container'>
          <div className='reg-content'>
            <h2>New Post</h2>
            <form>
              <div className='mb-3'>
                <label htmlFor='title' className='form-label'>
                  * Title
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  name='title'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='url' className='form-label'>
                  URL
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='url'
                  name='url'
                />
              </div>
              <div className='mb-3'></div>
              <button type='submit' className='btn btn-primary'>
                Submit
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