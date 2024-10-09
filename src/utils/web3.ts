import Web3 from "web3";

const web3 = new Web3();

export const convertNumberToHex = (number: string | number) => {
  const wei = web3.utils.toWei(number.toString(), "ether");
  const hexEncodedNumber = web3.utils.toHex(wei);
  return hexEncodedNumber;
};

export const convertHexToNumber = (hexEncodedNumber: string) => {
  const wei = web3.utils.toBN(hexEncodedNumber);
  const decimalNumber = web3.utils.fromWei(wei, "ether");
  const roundedNumber = parseFloat(decimalNumber).toFixed(1);

  return roundedNumber;
};
