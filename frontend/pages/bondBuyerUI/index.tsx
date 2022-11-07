import Link from 'next/link'
function bondBuyerUI(){
    return (
        <div>
            <h1><a className="footer-text">Manage Bonds</a></h1>
            <div >
                    <div>
                    <Link href='/'>Back</Link>
                    </div>
                    <br></br>
                
                    <div><Link href='/buyBond'>Buy a Bond (click here)</Link></div>
                    <br></br>
                    <div><Link href='/liquidateBond'>Liquidate a Bond (click here)</Link></div>
                    <br></br>
                    <div><Link href='/'>View My Bonds (future use)</Link></div>
                    <br></br>
                    <div><Link href='/'>View All Bonds (future use)</Link></div>
                    <br></br>
             </div>
            <br/>
            
            
        </div>
    );
}
export default bondBuyerUI;

function callMintFunction(): void {
    throw new Error("Function not implemented.");
}
