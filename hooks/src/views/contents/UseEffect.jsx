import './UseEffect.css'
import React, { useState, useEffect } from "react"

const UseEffect = props => {

    const [ notaFinal, setNotaFinal ] = useState(0)
    const [ situacao, setSituacao ] = useState("")

    useEffect ( () => {
        console.log('useEffect: executa a cada Re-Renderização. \n \n')
    })

    useEffect( () => {
        console.log('useEffect condicional ao componente:')
        console.log('Executa somente na montagem do componente.\n\n')
    }, [])

    useEffect( () => {
        setSituacao( verificaSituacao(notaFinal) )
    }, [notaFinal] )

    useEffect( () => {
        console.log('useEffect condicional:')
        console.log('Nesse caso, executa quando o state situacao for alterado. \n\n')
    }, [situacao] )

    useEffect( () => {
        console.log('useEffect condicional (com limpeza):')
        console.log('Executa enquanto um componente existir. \n\n')

        return () => {
            console.log('useEffect condicional (com limpeza):')
            console.log('Executa o return quando o componente for desmontado. \n\n')  
        } 
    }, [])

    console.log('\nO componente foi renderizado. \n\n')

    function verificaSituacao(nota) {
        return nota >= 6 ? "Aprovado" : "Reprovado"
    }

    return (
        <div>
            <div className="titulo">
                <h1>Produtos</h1>
                <h2>Imoveis De qualidade a sua espera</h2>
            </div>

            <div className="conteudo">
            
                
            </div>
            <div className="footer">
                <h4> Todos os direitos reservados © Gabriel Silva de Melo Costa 2º DSA</h4>
            </div>
        </div>
    )
}
export default UseEffect