import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";


export const exportarAvaliacaoPDF = (
    autoavaliacao,
    gestao
) => {


    const pdf = new jsPDF();



    pdf.setFontSize(18);

    pdf.text(
        "Comparativo de Resultados",
        14,
        20
    );



    pdf.setFontSize(12);

    pdf.text(
        `Data: ${new Date().toLocaleDateString()}`,
        14,
        30
    );






    const gerarTabela = (titulo, dados, y) => {


        pdf.setFontSize(15);

        pdf.text(
            titulo,
            14,
            y
        );



        autoTable(pdf, {

            startY: y + 5,

            head: [

                [
                    "Competência",
                    "Descrição",
                    "Resultado"
                ]

            ],


            body: dados.map(item => [

                item.title,

                item.description,

                item.status

            ])


        });



    };





    gerarTabela(
        "Autoavaliação",
        autoavaliacao,
        40
    );



    const novaPagina = pdf.lastAutoTable.finalY + 20;


    pdf.addPage();



    gerarTabela(
        "Avaliação Gestão",
        gestao,
        20
    );





    pdf.save(
        "comparativo-avaliacoes.pdf"
    );


};