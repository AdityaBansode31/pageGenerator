import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button,
  Col,
} from "reactstrap";

const SocialLinks = () => {
  // Sample data for the table
  const thead = ["ID", "Name", "Link", "Actions"];
  const tbody = [
    { data: ["1", "Facebook", "https://www.facebook.com", <Button color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    { data: ["2", "Twitter", "https://www.twitter.com", <Button color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    { data: ["3", "WhatsApp", "https://www.whatsapp.com", <Button color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    { data: ["4", "Instagram", "https://www.instagram.com", <Button color="info" style={{ marginRight: '2px' }}>Edit</Button>, <Button color="danger">Delete</Button>] },
    // Add more rows as needed
    // Add more rows as needed
  ];

  return (
    <Col xs={12}>

<div className="d-flex justify-content-end mb-2">
        <Link to="/admin/addsociallink">
          <Button color="success">Add Social Link</Button>
        </Link>
      </div>

      <Card>
      <CardHeader className='bg-info text-center' style={{ padding: '10px', margin: '0' }}>
          <CardTitle tag="h4" style={{ color: 'white' }}>Social Links Table</CardTitle>
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

export default SocialLinks;
