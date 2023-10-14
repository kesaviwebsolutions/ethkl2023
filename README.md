# LinkBerry
Repository for hackathon submission in ETH Kuala Lumpur 2023

## Smart Contract for trading of slices on Mantle Network ##
[Contract for LinkBerry's Slices] (https://explorer.testnet.mantle.xyz/address/0x53eb0AC3eef4037063e015Da3Fac1FDCb0E36060/)

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
### Users can only buy 1 slice at a time








