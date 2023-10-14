# ethkl2023
Repository for hackathon submission in ETH Kuala Lumpur 2023

## Smart Contract for trading of slices on Mantle Network ##
[Contract for LinkBerry's Slices] (https://explorer.testnet.mantle.xyz/address/0x53eb0AC3eef4037063e015Da3Fac1FDCb0E36060/)

## Improvements made over friend.tech in the Smart Contract ##
Introduction of "SliceWorth" which is dependent upon following 3 factors:
- Age of account on linkBerry
- No of connections on linkedin
- No of followers on linkedin

Following table explains the allocation (all values are in wei):
| Attribute   |      Wei Allocation      |  MNT Value |
|-------------|:-------------------------:|----------:|
| Age of account |  86400 per day | 0.0000000000000864 |
| Connections |    1 trillion per connection   |   0.000001 |
| Followers | 100 billion per follower |    0.0000001 |


