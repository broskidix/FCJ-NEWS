import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  Updatedata = async () => {
    let str1 = `everything?q=${this.props.searchStatement}`;
    let str2 = `top-headlines?country=${this.props.country}&category=${this.props.category}`;
    let url = `https://newsapi.org/v2/${(this.props.query)?str1:str2}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.props.progress(10);
    let data = await fetch(url);
    this.props.progress(60);
    let parseData = await data.json();
    console.log(this.state.article.length);
    console.log(parseData);
    this.props.progress(100);
    this.setState({
      article : this.state.article.concat(parseData.articles),
      loading : false,
      totalResults : parseData.totalResults,
    })
  }

  async componentDidMount() {
    await this.Updatedata();
  }

  fetchMoreData = async () => {
    this.setState({loading : true,page : this.state.page+1,});
    await this.Updatedata();
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-3 ">FCJ News</h1>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length <= 80}
        />
        <div className="row">
          {this.state.article &&
            this.state.article.map((message) => {
              return (
                <div className="col-md-4" key={message.url}>
                  <NewsItem
                    title={(message.title !== null || message.title !== "undefined") ? message.title : "it is title"}
                    description={
                      message.description !== null || message.description !== "undefined" ? message.description : ""
                    }
                    imageUrl={
                      message.urlToImage !== null || message.imageUrl !== "undefined"
                        ? message.urlToImage
                        : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13590/production/_97584297_breaking_news.png"
                    }
                    newsUrl={message.url}
                  />
                </div>
              );
            })}
        </div>
        {(this.state.loading)?<Spinner/>:null}
      </div>
    );
  }
}
