import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

const YoutubeLinks = () => {
  // Sample data for the table
  const thead = ["ID", "Title", "Link", "Actions"];
  const tbody = [
    { data: ["1", "Video 1", "https://www.youtube.com/watch?v=123456", <Button to="/admin/youtubelinks/123"
    tag={Link}  color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    { data: ["2", "Video 2", "https://www.youtube.com/watch?v=789012", <Button to="/admin/youtubelinks/123"
    tag={Link}  color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    // Add more rows as needed
  ];

  return (
    <Col xs={12}>
      <div className="d-flex justify-content-end mb-2">
        <Link to="/admin/addyoutubelink">
          <Button color="success">Add YouTube Link</Button>
        </Link>
      </div>

      <Card>
      <CardHeader className='bg-info text-center' style={{ padding: '10px', margin: '0' }}>
          <CardTitle tag="h4" style={{ color: 'white' }}>YouTube Links Table</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                {thead.map((prop, key) => {
                  if (key === thead.length - 1)
                    return (
                      <th key={key} className="text-right">
                        {prop}
                      </th>
                    );
                  return <th key={key}>{prop}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {tbody.map((prop, key) => {
                return (
                  <tr key={key}>
                    {prop.data.map((prop, key) => {
                      return <td key={key}>{prop}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YoutubeLinks;
