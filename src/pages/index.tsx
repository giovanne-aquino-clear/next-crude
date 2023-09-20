import Table from "@/components/Table"
import Layout from "../components/Layout"
import Cliente from "@/core/Cliente"
import Botao from "@/components/botao"
import Formulario from "@/components/Fomulario"
import {useEffect, useState} from "react"


export default function Home(){

  const clientes = [
    new Cliente(' Ana', 34, '1'),
    new Cliente(' bia', 34, '2'),

  ]

  function selectedCustomer(cliente:Cliente){

  }
  function deletedCustomer(cliente:Cliente){

  }

  function saveCustomer(cliente: Cliente){

  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return(
    <div className= {`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text white
   
   `}>

    <Layout titulo="cadastro simples"> 
      {visivel === 'tabela' ? (
        <>
          <div className= " flex justify-end"></div>
          <Botao className="mb-4" 
          onClick={() => setVisivel('form')}> 
            Novo Cliente </Botao>
            <Table clientes={clientes}
            selectedCustomer={selectedCustomer}
            deletedCustomer={deletedCustomer}
            />
        </>

        ) : (
          <Formulario 
          cliente={clientes[0]}
          clienteMudou={saveCustomer}
          cancelado={()=> setVisivel('tabela')}
          />
        )}
          </Layout> 

    </div>
  )
}