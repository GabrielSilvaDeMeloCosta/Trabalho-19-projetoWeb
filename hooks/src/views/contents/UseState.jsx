import './UseState.css'
import React, { useContext, useState } from "react"

import { AppContexto } from '../../data/Store'

const UseState = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alterarNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>Sobre nós</h1>
                <h2>Aluno: Gabriel Silva de Melo Costa, Turma: 2ºMDSA-A</h2>
            </div>

            <div className="conteudo">
                <h4>O objetivo da nossa empresa é apoiar as pessoas a comprar seu imóvel ideal na cidade ideal!     São diversos imoveis estratégicamente preparados para providenciar conforto aos compradores!</h4>
                <img src="https://marcelommmelo.files.wordpress.com/2015/09/dubai.jpg?w=300&h=169" width="500px"/>
            </div>
            <div className="footer">
                <h4> Todos os direitos reservados © Gabriel Silva de Melo Costa 2º DSA</h4>
            </div>
        </div>
    )
}
export default UseState