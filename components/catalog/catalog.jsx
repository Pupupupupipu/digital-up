import { Header } from "../header";
import { InfoCard } from "../infoCard/infoCard";
import { Section } from "./section";

export function Catalog(){
    return(
        <>
            <Header />
            <div className="bg-gray-800 text-gray-100 text-2xl p-10">
                <Section Name={"Популярное"}> 
                    <InfoCard name={"1+1"}/>
                </Section>
                <Section Name={"Выбираем сериал"} />
                <Section Name={"Современные хорроры"} />
            </div>
        </>
    )
}