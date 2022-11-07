function liquidateBond(){
    return (
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div>
                <label>Bond Id :</label>
                <input id="bondId" type="text"></input>
                <br/>
            </div>
            <br/>
            
            
            <button className="cta-button connect-wallet-button" onClick={() => liquidateBondFunction()}>Liquidate</button>
        </div>
    );
}
export default liquidateBond;

function liquidateBondFunction(): void {
    throw new Error("Function not implemented.");
}
