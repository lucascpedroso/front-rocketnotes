import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>
                        <Link to="/">Return</Link>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Details"/>

                    <Section title="Useful Links">
                        <NoteItem value="https://example.com"/>
                        <NoteItem isNew placeholder="New link"/>
                    </Section>

                    <Section title="Tags">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="New tag"/>
                        </div>
                    </Section>

                    <Button title="Save"/>

                </Form>
            </main>
        </Container>
    )
}