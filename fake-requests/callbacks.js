const fakeDataFromCallback = (url, sucess, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection timeout");
    } else {
      success("here is your fake data from " + url);
    }
  });
};

fakeDataFromCallback(
  "boobs.com/page1",
  function (response) {
    console.log("it workedd!");
    console.log(response);
    fakeDataFromCallback(
      "books.com/page2",
      function (response) {
        console.log("it workedd again!!");
        console.log(response);
        fakeDataFromCallback(
          "books.com/page3",
          function (response) {
            console.log("it workedd!");
            console.log(response);
          },
          function (err) {
            console.log("it didnt work! erro, fucking error!");
          }
        );
      },
      function (err) {
        console.log("it didnt work! erro, fucking error!");
      }
    );
  },
  function () {
    console.log("error");
  }
);
