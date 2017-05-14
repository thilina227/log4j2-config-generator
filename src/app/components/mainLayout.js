import React from 'react';
//import CodeMirror from 'react-codemirror';
import { Grid, Row, Col } from 'react-bootstrap';

export default class MainLayout extends React.Component {
    render() {
        return (
            <Grid>
				<Row>
					<Row>
						<h1>Log4J2 configuration generator</h1>
					</Row>
					<Row>
						<Col xs={12} md={8}>
							configs output
						</Col>
						<Col xs={6} md={4}>
							input control stuff
						</Col>
					</Row>
			    </Row>
            </Grid>
        );
    }
}
