import React from 'react';
import { Segment, Message, Divider, Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';

const Cta = ({ status, sendEmail }) => {
    const [status, setStatus] = useState({ success: false, error: false });
    const sendEmail = (e) => {
      e.preventDefault();
  
      const form = e.target;
      const formData = {
        name: form.name.value,
        about: form.about.value,
        email: form.email.value,
      };
  
      emailjs.send('service_ll46zcn', 'template_pbcruuj', formData, 'WLtM2dil32dQpG-S-')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus({ success: true, error: false });
          form.reset();
        })
        .catch((err) => {
          console.error('FAILED...', err);
          setStatus({ success: false, error: true });
        });
    };
  return (
    <Segment padded='very' >
      <h1>Let's Discuss Your Project!</h1>
      <p>Share the details of your project – like scope or business challenges. I'll carefully study them and then figure out the next move together.</p>
      {status.success && <Message positive>Your message has been sent successfully!</Message>}
      {status.error && <Message negative>There was an error sending your message. Please try again.</Message>}
      <Divider />
      <Form onSubmit={sendEmail}>
        <Input
          transparent
          fluid
          type="text"
          placeholder='Full Name'
          name="name"
          required
        />
        <Divider hidden />

        <Input
          transparent
          fluid
          type="email"
          placeholder='Email'
          name="email"
          required
        />
        <Divider hidden />

        <TextArea
          style={{ backgroundColor: "transparent", padding: 0, minHeight: 80 }}
          fluid
          type="text"
          placeholder='About your project'
          name="about"
          required
        />
        <Divider hidden />

        <Button
          type="submit"
          content='Submit'
        />
      </Form>
    </Segment>
  );
};

export default ProjectDiscussionForm;
