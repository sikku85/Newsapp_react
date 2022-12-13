import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {tittle,description,imgurl,newsurl,dateofpost}=this.props;
    return (
    <>
      <div className="card container my-4 " style={{width: "18rem"}}>
          <img src={imgurl?imgurl:"https://img.etimg.com/thumb/msid-96144888,width-1070,height-580,imgsize-84144,overlay-etmarkets/photo.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">{description}....</p>
          <p>{dateofpost}</p>
          <a rel="noreferrer" href={newsurl} target="_blank"><button className="custom-btn btn-7"><span>Reads More</span></button></a>
          {/* <a href={newsurl} target="_blank" className="btn btn-primary btn-sm">ReadMore</a> */}
        </div>
      </div>
     
    </>
    )
  }
}
