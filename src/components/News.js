import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        category: "general",
        country: "in",
        pageSize: 10,
    };
    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    };
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
        };
    }

    async update() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fd60328d07f407db32ab5532e866c63&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    async componentDidMount() {
        this.update();
    }

    styles = {
        margin: "35px 0px",
    };

    fetchMoreData = async () =>{
        this.setState({page:this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fd60328d07f407db32ab5532e866c63&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }

    render() {
        return (
            <>
                <h1 className="text-center" style={this.styles}>
                    My NewsApp - Top Headlines
                </h1>
                {/* {this.state.loading && <Spinner />} */}


                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}>
                
                    <div className="container">
                <div className="row">
                    {
                        this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={
                                            element.title ? element.title : ""
                                        }
                                        description={
                                            element.description
                                                ? element.description
                                                : ""
                                        }
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        date={element.publishedAt}
                                        aurthor={element.author}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                </div>
               
                </div>
        </InfiniteScroll>
            </>
        );
    }
}

export default News;
