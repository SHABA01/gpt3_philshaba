import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google' className='google'/>
      </div>
      <div>
        <img src={slack} alt='slack' className='slack'/>
      </div>
      <div>
        <img src={atlassian} alt='atlassian' className='atlassian'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox' className='dropbox'/>
      </div>
      <div>
        <img src={shopify} alt='shopify' className='shopify'/>
      </div>
    </div>
  )
}

export default Brand