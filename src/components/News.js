import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
    
//   articles = [
//     {
//       source: {
//         id: "espn-cric-info",
//         name: "ESPN Cric Info",
//       },
//       author: null,
//       title:
//         "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//       description:
//         "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//       publishedAt: "2020-04-27T11:41:47Z",
//       content:
//         "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
//     },
//     {
//       source: {
//         id: "espn-cric-info",
//         name: "ESPN Cric Info",
//       },
//       author: null,
//       title:
//         "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//       description:
//         "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//       url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//       urlToImage:
//         "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//       publishedAt: "2020-03-30T15:26:05Z",
//       content:
//         "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//     },
//   ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      postperpage: 1,
      totalresults: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1bdfef8e25564ef8a9df9a3d46e9b918&page=1";
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({
      articles: parseDate.articles,
      totalresults: parseDate.totalResults,
      postperpage: Object.keys(parseDate.articles).length,
    });
  }
  // next function

  handlenext = async () => {
    // console.log("next");
    // console.log(this.state.totalresults);

    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalresults / this.state.postperpage)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1bdfef8e25564ef8a9df9a3d46e9b918&page=${
        this.state.page + 1
      }`;
      let data = await fetch(url);
      let parseDate = await data.json();
      this.setState({ articles: parseDate.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parseDate.articles,
        postperpage: Object.keys(parseDate.articles).length,
      });
    }
  };

  //   previous function
  handleprevious = async () => {
    // console.log("pre");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1bdfef8e25564ef8a9df9a3d46e9b918&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({ articles: parseDate.articles });
    this.setState({
      page: this.state.page - 1,
      articles: parseDate.articles,
      postperpage: Object.keys(parseDate.articles).length,
    });
  };

  render() {
    let {heading,text_color}=this.props;
    return (
      <>
        <div className="container">
          <h1 className={`text-${text_color}`}>{heading}</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <Newsitem
                    tittle={element.title ? element.title : ""}
                    imgurl={element.urlToImage}
                    description={
                      element.content ? element.content.slice(0, 150) : ""
                    }
                    newsurl={element.url}
                    dateofpost={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              onClick={this.handleprevious}
              className="btn btn-5"
            >
              <span>Previous</span>
            </button>
            <button
              type="button"
              onClick={this.handlenext}
              className="btn btn-5"
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
