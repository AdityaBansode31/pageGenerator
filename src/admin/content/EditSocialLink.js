import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const EditSocialLink = () => {
  return (
    <Card>
      <CardHeader className='bg-primary text-center' style={{ padding: '10px', margin: '0' }}>
          <CardTitle tag="h4" style={{ color: 'white' }}>Edit Social Link</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter name" />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link</Label>
            <Input type="text" name="link" id="link" placeholder="Enter link" />
          </FormGroup>
          <Button color="primary">Save</Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default EditSocialLink;
