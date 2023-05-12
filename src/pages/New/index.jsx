import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create a note</h1>
                        <a href="/">Return</a>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Details"/>

                    <Section title="Useful Links">
                        <NoteItem value="https://example.com"/>
                        <NoteItem isNew placeholder="New link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}