import SocialButtons from "./social-buttons";
import React from "react";
import quoteGenerator from "./quotes";

class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      quoteText: quoteGenerator[0].quoteText,
      author: quoteGenerator[0].author,
    };
    this.newQuote = () => {
      let quoteNum = Math.floor(Math.random() * quoteGenerator.length);
      let colorCode = Math.random() * 355;
      let r = document.querySelector(":root");
      document.querySelector(".text").classList.add("animateTexts");
      setTimeout(function () {
        document.querySelector(".text").classList.remove("animateTexts");
      }, 1000);
      document.querySelector(".author").classList.add("animateTexts");
      setTimeout(function () {
        document.querySelector(".author").classList.remove("animateTexts");
      }, 1000);
      r.style.setProperty("--primary-color", `hsl(${colorCode}, 95%, 60%)`);
      this.setState({
        quoteText: quoteGenerator[quoteNum].quoteText,
        author: quoteGenerator[quoteNum].author,
      });
    };
  }
  render() {
    return (
      <div className="quote-box">
        <h1 className="text">
          <i class="fas fa-quote-left"></i>
          {this.state.quoteText}
        </h1>
        <p className="author">- {this.state.author}</p>
        <div className="buttons">
          <div className="social-buttons">
            <SocialButtons
              link="https://twitter.com/intent/tweet"
              platform="twitter"
            />
            <SocialButtons
              link="https://twitter.com/intent/tweet"
              platform="tumblr"
            />
          </div>
          <button
            className="new-quote button"
            onClick={this.newQuote.bind(this)}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
