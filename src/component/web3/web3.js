import Web3 from 'web3/dist/web3.min'
import { ERC20ABI, LinkBerrySlicesABI, LinkBerrySlicesAddress, TOKEN_GOMETA } from './Constent'
import { EthereumProvider } from '@walletconnect/ethereum-provider'
import axios from "axios"


// let web3 = new Web3("https://sepolia.infura.io/v3/6e1530cd10fb4631a54c14a5f07b25a6") ;
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.testnet.mantle.xyz"));
var provider;
var walletprovider;

const walletConnectProv = async()=>{
  provider = await EthereumProvider.init({
    projectId:'b9bd638e50d4ce444f33b0499cac8433',
    chains: [11155111],
    showQrModal: true,
    methods: [
      "eth_sendTransaction",
      "eth_signTransaction",
      "eth_sign",
      "personal_sign",
      "eth_signTypedData",
    ],
    events: ["chainChanged", "accountsChanged"]
  })
  return provider
}


export const WalletConnect = async () => {
  try {
    provider = await walletConnectProv()
    await provider.disconnect()
    const data = await provider.enable()
    web3 = new Web3(provider)
    walletprovider = provider
  } catch (error) {
    console.log(error)
  }
}

export const createExternalWallet = async()=>{
    try {
        const newAccount = web3.eth.accounts.create();
        return {
            address: newAccount.address,
            key:newAccount.privateKey
        }
    } catch (error) {
        console.log(error)
    }
}


export const DissconnectWallet = async () => {
  provider = await walletConnectProv()
  await provider.disconnect()
  web3 = null
}

export const MetaMasklogin = async () => {
  const data = await window.web3.currentProvider.enable()
  web3 = new Web3(window.web3.currentProvider)
  walletprovider = await window.web3.currentProvider
  return data[0]
}

export const generateVRS = async(days, connections, followers)=>{
  try {
    const message = `Days: ${days}, Connections: ${connections}, Followers: ${followers}`;
    const account = web3.eth.accounts.privateKeyToAccount("0x7b1d5017204cd1fc3bfa0f83abd075f8ef6318a9888dbf2eef9f3fcb7be1618e");
    const signedMessage = await web3.eth.accounts.sign(message, account.privateKey);
    console.log(signedMessage)
  } catch (error) {
    console.log(error)
  }
}

export const getUserAddress = async () => {
  try {
    const address = await web3.eth.getAccounts()
    return address[0]
  } catch (error) {
    // console.log(error)
  }
}


export const get_Metapower_Contract= async () => {
  try {
  const Contract = new web3.eth.Contract(LinkBerrySlicesABI, LinkBerrySlicesAddress)
  return Contract
  } catch (error) {
    // console.log(error)
  }
}


export const get_ERC_20_Contract= async (address) => {
    try {
    const Contract = new web3.eth.Contract(ERC20ABI, address)
    return Contract
    } catch (error) {
      // console.log(error)
    }
  }


export const get_Token_Balance = async (tokenAddress, userAddress) => {
  try {
    
    const Contract = await get_ERC_20_Contract(tokenAddress)
    const balance = await Contract.methods.balanceOf(userAddress).call();
    const bal = await fromwie(balance)
    return Number(bal)
  } catch (error) {
    console.log(error)
  }
}

export const towie = async (amount) => {
  try {
    const number = await web3.utils.toWei(amount.toString(), 'ether')
    return number
  } catch (error) {
    console.log(error)
  }
}

export const fromwie = async (amount) => {
  try {
    const number = await web3.utils.fromWei(amount.toString(), 'ether')
    return number
  } catch (error) {
    console.log(error)
  }
}

export const GetChainId = async () => {
  try {
    const id = await web3.eth.getChainId()
    return id
  } catch (error) {

  }
}


export const userBalanceOfChain = async (userAddress) => {
  try {
     const data = await axios.post('https://rpc.testnet.mantle.xyz', {
      "jsonrpc": "2.0",
      "method": "eth_getBalance",
      "params": [userAddress, "latest"],
      "id": 1
    }).then((res) => {
      const bal = (parseInt(res.data.result, 16)/10**18)
      console.log("Native balance", bal)
      return Number(bal)
    }).catch((error) => {
      console.log(error)
    })
    return data
  } catch (error) {
    console.log(error)
  }
}


export const convertToLowercase =(str)=> {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(charCode + 32);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}


// export const Approve = async () => {
//   try {
//     const contract = await get_ERC_20_Contract(TOKEN_GOMETA)
//   const data = await contract.methods.approve(MetaPowerADDRESS,115792089237316195423570985008687907853269984665640564039457584007913129639935n,).send({ from: await getUserAddress() })
//   return data
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const Allow = async(owner)=>{
//   try {
//     const contract = await get_ERC_20_Contract(TOKEN_GOMETA)
//     const data = await contract.methods.allowance(owner, MetaPowerADDRESS).call();
//     return data;
//   } catch (error) {
//     // console.log(error)
//   }
// }

export const mainprovider = ()=>{
  return walletprovider
}

