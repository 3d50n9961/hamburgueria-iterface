import { Banner,Conteiner,Content } from "./styles";
import {CarouselCategory} from '../../components/caterorycarousel'
import {Carouseloferts} from '../../components/ofertascarrocel'

export function Home() {
  return (
    <main >
      <Banner>
        <h1>Bem-Vindos</h1>
      </Banner>
      <Conteiner>
        <Content>
          <CarouselCategory/>
          <Carouseloferts/>
        </Content>
      </Conteiner>



    </main>
  )
}