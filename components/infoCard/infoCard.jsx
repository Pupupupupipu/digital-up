export function InfoCard({ name }){
    return(
        <div className="w-1/3 py-3 drop-shadow-xl relative transition-transform hover:scale-105">
                <h1 className="absolute bottom-12 left-10 text-5xl">{name}</h1>
                <img className=" rounded-lg" src="https://static.okko.tv/images/v3/19736571?scale=1&quality=80" alt="1+1" />
        </div>
    )
}