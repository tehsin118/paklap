import Web3 from "web3";
var web3;

if (typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  web3 = new Web3(
    new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/")
  );
}
export default web3;
