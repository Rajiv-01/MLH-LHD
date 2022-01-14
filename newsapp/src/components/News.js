import React, { useEffect, useState } from "react";
import Newsbox from "./Newsbox";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalize(props.category)} - Newsflash`;

  const update = async () => {
    props.changeProgress(20);
    let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.changeProgress(30);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalPage(parsedData.totalResults);
    setLoading(false);
    props.changeProgress(100);
  };
  useEffect(() => {
    update(); // eslint-disable-next-line
  }, []); //eslint-disable-next-line
  // async componentDidMount() {
  // let url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c8663960f02446f2ba62674b9f41e623&page=1&pageSize=${props.pagesize}`;
  // this.setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // this.setState({
  //   articles: parsedData.articles,
  //   totalPage: parsedData.totalResults,
  //   loading: false,
  // });

  const fetchMoreData = async () => {
    let url = ` https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=c8663960f02446f2ba62674b9f41e623&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalPage(parsedData.totalResults);
    setLoading(false);
  };

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=c8663960f02446f2ba62674b9f41e623&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pagesize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   loading: false,
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.update(this.state.page - 1);
  // };
  // handleNextClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=c8663960f02446f2ba62674b9f41e623&page=${
  //   //   this.state.page + 1
  //   // }&pageSize=${props.pagesize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({ page: this.state.page + 1 });
  //   this.update(this.state.page + 1);
  // };

  return (
    <>
      <div className="container my-5 ">
        <h1 className="text-center " style={{ marginTop: "100px" }}>
          NewsFlash - Top Headlines
        </h1>
        <h2
          className="text-center my-1"
          style={{
            textDecoration: "underline",
            color: "Crimson",
            fontFamily: "monospace",
          }}
        >
          {props.category.toUpperCase()}
        </h2>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalPage + 1}
          loader={
            <div className="text-center my-5">{loading && <Spinner />}</div>
          }
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <Newsbox
                      title={element.title ? element.title.slice(0, 65) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 150)
                          : "Click To Read More"
                      }
                      imageurl={element.urlToImage}
                      newurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      {/* {!this.state.loading && (
          <div className="container d-flex justify-content-between mb-5">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-outline-dark prev-next "
              style={{ width: "150px" }}
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalPage / props.pagesize)
              }
              type="button"
              className="btn btn-outline-dark prev-next"
              style={{ width: "150px" }}
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        )} */}
    </>
  );
}
News.defaultProps = {
  country: "in",
  pagesize: "12",
  category: "default",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
