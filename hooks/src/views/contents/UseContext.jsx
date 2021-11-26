import './UseContext.css'
import React, { useContext } from "react"


const UseContext = props => {


    return (
        <div>
            <div className="titulo">
                <h1>Detalhes da Empresa</h1>
             </div>

            <div className="conteudo">
                <h3>Nossa empresa tem como prioridade ajudar as pessoas a adquirirem seu imovel dos sonhos na linda Dubai, seja ele um apartamento do centro da cidade
                    ou uma bela casa de praia com vista para o por do sol!
                </h3>
                <img src="https://huitantecinqcorp.files.wordpress.com/2017/06/av7.jpg?w=1400&h=" width="150px"/><img src="https://pic.le-cdn.com/thumbs/520x390/810/1/properties/Property-68a542dd45e478d75a3e75baa1751442-98246705.jpg" width="193px"/><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ66eQiF_jIRLjULwadYwWxfPt1rxc8PmhJw&usqp=CAU" width="250px"/>
            </div>
            <div className="footer">
            <h4> Todos os direitos reservados © Gabriel Silva de Melo Costa 2º DSA</h4>
        </div>
        </div>
    )
}
export default UseContext