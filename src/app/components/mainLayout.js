import React from 'react';
import CodeMirror from 'react-codemirror';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import updateCode from '../actions/codeUpdate.js'

class MainLayout extends React.Component{
  
  	options = {lineNumbers : true}


	code = "test";

	componentWillMount() {
		this.props.updateCode(this.code);
	}

	updateCode(code) {
		this.props.updateCode(code);
	}

    render() {
        return (
            <Grid>
				<Row>
					<Row>
						<h1>Log4J2 configuration generator</h1>
					</Row>
					<Row>
						<Col xs={12} md={8}>
							<CodeMirror value={this.props.codeState.code} options={this.options} />
						</Col>
						<Col xs={6} md={4}>
							input control stuff
						</Col>
					</Row>
			    </Row>
			    <Row><input type={"button"} value={"Click to update"} onClick={()=>this.updateCode(this.code)}/></Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
      codeState: state.codeState
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({updateCode: updateCode}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainLayout);