# Getting Started with Tiny Marketplace

This project is the development version of Tiny Marketplace.

Get addresses of contracts deployed on local Ganache network.

Replace addresses in `src/blockchain/constants.ts` by new addresses.

```script
export const addresses = {
  factory: {
    1337: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',     // Tiny NFT Factory
  },
  marketplace: {
    1337: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',     // Tiny NFT Marketplace
  },
  tiny: {
    1337: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'      // Default Tiny Collection
  }
}
```

Install yarn:

```script
yarn install
```

Run app:

```script
yarn start
```

Install Metamask on your browser. (Use the same mnemonics as when deploying.)

Enjoy testing! 😎

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### How to see your NFT after creating it

Once you make an nft. Go to http://localhost:3000/account/{your wallet addr} to see your NFTs.

Go to http://localhost:3000/asset/0 to see your NFT directly.
