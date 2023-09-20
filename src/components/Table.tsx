import Cliente from "@/core/Cliente"
import {IconeEdicao, IconeLixo} from "./Icones";

interface Tableprops{
    clientes: Cliente[]
    selectedCustomer?: (cliente: Cliente) => void
    deletedCustomer?: (cliente: Cliente) => void

}

export default function Table(props: Tableprops){
    const displayActions = props.deletedCustomer || props.selectedCustomer
    
    function renderHeader(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">nome</th>
                <th className="text-left p-4">idade</th>
              {displayActions ? <th className="p-4">Ações</th> : false}  

 
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
                {displayActions ? renderActions(cliente) : false}
           </tr>
        )
    })
}

    function renderActions(cliente: Cliente){
        return(
            <td className="flex justify-center">
                {props.selectedCustomer ? (
                    
                    <button onClick={()=> props.selectedCustomer?.(cliente)}className= {
                        `flex justify-center items-center
                         text-green-600 rounded-full p-2 m-1
                         hover: bg-purple-50`}> {IconeEdicao}</button>
                ): false}

                {props.deletedCustomer ? (
                 <button onClick={()=> props.deletedCustomer?.(cliente)}className= {
                    `flex justify-center items-center
                     text-red-600 rounded-full p-2 m-1
                     hover: bg-purple-50`}> {IconeLixo} </button>

                ): false}

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