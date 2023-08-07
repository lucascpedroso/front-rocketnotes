import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { FiPlus } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
           const response = await api.get('tags')
           
           setTags(response.data)
        }   

        fetchTags()
    },[])
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="All topics" isActive/></li>
                {
                    tags && tags.map(tags => (
                        <li key={String(tags.id)}>
                            <ButtonText 
                                title={tags.name}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Search a title"/>
            </Search>

            <Content>
                <Section title="My notes">
                    <Note data={{
                            title:'React', 
                            tags:[
                                {id:'1', name:'react'},
                                {id:'2', name:'rocketseat'}
                            ]
                        }} />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Create new note
            </NewNote>
        </Container>
    )
}