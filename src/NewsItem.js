import React, { Component } from 'react'

export class NewsItem extends Component {


    constructor(){
        super();
       // this();
        console.log(" i love you")

    }
  render() {
    
    let {title,description,imgurl,newsurl,author,date}=this.props;
    return (
    

      <div className='my-3'>
       
        <div className="card " style={{width: "20rem"}} >
  <img src={!imgurl?"https://media.cnn.com/api/v1/images/stellar/prod/231218185655-01-iceland-volcano-eruption-121823.jpg?c=16x9&q=w_800,c_fill":imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-muted'>By {author}on {new Date(date).toDateString()}</small></p>
    <a href={newsurl}className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
