import React, { Component } from 'react';
import HomeData from '@/components/Home/HomeData'
import { Link} from 'react-router-dom';
import Search from './search';


class Com extends Component {
  componentDidMount () {
  }
  render () {
    return (
      <div className='box'>
        <Link to='/search'>
          <Search />
        </Link>
        <div className="content">
          <HomeData />
        </div>
      </div>
    )
  }
}

export default Com