const VK=window.VK;
export const GET_PHOTO_REQUEST='GET_PHOTO_REQUEST';
export const GET_PHOTO_SUCCESS='GET_PHOTO_SUCCESS';

export function getPhoto(year){
  return (dispatch=>{
    dispatch({
      type:GET_PHOTO_REQUEST,
      payload:year
    })
  let photos_this_year=[];
  VK.api('photos.getAll',{owner_id:42647832,v:5.101,count:200,extended:1},(r)=>{
    console.log(r.response.items);
    r.response.items.forEach(item=>{

      if (new Date(item.date*1000).getFullYear()===Number(year)){
        photos_this_year.push({url:item.sizes[3].url,likes:item.likes.count});
      }
    });
    dispatch({
      type:GET_PHOTO_SUCCESS,
      payload:photos_this_year

    })
  });
  }
  )
}
