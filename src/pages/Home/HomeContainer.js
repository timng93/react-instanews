import React, {Component} from "react";
import Home from "./Home";
import Button from "../../components/Button";

class HomeContainer extends Component {
  state = {
    articles: []
  };

  fetchArticles = () => {
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=7qqRq2NUxeg2nAykf0D7PE2lRmUULcdN`
    )
      .then(res => res.json())
      .then(json => this.setState({articles: json.results}));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchArticles();
  };

  render() {
    return (
      <div>
        <Button handleSubmit={this.handleSubmit} />
        <Home articles={this.state.articles} />;
      </div>
    );
  }
}
export default HomeContainer;
