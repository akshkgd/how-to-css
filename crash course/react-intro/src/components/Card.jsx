function Card(props){
    return(
        <>
        <div className=" w-72 rounded-xl p-3" onClick={()=>{
            console.log('food ordered!', props.title)
            if(props.price>149){
                console.log('Free Delivery!')
            }
            else{
                console.log("price" + props.price + "Rs 50 Delivery charge")
            }
        }}>
            <div className="relative">
                <img src={props.img} alt="" className="rounded-2xl h-36 w-full object-cover" />
                <div className={props.ratings>4.5 ? "" : "hidden"}>
                    <p className="absolute bottom-0 m-2 bg-green-50 text-green-800 font-semibold px-2 py-[2px] text-sm rounded-full">Must try</p>
                </div>
            </div>
            <div className="">
                <h1 className="mt-2 font-medium text-neutral-900">{props.title}</h1>
                <h1 className="text-sm mt-3">Rs {props.price}</h1>
            </div>
            <p className="text-xs">{props.desc}</p>
        </div>
        </>
    )
}
export default Card;