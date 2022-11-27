import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content' >
        <img src='https://images.pexels.com/photos/14520175/pexels-photo-14520175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pic' />

        <div className='user' >
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />

          <div className='info' >
            <span>Alex</span>
            <p>Posted 3 days ago</p>
          </div>
          <div className='edit'>
          <Link to={'/write?edit=2'}><img src={Edit} alt='edit' /></Link>
          <Link><img src={Delete} alt='delete' /></Link>
          </div>
        </div>
        <div data-aos="fade-up">
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/><br/>Maecenas volutpat blandit aliquam etiam. In cursus turpis massa tincidunt dui ut ornare. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Tristique magna sit amet purus gravida quis blandit turpis. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Neque egestas congue quisque egestas. Condimentum mattis pellentesque id nibh tortor id.<br/><br/> Porttitor rhoncus dolor purus non enim praesent. Eget egestas purus viverra accumsan in nisl nisi. Aliquam ut porttitor leo a diam sollicitudin tempor id. Id consectetur purus ut faucibus pulvinar elementum integer. Non sodales neque sodales ut etiam. Egestas sed sed risus pretium quam vulputate dignissim. Nibh venenatis cras sed felis eget velit aliquet. Nulla at volutpat diam ut. Aliquam purus sit amet luctus venenatis lectus. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Turpis massa sed elementum tempus egestas sed sed risus. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis.</p>
        </div>
      </div>
      <div className='menu'>
        <Menu/>
      </div>
    </div>
  )
}

export default Single
