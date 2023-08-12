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
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    function handleTagsSelected(tagName) {
        if(tagName === "all") {
            return setTagsSelected([])
        }
        
        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        }else {
            setTagsSelected(prevState => [...prevState, tagName ]);
        }
    }


    useEffect(() => {
        async function fetchTags() {
           const response = await api.get('tags')
           
           setTags(response.data)
        }   

        fetchTags()
    },[])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText 
                        title="All" 
                        onClick={() => handleTagsSelected("All")}
                        isActive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tags => (
                        <li key={String(tags.id)}>
                            <ButtonText 
                                title={tags.name}
                                onClick={() => handleTagsSelected(tags.name)}
                                isActive={tagsSelected.includes(tags.name)}

                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    placeholder="Search a title"
                    onChange={() => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="My notes">
                    {
                        notes.map((note) => (
                            <Note 
                                key={String(note.id)}
                                data={note} 
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Create new note
            </NewNote>
        </Container>
    )
}