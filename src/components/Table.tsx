import Cliente from "@/core/Cliente"

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

           </tr>
        )
    })
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