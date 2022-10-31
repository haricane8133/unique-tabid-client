# Getting Started with Unique-TabID

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This makes use of unique-tabid, and gives you a React based example on how to use it.

Have a look at the second commit for the exact changes needed.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Note

Sometimes when run in development mode, React renders the component twice, and so the useEffect in this example gets called twice and our unique-tabid's init method also gets called twice. When the call happens the second time, we will always get the response as the tab is not a new tab... That is because to unique-tabid, remounting a component is very similar to a page refresh.