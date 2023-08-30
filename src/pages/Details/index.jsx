import { Container, Links, Content } from './styles'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleDelete() {
    const confirm = window.confirm("Are you sure you want to delete this note?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return(
    <Container>
      <Header />
      {
        data &&
        <main>
        <Content>
          <ButtonText 
            title="Delete note"
            onClick={handleDelete} 
          />

          <h1>
            {data.title}
          </h1>

          <p>
           {data.description}
          </p>

          {
            data.links &&
            <Section title="Useful links">
              <Links> 
                {
                  data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target='_blank'>{link.url}</a>
                    </li>
                  ))
                }
              </Links>  
            </Section>
          }
          {
            data.tags &&
            <Section title="Tags">
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)} 
                    title={tag.name} 
                  />
                ))
              }  
            </Section>
          }
          

          <Button 
            title="Exit"
            onClick={handleBack}
          />
        </Content>
        </main>
      }
    </Container>
  )
}