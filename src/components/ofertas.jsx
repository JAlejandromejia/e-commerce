import React from 'react'

export const Ofertas = () => {
  return (
    <>
    <h2>Destacado</h2>
        <div className='offerhor'>
            <img src="https://admin.esports.gg/wp-content/uploads/2023/04/How-to-get-the-Harlequin-Widowmaker-skin-in-Overwatch-2.jpg" alt="Widowmaker Harlequin" />
            <span className='offerinfo1'>
                <header>Harlequin</header>
                <p>Epic</p>
                <p>1000</p>
            </span>
        </div>
        <hr />
        <div className='offersvertcontaner'>
        <div className='offervert'>
            <img src="https://cdnb.artstation.com/p/assets/images/images/028/176/471/medium/airborn-studios-dragoon-mercy-char-02.jpg?1593696647" alt="Mercy Dragoon" className='offervertimg1'/>
            <div className='offerinfo2'>
            <header>Dragoon</header>
            <p>Legendary</p>
            <p>1500</p>
            </div>
        </div>
        <div className='offervert'>
            <img src="https://bnetproduct-a.akamaihd.net//12/907794967a912b89645dc12299d2de87-S4_webSynthwaveTracer.png" alt="Tracer Synthwave" className='offervertimg2'/>
            <div className='offerinfo3'>
            <header>Synthwave</header>
            <p>Epic</p>
            <p>1000</p>
            </div>
        </div>
        </div>
    </>
  )
}
