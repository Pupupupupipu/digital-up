export function InfoCard({ name, image, id }){

    function handleClickCard(event){
        console.log(event.target.id)
        console.log(id)
    }

    return(
        <div id={id} className="py-3 m-3 drop-shadow-xl relative transition-transform hover:scale-105" onClick={handleClickCard}>
                <h1 id={id} className="absolute bottom-12 left-10 text-5xl text-gray-300 drop-shadow-lg">{name}</h1>
                <img id={id} className=" rounded-lg" src={image} alt={name} />
        </div>
    )
}