import React from 'react';
import './App.css';
import Bank from './Bank';


// Create a HTML page with a list element for movie titles.
// Add a script at the bottom of the page body.
// Create a constructor function named Movie. Each movie should be an object
// composed of a title and rating.
// Add a method to the Movie prototype that renders the object as a list item. It
// should contain the title wrapped in an anchor. Add a click handler to the anchor.
// It should display an alert giving the movie’s rating.
// Create an array of five movies, e.g.:
// var movies = [
//  ];
// new Movie("Shawshank Redemption", 9.2),
//  ...
// Add a load handler to the window object that populates the list.
//  Save your changes and test the code thoroughly.
 

const Movie = function constructor(title, rating ){
  this.title = title;
  this.rating = rating;
  const handleRatingClick = () => {
    alert("Rating " + this.rating)
  }
  this.anchorTag = function renderItem() {
    return (
      <ul><a href="#" onClick={() => handleRatingClick()}>Title: {this.title}</a> </ul>
    );
  }
}

let movieTitles = [
  new Movie("Shawshank Redemption", 9.2),
  new Movie("Shawshank Moo", 10),
  new Movie("Red Dead Redemption", 9.2),
  new Movie("Green Mile", 9.2),
  new Movie("Supermario", 9.2),
]

let sampleProducts = [
  {"description": "Cricket bat", "price": 150},
  {"description": "Cricket ball", "price": 30},
  {"description": "Cricket gloves", "price": 95}
  ];
let productIterator = sampleProducts.entries();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: sampleProducts,
      product: {},
      movies: movieTitles,
      bank: new Bank()
  };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.populateAccounts = this.populateAccounts.bind(this);

  }

  nextProduct() {  
    let product = productIterator.next();
    if (product.done == true) {
      productIterator = sampleProducts.entries();
      product = productIterator.next();
    }
    return product.value[1] 
  }

  handleClick() {
    this.setState({
       product: this.nextProduct()
    });
  }

  toListElement() {
    return this.state.product.description || "click to show product"
  }

  populateAccounts() {
    let { bank } = this.state;
    bank.openAccount("Matt", 1000);
    bank.openAccount("Jack", 2000);
    bank.openAccount("Ben", 5000);
    bank.openAccount("Jill", 8000);
    this.setState({
      bank: bank
    })
    // bank.printAllToConsole();
  }

  renderBankAccounts(){    
    let accountNames = [];
    if(this.state.bank.accounts.size > 0){
       this.state.bank.accounts.forEach((_, idx) => accountNames.push(
          <ul>Account name: {this.state.bank.getAccount(idx).name}, Balance: {this.state.bank.getAccount(idx).balance}</ul>
       ));
       return accountNames;
    }
  }

  render() {
    return(
      <>
      <li>
        {this.toListElement()};
      </li>
      <button onClick={this.handleClick}>
        Next
      </button>

      {this.state.movies.map(x => x.anchorTag())}

      <button onClick={this.populateAccounts}>
        Add Bank Accounts
      </button>

       {this.renderBankAccounts()}
      </>
    );

  }
}


export default App;
