const request = fakeRequestPromise("yelp.com/api/coffee");
request.then(() => {
  console.log("it worked! ");
});
