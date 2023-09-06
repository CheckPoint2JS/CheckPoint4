import {} from 'react'
import './App.css'
import Img1 from './assets/imagemLambo.jpg'
import Img2 from './assets/imagemGTR.jpg'
import Img3 from './assets/imagemFerrari.jpg'
import Img4 from './assets/imagemAudi.jpg'



function Produtos(){
    return(
        <>
        <h1>Modelos refências da categoria</h1>
        <div>
            <h2>Modelo 1</h2>
           <img src={Img1} />
        </div>
        <div>
            <h2>Modelo 2</h2>
           <img src={Img2} />
        </div>
        <div>
            <h2>Modelo 3</h2>
           <img src={Img3} />
        </div>
        <div>
            <h2>Modelo 4</h2>
           <img src={Img4} />
        </div>
        
        </>
    )
}

export default Produtos