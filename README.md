# To run Front-End

1. Go to profile-card `cd profile-card` and run `npm install`.
2. To run, type `npm start`.
3. To run tests go to the test folder `cd src/test` and run `npm test`.

In order for the application to work both the client and server must be running.

The card type can be set in `cardType.json` (intended for personal testing only) or it can be entered
as a string in the `Navigation` component.

The types can either be `horizontal` or `vertical` (case sensitive). Any other setting will result in 
an error.

The application has been set to run on port `5000` but can be changed in `package.json`.

## Objectives complete

* Added horizontal and vertical designs for cards
* Added unit test
* Added interface that can be extended to include toggle for light and dark modes
* Some coverage added for components

## Minor Issues

There appears to be something strange going on when running the tests
that prevents css file from being parsed. Despite adding `file.transform` and
enabling `jsdom` typescript still doesn't seem to like it, other than that
it runs perfectly fine.
