    import {Link} from 'react-router-dom'

    function MenuItem({image,name,content,price}) {
        return ( 
            <>
        <Link to={"#"} style={{textDecoration:"none"}}> <div className="menuItem">
                <div style={{backgroundImage:`url(${image})`}}></div>
                <h1 style={{marginBottom:"10px"}}>{name}</h1>
                <h6 style={{marginTop:"0px"}}>{content}</h6>
                <p><i style={{color:"red"}}>{price}TL</i></p>
            </div></Link>
            </>
        );
    }

    export default MenuItem; 