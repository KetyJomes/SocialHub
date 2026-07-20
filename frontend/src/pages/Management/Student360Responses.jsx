// Avaliações 360 feitas pelo aluno

import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { Table360Control } from "../../components/Management/Table360Control";


export const Student360Responses = () => {

    const [isOpen, setIsOpen] = useState(false);

    const {
        turma,
        aluno,
        avaliacao,
        tipoAba
    } = useParams();


    const colegas = [
        {
            id: 1,
            nome: "João Silva",
            status: "Pendente"
        },
        {
            id: 2,
            nome: "Maria Oliveira",
            status: "Respondida"
        },
        {
            id: 3,
            nome: "Carlos Lima",
            status: "Em atraso"
        }
    ];


    const colegasFiltrados =
        tipoAba === "disponiveis"

            ? colegas.filter(
                colega =>
                    colega.status === "Pendente" ||
                    colega.status === "Em atraso"
            )

            : colegas.filter(
                colega =>
                    colega.status === "Respondida"
            );


    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <main className="mt-[8vh] p-8">

                <div className="mb-8">

                    <h1 className="text-3xl font-bold">
                        {aluno}
                    </h1>


                    <h2 className="text-lg font-semibold text-gray-700 mt-1">
                        {turma}
                    </h2>


                    <p className="text-gray-500 mt-2">
                        {
                            tipoAba === "disponiveis"
                                ? "Colegas que ainda precisam ser avaliados."
                                : "Colegas já avaliados pelo aluno."
                        }
                    </p>


                </div>


                <Table360Control
                    colegas={colegasFiltrados}
                    turma={turma}
                    aluno={aluno}
                    avaliacaoId={avaliacao}
                    tipoAba={tipoAba}
                />


            </main>


        </>

    );

};