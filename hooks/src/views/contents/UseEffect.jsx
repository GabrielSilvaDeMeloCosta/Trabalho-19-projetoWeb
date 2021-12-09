import './UseEffect.css'
import React, { useState, useEffect, Component } from "react"
import ReactDOM from "react-dom";

const Comprar = () =>{
   
}
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
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5856296/76569403/5ceac5a3e19c299b5f8a780a8255c9c7?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Cristal Lagoon</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 351.902 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                    
                </div>
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5874490/76534050/b27534fc648dde69dba264ec62f05e36?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Unique Villa</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 8.039.863 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                </div>
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5940067/75877269/b0adae7e4a71ce538a71c82590854bd2?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Atlantic Villa</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 20.399.654 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                </div>
                <br/>
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5940067/75868544/4ec194a0087ea9582ecf73e859986d29?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Moderna villa</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 479.992 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                </div>
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5938533/75847954/dd215870821ab9e1b94a98d4d9368d92?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Suíte Garden</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 1.225.587 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                </div>
                <div className="caixa">
                    <img src="https://res.listglobally.com/listings/5938296/75199922/1aa276dd37a753c3a5b84ea7913b9f66?mode=max&w=1920"width="150px" height="150px"/>
                    <h6>Motor City</h6>
                    <button type="button" class="button button1" onClick={ () =>alert("Preço: EUR 398.104 \nTelefone do Dono: 971 4(99)9999-9999")}>Comprar</button>
                </div>
                
            </div>
            <div className="footer">
                <h4> Todos os direitos reservados © Gabriel Silva de Melo Costa 2º DSA</h4>
            </div>
        </div>
    )
}
export default UseEffect