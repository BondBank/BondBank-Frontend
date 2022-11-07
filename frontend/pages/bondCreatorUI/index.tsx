import Link from 'next/link'
function bondCreatorUI(){
    return (
        <div>
            <h1><a className="footer-text">Buy Bond</a></h1>
            <div >
                    
                    <br></br>
                    <Link href='/createBond'>Create a New Bond</Link>
                    <br></br>
                    <div>
                    <Link href='/'>Back</Link>
                    </div>
             </div>
            <br/>
            
            
        </div>
    );
}
export default bondCreatorUI;