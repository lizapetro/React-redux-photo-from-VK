import React,{Component} from 'react';
import './App.css';
import Page from '../component/Page';
import User from '../component/User';
import {getPhoto} from '../actions/PageActions';
import {handleLogin} from '../actions/UserActions';

import {connect} from 'react-redux';

class App extends Component{
  render(){
    const {users,page,getPhotoAction,getLoginAction}=this.props;
    return (
      <div className='row'>
        <Page photos={page.photos} year={page.year} isFatching={page.isFatching} getPhoto={getPhotoAction}/>
        <User name={users.name} isFetching={users.isFetching} error={users.error} handleLogin={getLoginAction}/>
      </div>
    )
  };
}

//Приклеиваем данные из стор
const mapStateToProps=store=>{
  console.log(store);
  return {
    users:store.user,
    page:store.page
  }
}

const mapDispatchToProps=dispatch=>{
  return{
  getPhotoAction:year=>dispatch(getPhoto(year)),
  getLoginAction:()=>dispatch(handleLogin())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);//Подключи React компонент к Redux store
