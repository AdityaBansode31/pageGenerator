import React, { useState } from "react";

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
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";



const AddYoutubeLink = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleAddLink = () => {
    // Perform your logic to add the YouTube link
    console.log("Title:", title);
    console.log("Link:", link);
    // Reset form fields after adding link
    setTitle("");
    setLink("");
  };

  return (
    <Col xs={12}>
      <Link to="/admin/youtubelinks">
        <Button color="primary" className="mb-3">
          Back to YouTube Links
        </Button>
      </Link>

      <Card>
      <CardHeader className='bg-info text-center' style={{ padding: '10px', margin: '0' }}>
          <CardTitle tag="h4" style={{ color: 'white' }}>Add YouTube Link</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="link">YouTube Link</Label>
              <Input
                type="text"
                id="link"
                placeholder="Enter YouTube link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleAddLink}>
              Add YouTube Link
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddYoutubeLink;
