import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text
} from "@react-email/components";
  import * as React from "react";

interface ContactFormEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactFormEmail = ({
    name,
    email,
    message
}: ContactFormEmailProps) => (
<Html>
    <Head />
    <Preview>Nouveau message de contact de {name}</Preview>
    <Body style={main}>
    <Container style={container}>
        <Heading style={h1}>Nouveau message de contact</Heading>
        <Section style={section}>
        <Text style={text}>
            <strong>Nom :</strong> {name}
        </Text>
        <Text style={text}>
            <strong>Email :</strong> {email}
        </Text>
        <Text style={text}>
            <strong>Message :</strong>
        </Text>
        <Text style={messageText}>{message}</Text>
        </Section>
    </Container>
    </Body>
</Html>
);

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    maxWidth: "580px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "17px 0 0",
    margin: "0",
};

const section = {
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "1px solid #e2e8f0",
};

const text = {
    margin: "0 0 10px 0",
    padding: "0",
    lineHeight: "26px",
};

const messageText = {
    ...text,
    whiteSpace: "pre-wrap",
};

export default ContactFormEmail;