import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  
  return(
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Delete note" />

          <h1>
            Introduction to React
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum laboriosam corporis quas iure vitae voluptatem inventore? Quibusdam reiciendis ipsam veritatis nemo, explicabo, labore, vero illo dolorum nostrum officiis dicta eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam quis at laborum, iusto quo? Quas fugit deleniti sint architecto. Doloremque minus suscipit cumque. Esse, sint ipsam. Inventore, doloribus aliquid?
          </p>

          <Section title="Useful links">
            <Links> 
              <li><a href="#"> https://www.rockeseat.com.br</a></li>
              <li><a href="#"> https://www.rockeseat.com.br</a></li>
            </Links>  
          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Exit"/>
        </Content>
      </main>

    </Container>
  )
}