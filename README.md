# BondBank-Frontend

This project is Front end UI for chainlink22 hackathon Repostiory "BondBank-Backend". 

## TeamMembers

### SmartContract Developers:

    [Harish](https://github.com/BlockchainDeveloper009)
    [Joel](https://github.com/JJtheAndroid)
    [levblanc](https://github.com/levblanc)


## How to use

### Adding Instructions from Backend Project

Step 1 : Become an Admin. Select Admin role to gain the right to create bonds. Only person a can be an Admin at a time

Step 2: Create Bond. Currently you can adjust the amount of bonds to issue and the bond maturity date

        (Frontend - 'Create Bond' on Navigation will help user to create bonds, also assign admin role<if he is not a admin yet>)


Step 3: Buy the bonds. Users can now purchase the bonds (limited to one per user)

        (Frontend - From home page, you can buy the bond by clicking "buy" button as shown below)

Step 4: Wait until maturity date to collect funds. Interest will accure after every block. Can be viewed in the return bonds function
        
        [ Frontend coding pending to show this step in front end ]

Step 5: Select Bond Redemption to collect funds. <<this is where CHAINLINK automation  "KeepUp" comes handy>>
        
        [ Frontend coding pending to show this step in front end ]


    
### Video Demo Flow:

#### Topic:

        Start with About page:
        Developers profile
        link to Repo
        Tech stack

#### Home Page:

        Take away:
        - Show a wallet with bonds bought
        - Unable to buy the same bond once bought

#### Create Bond Page:

        Part A:
        
            1. User(x) should assign admin role to his wallet.
            2. Once he has admin role, then User (x) can navigate to create one bond ('Bond1') once.

        Part B:
            switch to account 2:

            3. User (y)<with diff wallet addr> connects to site, then 'Buy' Button is displayed for bond('Bond1').
            4. Now User(y) can buy 'Bond1' only once.

    
### Conclusion:
        In future, we have planned to use chainlink oracle data feed to get price for crypto tokens, and our project and ideas evolves into better everyday.
        Thanks for the oppotunity to Chainlink and my teammates.