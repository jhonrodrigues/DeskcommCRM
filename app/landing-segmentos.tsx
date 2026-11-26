"use client";

import { useState } from "react";
import { traduzir } from "@/lib/i18n/dicionario";
import type { Idioma } from "@/lib/i18n/idiomas";
import styles from "./landing-publica.module.css";

const segmentos = [
  { nome: "Serviços", titulo: "Do pedido de orçamento ao retorno da equipe.", mensagem: "Quero um orçamento para a próxima semana.", etapas: ["O lead solicita um orçamento pelo WhatsApp.", "A IA coleta o serviço e o prazo. A equipe recebe o histórico.", "O responsável prepara a proposta e programa o retorno."] },
  { nome: "Veículos", titulo: "Do anúncio do carro à visita na loja.", mensagem: "Ainda tem o carro do anúncio? Tenho um veículo para dar na troca.", etapas: ["O interessado pergunta pelo carro anunciado.", "A IA identifica o modelo de interesse e pergunta sobre a troca.", "O vendedor assume e combina uma visita à loja."] },
  { nome: "Clínicas", titulo: "Da primeira mensagem à consulta agendada.", mensagem: "Vocês têm horário para uma avaliação na sexta?", etapas: ["A pessoa solicita informações sobre uma avaliação.", "A recepção recebe o histórico e verifica os horários disponíveis.", "A equipe confirma e registra o compromisso no CRM."] },
  { nome: "Imobiliárias", titulo: "Do formulário à visita ao empreendimento.", mensagem: "Procuro dois quartos nessa região. Consigo visitar no sábado?", etapas: ["O interessado preenche o formulário do anúncio.", "A IA pergunta região, faixa de preço e disponibilidade.", "O corretor recebe o histórico e registra a visita na agenda."] },
] as const;

export function LandingSegmentos({ idioma }: { idioma: Idioma }) {
  const t = (texto: string) => traduzir(texto, idioma);
  const [selecionado, selecionar] = useState(0);
  const segmento = segmentos[selecionado] ?? segmentos[0];

  return (
    <section className={styles.section} id="solucoes">
      <div className={styles.sectionHeading}>
        <h2>{t("Veja o CRM na rotina da sua empresa.")}</h2>
        <p>{t("Escolha um segmento para acompanhar o caminho de um lead.")}</p>
      </div>
      <div className={styles.segmentButtons} aria-label={t("Segmentos")}>
        {segmentos.map((item, indice) => (
          <button key={item.nome} type="button" aria-pressed={selecionado === indice} onClick={() => selecionar(indice)}>
            {t(item.nome)}
          </button>
        ))}
      </div>
      <div className={styles.segmentPanel}>
        <div>
          <h3>{t(segmento.titulo)}</h3>
          <ol><li>{t(segmento.etapas[0])}</li><li>{t(segmento.etapas[1])}</li><li>{t(segmento.etapas[2])}</li></ol>
        </div>
        <blockquote>
          <small>{t("Exemplo fictício")}</small>
          <p>{t(segmento.mensagem)}</p>
        </blockquote>
      </div>
    </section>
  );
}
