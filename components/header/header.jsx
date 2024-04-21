export function Header() {
    return (
        <div className="flex text-xl bg-gray-900 text-gray-300 ">
            <h1 className="text-white p-5">INSOMNIA</h1>
            <div className="text-lg w-4/5 p-5">
                <a href="#" className="p-4 hover:text-white transition-colors">Подписки</a>
                <a href="#" className="p-4 hover:text-white transition-colors">Каталог</a>
                <a href="#" className="p-4 hover:text-white transition-colors">Детям</a>
                <a href="#" className="p-4 hover:text-white transition-colors">Спорт</a>
            </div>

            <div className="flex justify-end mx-14 p-5">
                <form className="px-5">
                    <input type="text" placeholder="Поиск..." className="bg-gray-900 outline-0"/>
                </form>
                <a href="#" className="hover:text-white transition-colors">Войти</a>
            </div>


        </div>
    )
}