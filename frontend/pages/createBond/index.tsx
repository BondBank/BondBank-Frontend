import Link from 'next/link'
function createBond(){
    return (
        <div className="container">
            <h1><a className="footer-text">Create Bond</a></h1>
            <div>
                <label>Bond Name        : </label>
                <input id="BondName" type="text"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>StartDate        :</label>
                <input id="BondStartDate"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Maturity Date    :</label>
                <input id="BondMaturityDate" ></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>UnitPrice        :</label>
                <input id="BondunitPrice" name="BondunitPrice"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Maximum  Units   :</label>
                <input id="BondMaximumUnit"></input>
                <br/>
            </div>
            <br/>
            <div>
                <label>Maximum Amount   :</label>
                <input id="BondMaximumAmount"></input>
                <br/>
            </div>
            <br/>
            <div>
                <button className="cta-button connect-wallet-button" onClick={() => callCreateBondFunction()}>Create</button>
            </div>
            <div>
            <Link href='/bondCreatorUI'>Back</Link>
            </div>
        </div>
    );
}
export default createBond;

function callCreateBondFunction(): void {
    throw new Error("Function not implemented.");
}
