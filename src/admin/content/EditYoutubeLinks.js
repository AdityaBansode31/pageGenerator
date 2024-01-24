import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  CardTitle,
} from "reactstrap";
import { useNavigate } from 'react-router-dom';

const EditYoutubeLink = ({ match }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // Example: Fetch data based on the ID from the match.params.id

  // useEffect(() => {
    // Example: Fetch data based on the ID from the match.params.id
    // const defaultVideoId = 'yourDefaultId';
    // const videoId = match.params.id || defaultVideoId;
  

    // Example: Fetch data from API and update state
    // const fetchData = async () => {
    //   const response = await api.get(`/videos/${videoId}`);
    //   setTitle(response.data.title);
    //   setLink(response.data.link);
    // };
    // fetchData();

    // For demonstration purposes, set some sample data
    // setTitle(`Video ${videoId}`);
    // setLink(`https://www.youtube.com/watch?v=${videoId}`);
  // }, [match.params.id]);

  const handleUpdateLink = () => {
    // Add logic to update the YouTube link (e.g., API call)

    // Redirect to the YouTube links page after updating
    navigate("/admin/youtubelinks");
  };

  return (
    <Col xs={12}>
      <Card>
      <CardHeader className='bg-info text-center' style={{ padding: '10px', margin: '0' }}>
          <CardTitle tag="h4" style={{ color: 'white' }}> Edit Youtube Link</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="link">YouTube Link</Label>
              <Input
                type="text"
                name="link"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </FormGroup>
            <Button color="primary" onClick={handleUpdateLink}>
              Update Link
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EditYoutubeLink;
