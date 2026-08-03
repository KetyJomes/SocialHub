import { useNavigate } from "react-router-dom";
import api from "../services/apiService";
import { useState } from "react";

export const registerClass = () => {
  const navigate = useNavigate();

  const [classData, setClass] = useState({
    course: "",
    period: "",
    idPIC: "",
  });
  const create = async () => {
    try {
      console.log(classData);

      const response = api.post("/class/create", classData);

      console.log("turma criada: ", response.data);
    } catch (error) {
      console.log("Erro ao criar a turma", error);
    }
  };
};
