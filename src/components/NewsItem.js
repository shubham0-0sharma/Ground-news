import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl , aurthor, date,source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-info " style ={{left:"90%",zIndex : 1}}>
    {source}
  </span>
                    <img
                        src={
                            !imageUrl
                                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                                : imageUrl
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a
                            rel="noreferrer"
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-sm btn-dark"
                        >
                            Read More
                        </a>
                        <div className= "card-footer">
                            <small className= "text-muted">
                                by <b>{aurthor?aurthor:"unknown"}</b> on {new Date(date).toGMTString()}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
