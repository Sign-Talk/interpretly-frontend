import React from 'react';
import classes from './Error.module.css';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ErrorImage from '../assets/images/404Error.svg';

function Error() {
  const history = useHistory();
  return (
    <div className={classes.Container}>
      <div>
        <div className={classes.Title}>Oops!</div>
        <div className={classes.Subtitle}>
          We can't seem to find the page you are looking for :( If it's us, we're already working on it.
        </div>
        <div>
          <button className='Meetingchild1 mchildasbtn' onClick={() => history.push('/interpretly/dashboardclient')}>
            Back to Dashboard
          </button>
        </div>
        <div className={classes.LinkContainer}>
          <div>Or go to</div>
          <div className={classes.Links}>
            <Link to='/interpretly'>Homepage</Link>
            <Link to='/interpretly'>Status check</Link>
          </div>
        </div>
        <div className={classes.ErrImage}>
          <img src={ErrorImage} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Error;
