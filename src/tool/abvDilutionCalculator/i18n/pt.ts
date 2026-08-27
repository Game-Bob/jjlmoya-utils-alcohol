import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AbvDilutionCalculatorUI } from '../ui';

const slug = 'calculadora-diluicao-alcool-e-proof';
const title = 'Calculadora de diluição de álcool e proof';
const description = 'Calcule quanta água adicionar para reduzir o teor de álcool de um destilado. A calculadora mostra o volume final, o álcool puro e a proporção de diluição.';
const ui: AbvDilutionCalculatorUI = {
  unitLabel: 'Unidades de volume', metricUnit: 'Métrico ml', imperialUnit: 'Imperial fl oz', strengthLabel: 'Unidades de teor', abvUnit: 'Percentual de álcool', proofUnit: 'Proof dos EUA', presetLabel: 'Cenários rápidos', spiritPresetLabel: 'Destilado de 750 ml', liqueurPresetLabel: 'Licor de 700 ml', cocktailPresetLabel: 'Lote de 500 ml', startingStrengthLabel: 'Teor inicial', startingVolumeLabel: 'Volume inicial', targetStrengthLabel: 'Teor desejado', waterToAddLabel: 'Água a adicionar', finalVolumeLabel: 'Volume final', pureAlcoholLabel: 'Álcool puro', ratioLabel: 'Proporção de água', startingProofLabel: 'Proof inicial', targetProofLabel: 'Proof desejado', readyMessage: 'O objetivo é menor. Meça a água e misture aos poucos.', invalidMessage: 'O objetivo precisa ser menor que o teor inicial para uma diluição.', largeAdditionMessage: 'Este lote precisa de pelo menos tanta água quanto destilado. Misture em etapas e verifique novamente.', bottleLabel: 'Garrafa graduada com o volume final calculado', waterLayerLabel: 'Camada de água na mistura final', estimateNotice: 'É apenas uma estimativa de planejamento. Álcool e água podem sofrer contração ao misturar; verifique o teor final com equipamento adequado.', sourceLabel: 'Fontes da fórmula', calculateAction: 'Dados de diluição', resetAction: 'Redefinir valores', volumeHint: 'Escolha o volume disponível antes de adicionar água.', strengthHint: 'Proof é exibido no sistema dos EUA: 80 proof correspondem a 40 por cento de álcool.',
};
const faq = [
  { question: 'Como calcular a água necessária para diluir álcool?', answer: 'Multiplique o volume inicial pelo teor inicial para obter o volume de álcool puro. Divida esse volume pelo teor desejado em forma decimal para obter o volume final teórico. Subtraia o volume inicial para descobrir a água a adicionar.' },
  { question: 'Qual é a diferença entre ABV e proof?', answer: 'ABV é o percentual de álcool puro por volume. No sistema americano, proof é o dobro do ABV, portanto 80 proof equivalem a 40 por cento de ABV. O seletor de proof muda a exibição, não a força real do álcool.' },
  { question: 'A calculadora considera a contração do álcool e da água?', answer: 'Não. O resultado é uma estimativa baseada na conservação do álcool puro. Etanol e água podem ocupar um volume combinado um pouco menor depois da mistura, e a temperatura também altera o volume. Use o resultado como plano e verifique com um alcoômetro adequado.' },
  { question: 'Posso usar esta calculadora para produzir uma bebida alcoólica legal?', answer: 'A ferramenta faz apenas aritmética e não verifica receitas, rótulos, impostos, licenças ou regras locais. Siga os requisitos do local de produção e venda e utilize equipamentos limpos e práticas seguras de medição.' },
];
const howTo = [
  { name: 'Escolha as unidades de volume', text: 'Selecione mililitros métricos ou onças fluidas imperiais. O volume físico permanece igual quando a unidade muda.' },
  { name: 'Informe o lote inicial', text: 'Defina o teor inicial e o volume de destilado disponível antes da diluição.' },
  { name: 'Defina o teor desejado', text: 'Informe um teor menor para a mistura final. Objetivos que não são diluições serão sinalizados.' },
  { name: 'Adicione água em etapas', text: 'Leia a água e o volume final, misture gradualmente e verifique o teor com equipamento adequado.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'pt' };
export const content: ToolLocaleContent<AbvDilutionCalculatorUI> = { slug, title, description, ui, faqTitle: 'Perguntas sobre diluição', bibliographyTitle: 'Fontes da fórmula', faq, howTo, schemas: [faqSchema, howToSchema, appSchema], bibliography, seo: [
  { type: 'title', text: 'Como funciona a diluição de álcool', level: 2 },
  { type: 'paragraph', html: 'A diluição reduz a concentração de álcool ao adicionar água, mantendo aproximadamente a quantidade de álcool puro. Esta <strong>calculadora de diluição de álcool</strong> transforma o teor e o volume iniciais em uma quantidade prática de água e um volume final teórico. Tudo funciona localmente no navegador, sem enviar dados do lote.' },
  { type: 'table', headers: ['Valor', 'Fórmula', 'Significado'], rows: [['Álcool puro', 'volume inicial x teor inicial', 'Álcool levado para a mistura'], ['Volume final', 'álcool puro / teor desejado', 'Total teórico após a diluição'], ['Água', 'volume final menos volume inicial', 'Quantidade de água a planejar']] },
  { type: 'title', text: 'Conversão entre ABV e proof', level: 2 },
  { type: 'paragraph', html: 'O álcool por volume expressa qual porcentagem do líquido é álcool puro. No sistema americano, proof é duas vezes o ABV, portanto 40 por cento de ABV equivalem a 80 proof. Use o seletor quando o rótulo indicar proof, lembrando que as convenções podem variar entre países e épocas.' },
  { type: 'stats', columns: 3, items: [{ value: '80 proof', label: '40 por cento de álcool' }, { value: '1:1', label: 'Proporção de água do cenário padrão' }, { value: '100% local', label: 'Nenhum dado do lote enviado' }] },
  { type: 'title', text: 'Por que o resultado é uma estimativa', level: 2 },
  { type: 'paragraph', html: 'A aritmética conserva o volume de álcool puro, mas misturas reais não são perfeitamente aditivas. Álcool e água sofrem contração quando se combinam, e a temperatura muda a densidade e o volume medido. Adicione água devagar, aguarde a temperatura de medição e verifique o teor com equipamento apropriado.' },
  { type: 'tip', title: 'Misture aos poucos e verifique', html: 'Use água limpa e medida em um recipiente grande o bastante para o volume final teórico. A calculadora não conhece temperatura, açúcar, aromatizantes ou regras locais. Trate a quantidade como um plano inicial, não como um certificado do teor final.' },
  { type: 'title', text: 'Um processo de diluição repetível', level: 2 },
  { type: 'list', items: ['Anote o teor indicado no rótulo e o volume real do lote.', 'Escolha um teor desejado abaixo do teor inicial.', 'Calcule o álcool puro, o volume final e a água.', 'Adicione a maior parte da água, misture e complete em pequenos passos.', 'Verifique a mistura depois que atingir a temperatura de medição.'] },
  { type: 'diagnostic', variant: 'warning', title: 'Cálculo não é autorização de produção', html: 'Esta página não valida ingredientes, higiene, rótulos, impostos, licenças ou venda. Nunca use um resultado para ignorar as regras aplicáveis à sua bebida ou localização.' },
] };
