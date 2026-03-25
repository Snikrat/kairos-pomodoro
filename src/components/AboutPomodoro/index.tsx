import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Kairos & Pomodoro 🍅</Heading>

          <p>
            A Técnica Pomodoro, criada por <strong>Francesco Cirillo</strong>,
            propõe dividir o tempo em blocos de foco e descanso. Mas aqui no{" "}
            <strong>Kairos</strong>, a ideia vai um pouco além: não é só sobre
            medir o tempo — é sobre usar o tempo certo da forma certa.
          </p>

          <p>
            Enquanto o Pomodoro organiza o <em>tempo cronológico</em>, o Kairos
            representa o <em>momento ideal</em> — aquele instante em que você
            realmente está presente, focado e produtivo.
          </p>

          <h2>Como funciona o método</h2>
          <ul>
            <li>
              <strong>1. Escolha uma tarefa</strong> que merece sua atenção.
            </li>
            <li>
              <strong>2. Entre em foco total</strong> por um período definido.
            </li>
            <li>
              <strong>3. Faça uma pausa consciente</strong> para recuperar sua
              energia.
            </li>
            <li>
              <strong>4. Repita o ciclo</strong>, respeitando seu ritmo.
            </li>
          </ul>

          <h2>
            O diferencial do <strong>Kairos</strong> 🚀
          </h2>

          <p>
            Aqui, o tempo não é uma pressão — é uma ferramenta. O objetivo não é
            apenas completar ciclos, mas aproveitar cada momento com intenção.
          </p>

          <h3>⚙️ Tempo adaptável</h3>
          <p>
            Você define seus próprios intervalos na{" "}
            <a href="/settings">página de configurações</a>. Afinal, cada pessoa
            tem seu próprio ritmo — e o Kairos respeita isso.
          </p>

          <h3>🔁 Fluxo natural de ciclos</h3>
          <p>Os ciclos seguem um padrão simples, mas eficiente:</p>
          <ul>
            <li>
              Ciclos <strong>ímpares</strong>: foco profundo.
            </li>
            <li>
              Ciclos <strong>pares</strong>: pausas curtas.
            </li>
            <li>
              A cada <strong>8 ciclos</strong>: uma pausa mais longa para
              renovação completa.
            </li>
          </ul>

          <h3>🍅 Clareza visual</h3>
          <p>
            Os ciclos são representados visualmente para que você entenda, de
            forma simples, em qual momento está:
          </p>
          <ul>
            <li>🟡 Foco</li>
            <li>🟢 Pausa curta</li>
            <li>🔵 Pausa longa</li>
          </ul>

          <p>Sem esforço, sem cálculo — só presença.</p>

          <h3>📊 Consciência do seu tempo</h3>
          <p>
            No <a href="/history">histórico</a>, você acompanha seus ciclos e
            percebe como está usando seu tempo ao longo dos dias.
          </p>

          <h2>Mais do que produtividade</h2>
          <ul>
            <li>✅ Menos distração, mais presença.</li>
            <li>✅ Ritmo equilibrado entre foco e descanso.</li>
            <li>✅ Tempo usado com intenção.</li>
            <li>✅ Consistência ao invés de pressa.</li>
          </ul>

          <p>
            <strong>Pronto pra começar?</strong> Volte para a{" "}
            <a href="/">página inicial</a> e entre no seu próximo momento de
            foco. 🍅
          </p>

          <p>
            <em>
              "Não é sobre fazer mais rápido. É sobre fazer no momento certo."
            </em>{" "}
            ⏳
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
