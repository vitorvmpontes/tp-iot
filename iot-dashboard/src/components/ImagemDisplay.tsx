// components/ClassificacaoList.tsx
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";
import silencio from "../assets/silencio.jpeg";
import portaBatendo from "../assets/portaBatendo.png";
import portaAbrindo from "../assets/portaAbrindo.jpg";
import vidroQuebrando from "../assets/vidroQuebrando.jpg";

const ClassificacaoList = () => {
  const [imagemPath, setImagePath] = useState<string>(silencio);
  const [mensagemSom, setMensagemSom] = useState<string>("Nenhum som detectado.");

  useEffect(() => {
    const classificacaoRef = ref(db, "classificacao");

    const unsubscribe = onValue(classificacaoRef, (snapshot) => {
      if (snapshot.exists()) {
        const tipo = snapshot.val().trim();

        const imagemPorTipo: Record<string, string> = {
          doorknock: portaBatendo,
          dooropening: portaAbrindo,
          glassbreaking: vidroQuebrando,
        };

        const mensagemPorTipo: Record<string, string> = {
          doorknock: "Som detectado: Batida de porta",
          dooropening: "Som detectado: Porta abrindo",
          glassbreaking: "Som detectado: Vidro quebrando",
        };

        if (tipo in imagemPorTipo) {
          setImagePath(imagemPorTipo[tipo]);
          setMensagemSom(mensagemPorTipo[tipo]);
        } else {
          setImagePath(silencio);
          setMensagemSom("Nenhum som detectado.");
        }
      } else {
        console.log("Nenhum dado encontrado.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="classificacao-container">
      <img src={imagemPath} alt="Classificação" className="classificacao-imagem" />
      <p className="mensagem-som">{mensagemSom}</p>
    </div>
  );
};

export default ClassificacaoList;