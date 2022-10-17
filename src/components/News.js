import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
export class News extends Component {

    static defaultProps = {
        category : 'general',
        country : "in",
        pageSize : 8,
    }
    static propsTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4fd60328d07f407db32ab5532e866c63&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4fd60328d07f407db32ab5532e866c63&page=${
            this.state.page - 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
            
        });
    };

    handleNextClick = async () => {
        if (
            !(this.state.page + 1 >
            Math.ceil(this.state.totalResults / this.props.pageSize)
        )) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=4fd60328d07f407db32ab5532e866c63&page=${
                this.state.page + 1
            }&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            });
        }
    };
    styles = {
        margin : "35px 0px",
    }
    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={this.styles}>My News App - Top Headlines</h1>
                {(this.state.loading) && <Spinner />}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : ""}
                                    description={
                                        element.description
                                            ? element.description
                                            : ""
                                    }
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        {" "}
                        &larr; Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(
                                this.state.totalResults / this.props.pageSize
                            )
                        }
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
