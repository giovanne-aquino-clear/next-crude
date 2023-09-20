import Table from "@/components/Table"
import Layout from "../components/Layout"
import Cliente from "@/core/Cliente"

export default function Home(){

  const clientes = [
    new Cliente(' Ana', 34, '1'),
    new Cliente(' bia', 34, '2'),

  ]


  return(
    <div className= {`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text white
   
   `}>

    <Layout titulo="cadastro simples"> 
      <Table clientes={clientes}></Table>
    </Layout>

    </div>
  )
}