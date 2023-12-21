import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor(){
        super();
        // this();
        console.log(" i love you news")
        this.state={
            articles:[],
            loading:false,
            page:1,
           
            
        }

    }
    async  componentDidMount( ){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9da3cb7d57af4c8cac9e01e35547eeb0&page=1&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parseData=await data.json();
        this.setState({articles:parseData.articles, totalResult:parseData.totalResult})
    }
    prev=async()=>{
      
        document.write("me mage calalo")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9da3cb7d57af4c8cac9e01e35547eeb0&page=
        ${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parseData=await data.json();
       // this.setState({articles:parseData.articles})
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles
        })

    }
    next=async()=>{
        //if(this.state.page+1>Math.ceil(this.state.totalResult/${this.props.pageSize})){}
        
       // else{
        console.log("me pude calalo")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9da3cb7d57af4c8cac9e01e35547eeb0&page=
        ${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parseData=await data.json();
       // this.setState({articles:parseData.articles})
        this.setState({
            page:this.state.page+1,
            articles:parseData.articles
        })

 //   }
}
 
  render() {
    return (
      <div className='container my-3'>
        <div className='text-center'>
        <h3>NewsMonkey-{this.props.category} </h3> 
        <div className='row'>
            {this.state.articles.map((element) => { 
                return <div className='col-md-4'>
        <NewsItem key={element.key} title={element.title?element.title.slice(0,45):""} 
        description={element.description?element.description.slice(0,88):""}  
        imgurl= {element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
               
                
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page>=1}onClick={this.prev}className="btn btn-dark">&larr;Previous</button>
        <button type="button" onClick={this.next}className="btn btn-dark">Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
