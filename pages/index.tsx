// Components
import Page from "../components/UI/Page/Page";
import Section from "../components/UI/Section/Section";
import Button from "../components/UI/Library/Button/Button";

const Home = () => {
    return (
        <Page
            head={{
                title: "PR Engineering",
                description: "FIX THIS",
                canonical: "/",
            }}
        >

            <Section
                heading="Professional Value-Driven Consulting Engineering Solutions"
                number={1}
            >
                <p>PR Engineering is a dynamic and experienced consulting engineering firm with the capacity to provide comprehensive and value-driven design and project management services. As providers of engineering solutions to clients in the property, commercial and industrial markets, our dedicated and professional team of engineering specialists have built a reputation for providing viable, durable and cost-effective solutions to meet challenging project requirements throughout Africa.</p>
                <Button text="Learn More" link="/about" />
            </Section>

            <Section
                heading="Projects We've Undertaken In The Past"
                number={2}
                colour="light"
            >
                <p>something</p>
            </Section>

            <Section
                heading="Services We Offer"
                number={3}
                colour="dark"
            >
                <p>something</p>
            </Section>

            <Section
                heading="Get In Touch"
                number={4}
            >
                <p>something</p>
            </Section>


        </Page>
    )
}

export default Home
