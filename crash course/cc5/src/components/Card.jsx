function Card(props){
    function orderHandler(){
            console.log(props.title);
            if(props.price > 199){
                console.log("Free Delivery!")
            }
            else{
                console.log('Amount Payable', props.price + " Rs 49 Chargers!")
            }
        }
    return(
        
        <>
        <div onClick={orderHandler} className="border border-neutral-300 rounded-2xl p-2 w-64 ">
                <div className="relative">
                    <img src={props.img} alt="" className="rounded-2xl h-36 w-full object-cover" />
                    {
                        props.ratings>4.5 ? <div className="text-sm px-3 font-medium rounded-full absolute top-0 m-3 bg-green-50 text-green-800">Must Try</div> : ""
                    }
                    
                </div>
                <h1 className="font-medium text-lg mt-2">{props.title}</h1>
                <p className="text-sm ">{props.desc}</p>
        </div>
        </>
    )
}

export default Card;