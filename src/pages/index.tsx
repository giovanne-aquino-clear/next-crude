import Table from "@/components/Table"
import Layout from "../components/Layout"
import Cliente from "@/core/Cliente"
import Botao from "@/components/botao"

export default function Home(){

  const clientes = [
    new Cliente(' Ana', 34, '1'),
    new Cliente(' bia', 34, '2'),

  ]

  function selectedCustomer(cliente:Cliente){

  }
  function deletedCustomer(cliente:Cliente){

  }

  return(
    <div className= {`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text white
   
   `}>

    <Layout titulo="cadastro simples"> 
    <div className= " flex justify-end"></div>
    <Botao className="mb-4"> Novo Cliente </Botao>
      <Table clientes={clientes}
      selectedCustomer={selectedCustomer}
      deletedCustomer={deletedCustomer}
      />
    </Layout>

    </div>
  )
}