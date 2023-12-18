"use client";

export default function Error({error, reset}){
    return (
        <div>
            <h1 style={{fontSize:"1.75rem", textAlign: "center", marginTop: "45px", color: "red"}}>Some Error Happened</h1>
            <button style={{
                width: "fit-content",
                height: "fit-content",
                padding: "10px 40px",
                backgroundColor: "blue",
                color: "white",
                margin: "20px auto",
                display: "block",
                fontSize: "1.25rem",
                borderRadius: "15px",
                cursor: "pointer"
            }} onClick={()=>reset()} >Try Again</button>
        </div>
    )
}