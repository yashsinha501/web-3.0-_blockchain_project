require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity:'0.8.0',
  networks:{
    Goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/DpYV30kGrcqB8dHZ2zvWtgxF1VpJsP8f',
      accounts:['62ec61c3e8786bbe99ad2e4fa9cff774b663226c01e7cd5556e46913ea8c01e7']
    }
  }
}