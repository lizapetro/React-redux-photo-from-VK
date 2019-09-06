import React,{Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component{
  render(){
    const {name,isFetching,error}=this.props;
    return(
      <div className='ib user'>
        {(error)?
          <p>Во время запроса произошла ошибка попробуйте снова</p>:<p></p>
        }
        {(isFetching)?<p>Идет загрузка...</p>:<p>Привет {name}!</p>}
        <button onClick={this.props.handleLogin}>Enter</button>
      </div>
    )
  }
}

User.propTypes={
  name:PropTypes.string.isRequired,
}
export default User;
