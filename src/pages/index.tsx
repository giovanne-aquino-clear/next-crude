import Table from "@/components/Table"
import Layout from "../components/Layout"
import Cliente from "@/core/Cliente"
import Botao from "@/components/botao"
import Formulario from "@/components/Fomulario"
import {useEffect, useState} from "react"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import ColecaoCliente from "@/backend/db/ColecaoCliente"


export default function Home(){

  const repo: ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')
  useEffect(obterTodos, [])

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function newCustomer(){
    setCliente(Cliente.vazio())
    setVisivel("form")
  }

  function selectedCustomer(cliente:Cliente){
    setCliente(cliente)
    setVisivel("form")
  }
  async function deletedCustomer(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function saveCustomer(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
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
          <Botao className="mb-4" onClick={newCustomer}>Novo Cliente </Botao>
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