import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <GenericHtml>
          <Heading>404 - Nada por aqui</Heading>

          <p>
            Hmm... parece que você chegou em um lugar que não está no mapa. Essa
            página pode ter evaporado, mudado de dimensão ou simplesmente nunca
            existiu por aqui.
          </p>

          <p>
            Mas fica tranquilo, ainda dá pra voltar pro caminho certo. Você pode
            ir para a <a href="/">página principal</a> ou dar uma olhada{" "}
            <a href="/history">no histórico</a>, lá as coisas continuam no lugar
            (por enquanto).
          </p>

          <p>
            Se isso aqui não era pra acontecer, pode ser um pequeno bug no
            universo... ou no código mesmo 👀. Se quiser, chama a gente pra dar
            uma olhada.
          </p>

          <p>
            Enquanto isso, fica a dúvida: se uma página nunca foi encontrada...
            será que alguém realmente perdeu ela?
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
