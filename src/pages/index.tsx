import Table from "@/components/Table"
import Layout from "../components/Layout"
import Cliente from "@/core/Cliente"
import Botao from "@/components/botao"
import Formulario from "@/components/Fomulario"
import {useEffect, useState} from "react"


export default function Home(){

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')
  const clientes = [
    new Cliente(' Ana', 34, '1'),
    new Cliente(' bia', 34, '2'),

  ]

  function newCustomer(cliente:Cliente){
    setCliente(Cliente.vazio())
    setVisivel("form")
  }

  function selectedCustomer(cliente:Cliente){
    setCliente(cliente)
    setVisivel("form")
  }
  function deletedCustomer(cliente:Cliente){

  }

  function saveCustomer(cliente: Cliente){
    setVisivel('tabela')
  }


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
          onClick={newCustomer}> 
            Novo Cliente </Botao>
            <Table clientes={clientes}
            selectedCustomer={selectedCustomer}
            deletedCustomer={deletedCustomer}
            />
        </>

        ) : (
          <Formulario 
          cliente={cliente}
          clienteMudou={saveCustomer}
          cancelado={()=> setVisivel('tabela')}
          />
        )}
          </Layout> 

    </div>
  )
}