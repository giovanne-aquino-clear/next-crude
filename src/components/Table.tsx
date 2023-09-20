import Cliente from "@/core/Cliente"
import {IconeEdicao, IconeLixo} from "./Icones";

interface Tableprops{
    clientes: Cliente[]
}

export default function Table(props: Tableprops){
    
    function renderHeader(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">nome</th>
                <th className="text-left p-4">idade</th>
                <th className="p-4">Ações</th>

 
            </tr>
        )
    }
   
   function renderData(){
        return props.clientes?.map((cliente, i) => {
            return(
           <tr key={cliente.id}
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
               <td className="text-left p-4">{cliente.id}</td>
               <td className="text-left p-4">{cliente.nome}</td>
               <td className="text-left p-4">{cliente.idade}</td>
                {renderActions(cliente)}
           </tr>
        )
    })
}

    function renderActions(cliente: Cliente){
        return(
            <td className="fl">
                <button className= {
                    `flex justify-center items-center
                     text-green-600 rounded-full p-2 m-1
                     hover: bg-purple-50`}> {IconeEdicao}</button>
                <button className= {
                    `flex justify-center items-center
                     text-red-600 rounded-full p-2 m-1
                     hover: bg-purple-50`}> {IconeLixo} </button>
            </td>
        )
    }
   
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`bg-gradient-to-r from-purple-500 to-purple-800`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}