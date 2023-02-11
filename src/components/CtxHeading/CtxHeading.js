import Section from "./Section";
import Heading from "./Heading";

export default function CtxHeading() {
  return (
    <div className="ctx-heading">
      <Section>
        <Heading>heading title 1</Heading>
        <Section>
          <Heading>heading title 2</Heading>
          <Section>
            <Heading>heading title 3</Heading>
          </Section>
        </Section>
      </Section>
    </div>
  );
}