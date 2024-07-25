function Button(){
//vars
    const handleClick = ()=> console.log('Clicked..'); 
    return(
        <div>
            <button className="button" onClick={handleClick}>Click me 👍</button>
        </div>
    )
}

export default Button;