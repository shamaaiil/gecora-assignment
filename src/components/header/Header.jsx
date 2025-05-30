const Header = () => {
    return(
        <>
         <div className="flex justify-between bg-black text-gray-500">
            <p className="ms-8">Pomoc & kontakt</p>
            <p className="me-8"> Rastislavova 68, Košice <span className="ms-4">+421 919 215 491</span></p>
         </div>
         <div className="grid grid-cols-3">
      <div></div>
      <div></div>
      <div className="flex justify-end gap-x-4 w-[95%] text-gray-500">
        <span>Sledovanie zásielky</span>
        <span>Vrátenie tovaru</span>
        <span>O nás</span>
        <span>FAQ</span>
        <span>Blog</span>
      </div>
         </div>
         <div className="bg-pinkclr text-white text-center font-semibold">
            <span>Nové iPhone 14 PRO s 20% zľavou ✨</span>
         </div>
        </>
    )
}

export default Header