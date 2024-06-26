function findAccountById(accounts, id) {
  const found = accounts.find((account)=>account.id == id);
  return found;
  
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

function sortAccountsByLastName(accounts) {
  const last= accounts.sort((lastA, lastB)=> lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase()?1:-1)
return last;
}



//this portion is where I am currently having trouble. I havnt even began to have trouble on the other two documents yet. 
function getAccountFullNames(accounts) {
  const fullAccounts = accounts.map(fullAccount => accounts.firstName + " " + accounts.lastName);
  console.log(fullAccounts);
}




// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
