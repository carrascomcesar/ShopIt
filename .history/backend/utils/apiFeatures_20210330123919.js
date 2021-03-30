class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //Search Product by Keyword
  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  // Filter Products by Price, Ratings, Etc.
  filter() {
    const queryCopy = { ...this.queryString };

    // Removing fields from the Query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    //Filter for Price, Ratings, Etc.
    let queryString = JSON.stringify(queryCopy);
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }
  pagination(resultsPerPage) {
    const currentPage = Number(this.queryString.page) || 1;
  }
}

module.exports = APIFeatures;
