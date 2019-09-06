
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Page extends Component{
  onBtnClick(event){
    const year=event.target.innerText;
    this.props.getPhoto(year);
  }

  render(){
    const {year,photos,isFatching}=this.props;
    console.log(photos);
    return (
      <div className='ib page'>
        <p>
          <button className='btn' onClick={this.onBtnClick.bind(this)}>2018</button>{' '}
          <button className='btn' onClick={this.onBtnClick.bind(this)}>2017</button>{' '}
          <button className='btn' onClick={this.onBtnClick.bind(this)}>2014</button>{' '}
          <button className='btn' onClick={this.onBtnClick.bind(this)}>2013</button>
        </p>
        <h3>{year} год</h3>
        {isFatching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
        {photos.map(photo=>{
          return (
            <div >
              <img src={photo.url}  height='80px'/>
              <p>{photo.likes}</p>
            </div>)
        })}
      </div>
    )
  }
}

Page.propTypes={
  year:PropTypes.number.isRequired,
  photos:PropTypes.array.isRequired
}

export default Page
