import { Container, Form } from './styles'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { api } from '../../services/api'

import { useState } from 'react'

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
      }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNotes() {
        if(!title) {
            return alert('Please, enter a title!')
        }

        if(newTag) {
            return  alert('You typed a new tag but did not click on add. You must click on add or let the section empty')
        }

        if(newLink) {
            alert('You typed a new link but did not click on add. You must click on add or let the section empty')
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        })

        alert("New notes added!")
        navigate(-1)
    }
    
    
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>
                        <ButtonText 
                            title="Return" 
                            onClick={handleBack} 
                        />
                    </header>

                    <Input 
                        placeholder="Title" 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea 
                        placeholder="Details"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Useful Links">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)} 
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder="New link" 
                            value={newLink} 
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Tags">
                        <div className='tags'>
                            {
                                tags.map((tag, index) =>(    
                                    <NoteItem 
                                    key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag) }
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="New tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button 
                        title="Save" 
                        onClick={handleNewNotes}
                    />

                </Form>
            </main>
        </Container>
    )
}