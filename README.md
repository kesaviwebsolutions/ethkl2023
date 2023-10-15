# LinkBerry v 1.0.0
Repository for hackathon submission in ETH Kuala Lumpur 2023

Features of linkBerry:
- Monetisation of professional value for linkedin users
- Trading of slices (shares of user) on mantle network via smart contract
- SliceWorth driven by user's engagement with link.berry, user's no of connections, no of followers on linkedin profile

## Screenshots of the webapp
![On Boarding Screen](https://bafybeiheoh7dzefvuqjvxnp5nm4ulpdrfceqhgv6y53srlq3ur4j67qw5i.ipfs.nftstorage.link/linkberry-screen1.png "On Boarding Screen")

![Wallet creation](https://bafybeiheoh7dzefvuqjvxnp5nm4ulpdrfceqhgv6y53srlq3ur4j67qw5i.ipfs.nftstorage.link/2023-10-15%2010.29.47.jpg "Wallet Creation")

![Landing Page](https://bafybeiheoh7dzefvuqjvxnp5nm4ulpdrfceqhgv6y53srlq3ur4j67qw5i.ipfs.nftstorage.link/2023-10-15%2010.29.51.jpg "Landing page")

![Invite Codes](https://bafybeiheoh7dzefvuqjvxnp5nm4ulpdrfceqhgv6y53srlq3ur4j67qw5i.ipfs.nftstorage.link/2023-10-15%2010.33.18.jpg "Invite Codes")

![Trading Slices](https://bafybeiheoh7dzefvuqjvxnp5nm4ulpdrfceqhgv6y53srlq3ur4j67qw5i.ipfs.nftstorage.link/2023-10-15%2010.38.03.jpg "Trading Slices")

## Smart Contract for trading of slices on Mantle Network ##
[Contract for LinkBerry's Slices] (https://explorer.testnet.mantle.xyz/address/0xc5404FD309E06EB7AdCc335B5Eb8CD4fB89Ae1E3)

## Improvements made over friend.tech in the Smart Contract ##

### Introduction of "SliceWorth" which is dependent upon following 3 factors:
- Age of account on linkBerry
- No of connections on linkedin
- No of followers on linkedin

Following table explains the allocation (all values are in wei):
| Attribute   |      Wei Allocation      |  MNT Value |
|-------------|:-------------------------:|----------:|
| Age of account |  86400 per day | 0.0000000000000864 |
| Connections |    1 trillion per connection   |   0.000001 |
| Followers | 100 billion per follower |    0.0000001 |

These values are forever fixed in the smart contract and can't be changed.

E.g. if you have been using link.berry for a year, have 5000 connections and 100k followers, your slice worth will be calculated as given below

One slice worth = 365 * 86400 + 5000 * 1e12 + 100000 * 100e9 = 15000000031536000 = 0.015 MNT

```
function calculateSliceWorth(uint256 _days, uint256 _connections, uint256 _followers) public view returns (uint256) {
        uint256 sliceWorth = _days * satsPerDay + _connections * satsPerConnection + _followers * statsPerFollower;
        return sliceWorth;
    }
```

In addition to price of individual's slice driven by the trading (ad per friend.tech) algorithm, the per slice worth (depicting the professional worth of the user) gets added to the price while trading the slices. Following formula is being used to determine the value:

```
function getBuyPricePerSlice(address linkberryUser, uint256 _days, uint256 _connections, uint256 _followers) public view returns (uint256) {
        uint256 sliceBuyCost = getPrice(slicesSupply[linkberryUser], 1) + calculateSliceWorth(_days, _connections, _followers);
        return sliceBuyCost;
    }

    function getSellPricePerSlice(address linkberryUser, uint256 _days, uint256 _connections, uint256 _followers) public view returns (uint256) {
        uint256 sliceSellVal = getPrice(slicesSupply[linkberryUser] - 1, 1) + calculateSliceWorth(_days, _connections, _followers);
        return sliceSellVal;
    }
```
### Restricting slice owners from hogging all the share and manipulate/drive the price upwards
Slice owners can't buy anymore if they are already holding all the slices. They can only keep buying their own slices in the increment of 1 slice per transaction if the total supply is greater than their balance of their own slices. In the "buySlices" function, following check has been placed:
```
/* check if supply is greater than 1 and owner is buying slice for thyself. Can't allow owner of the slice to keep
         and manipulate the price of slices */
        if(supply > 1 && linkberryUser == msg.sender) {
            require(slicesBalance[linkberryUser][msg.sender] < supply, "Error: Leave some slices for others lah");
        }
```
### Slice owners can't sell the last of their own slice they are holding
Other users holding the slices have priority of selling over the owner and the very last slice that the owner is holding of its own slice can't be sold ever, keeping it in trade forever. Friend.tech has a flaw where user who is last to sell can never sell the last share and gets stuck with a non performing asset (NPA). With linkBerry we have strived to improve and allow all others to sell, disincentivizing the owner selling all his slices and dump it on top of other users.
```
if(linkberryUser == msg.sender) {
            require(slicesBalance[linkberryUser][msg.sender] > 1, "Error: Owner can't sell his last slice");
        }
```
### Platform collects the revenue from very first purchase of slice
### Users can trade only 1 slice at a time

## Challenges in the smart contract
Building an oracle on mantle to handle the data related to user's days spent on the link.berry app, linkedin connections & followers and also linkedin account activity history, so that the smart contract can fetch that data in decentralized manner and be free of any sort of manipulatioins in those parameters. Scheduled for v 1.1.0 of link.berry

# How to run the frontend on localhost

Pre-requisites:
- Nodejs (version 18.13.0 or newer)
- yarn (if being used)

1. Clone this repo
```
git clone https://github.com/kesaviwebsolutions/link.berry
```
2. switch to the directory
```
cd link.berry
```
3. install node modules
```
npm i or yarn
```
4. start on localhost
```
npm start or yarn start
```





