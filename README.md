# BondBank-Frontend

This project is Front end UI for chainlink22 hackathon Repostiory "BondBank-Backend". 

## TeamMembers

### SmartContract Developers:

    [Harish](https://github.com/BlockchainDeveloper009)
    [Joel](https://github.com/JJtheAndroid)
    [levblanc](https://github.com/levblanc)

### Design

Create Bond / Assign admin role : Solidity contract using ERC1155 standard

Aave:

Liquidation: Chainlink Automation Keepup service is used to liquidate the contracts automatically when bonds reach maturity date.

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
        - Connect wallet in Home page
        
>>>> ![image](https://user-images.githubusercontent.com/97905727/202766281-7296cbd6-7c92-4b52-9413-0e30f44bf1de.png)



        
        - Show a wallet with bonds bought. (Buy button missing in below screenshot). Unable to buy the same bond once bought
        
>>>> ![image](https://user-images.githubusercontent.com/97905727/202765426-132077c3-743b-4355-a8d0-976aa0c371d6.png)


#### Create Bond Page:

        Part A:
            account 1: (ends with F3D5)
            1. User(x) should assign admin role to his wallet.
            2. Once he has admin role, then User (x) can navigate to create one bond ('Bond1') once.
            after creating Bond
>>>> ![image](https://user-images.githubusercontent.com/97905727/202767650-7dc0fd81-64ac-4f7f-999f-53361d3b3546.png)

        Part B:
            switch to account 2: (ends with 3348)

            3. User (y)<with diff wallet addr | who is yet to buy any bond> connects to site, then 'Buy' Button is displayed for bond('Bond1').
            
>>>> ![image](https://user-images.githubusercontent.com/97905727/202767000-726f1248-d9e8-455e-a241-ff15fccb16e1.png)

            
            4. Now User(y) can buy 'Bond1' only once.
            
            


    
### Conclusion:
        In future, we have planned to use chainlink oracle data feed to get price for crypto tokens, 
        our ideas evolve every everyday, and therefore we will adopt more chainlink services into our project.
        Thanks for the oppotunity to Chainlink and my teammates.
