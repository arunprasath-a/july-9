import React, { Component } from 'react';
import "../Css/form.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { onNameChange, openModal, closeModal, onAgeChange, onPlaceChange, onFeedbackChange, onZipChange, clearAll, onGenderChange, onStarClick } from "../store/actions/actions";
import Modal from 'react-modal';
import StarRatingComponent from 'react-star-rating-component';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: "50%",
        transform: 'translate(-50%, -50%)',
        border: "solid",
        borderRadius: "10px",
        height: "400px"

    }
};







class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);


    }



    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;


        if (form.checkValidity() === false) {
            event.preventDefault();
        }
        this.setState({ validated: true });
        if (form.checkValidity()) {
            this.props.openModal();
        }



    }


    reloadPage() {
        alert("Successful !")
        window.location.reload();

    }







    render() {

        const { validated } = this.state;
        return (
            <React.Fragment>
                {/* <h1>{this.props.rating}</h1> */}
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col className="heading"><h1>FeedBack Form</h1></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={2} className="formArea1"></Col>
                        <Col md={8} className="formArea2 ">
                            <React.Fragment>

                                <Form method="post" noValidate validated={validated} onSubmit={event => this.handleSubmit(event)} >


                                    <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                        <Form.Label className="formLabel">Username</Form.Label>
                                        <InputGroup >

                                            <Form.Control className="inp1"
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                value={this.props.userName}
                                                onChange={this.props.onNameChange}
                                                style={{ width: "20px" }}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
</Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>


                                    <Form.Group as={Col} md="8" controlId="validationCustom03">
                                        <Form.Label className="formLabel">DOJ</Form.Label>
                                        <Form.Control type="date" placeholder="Age" value={this.props.age} onChange={this.props.onAgeChange} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide your Date of joining.
</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="8" controlId="formGridState">
                                        <Form.Label className="formLabel">State</Form.Label>
                                        <Form.Control as="select" required onChange={this.props.onPlaceChange}>
                                            <option></option>
                                            <option>Mumbai</option>
                                            <option>Tamil nadu</option>
                                            <option>Andra pradesh</option>
                                            <option>Kerala</option>
                                            <option>Karnataka</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>



                                    <Form.Group as={Col} md="8">
                                        <Form.Label as="legend" className="formLabel">Gender</Form.Label>
                                        <Col sm={11}>

                                            <div onChange={this.props.onGenderChange}>
                                                <div>
                                                    <input type="radio" value="MALE" name="gender" required defaultChecked /> Male
                                        </div>

                                                <div>
                                                    <input type="radio" value="FEMALE" name="gender" /> Female
                                        </div>
                                            </div>
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Col} md="8" controlId="validationCustom09">
                                        <Form.Label className="formLabel">Feedback</Form.Label>
                                        <Form.Control as="textarea" rows="4" required value={this.props.Feedback} onChange={this.props.onFeedbackChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide some feedback.
                                    </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* <Form.Group as={Col} md="8" controlId="validationCustom05">
                                        <Form.Label className="formLabel">Contact</Form.Label>
                                        <Form.Control type="text" placeholder="Zip" required value={this.props.zip} onChange={this.props.onZipChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Contact.
                                    </Form.Control.Feedback>
                                    </Form.Group> */}

                                    <Form.Group as={Col} md="8" controlId="validationCustom05">
                                        <Form.Label className="formLabel">File upload</Form.Label>
                                        <Form.Control type="file" placeholder="file" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please upload a file.
                                    </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="8">
                                        <Form.Label className="formLabel">Rate us!</Form.Label>
                                        <div className="ratingDiv">
                                            <StarRatingComponent
                                                name="rate1"
                                                starCount={5}
                                                value={this.props.rating}
                                                onStarClick={this.props.onStarClick}

                                            />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} md="8">
                                        <Form.Check className="formLabel"
                                            required
                                            label="Agree to terms and conditions"
                                            feedback="You must agree before submitting."
                                        />
                                    </Form.Group>
                                    <Button style={{ marginLeft: "177px" }} type="submit" >Submit</Button>
                                    <br></br>
                                    <br></br>
                                    <input type="hidden"></input>
                                </Form>
                            </React.Fragment>

                        </Col>
                        <Col md={2} className="formArea3"></Col>
                    </Row>


                </Container>




                <Modal
                    isOpen={this.props.modalIsOpen}

                    onRequestClose={this.props.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}

                >
                    <Container>
                        <Row>
                            <Col md={5}><img className="modalIMG" src={this.props.Userimg1} alt="test"></img>
                                <Form.Group as={Col} md="8">

                                    <div className="ratingDiv">
                                        <StarRatingComponent
                                            name="rate1"
                                            starCount={5}
                                            value={this.props.rating}
                                            onStarClick={this.props.onStarClick}

                                        />
                                    </div>
                                </Form.Group></Col>
                            <Col md={7}><div className="modalContentDiv">

                                <h2 ref={subtitle => this.subtitle = subtitle}>Hello {(this.props.userName).toUpperCase()}</h2>

                                <div className="qwe">Welcome {(this.props.userName).toUpperCase()}-({this.props.gender})</div>
                                <div className="qwe">Joined on : ({this.props.age})</div>
                                <div className="qwe">your current state: {this.props.Place}  </div>
                                <div className="qwe">FeedBack given by you : {this.props.Feedback}</div>
                                {/* <div>zip address given by you : {this.props.zip}</div> */}
                                <br></br>
                                <Button className="modalBTN1 modalBTN" onClick={this.props.closeModal} >Edit</Button>
                                <Button className="modalBTN2 modalBTN" onClick={this.props.closeModal && this.reloadPage} >Submit </Button>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal>

                <p style={{ color: "white", textAlign: "center" }}>&copy; 2019 HCL.com</p>

            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        age: state.age,
        Place: state.Place,
        modalIsOpen: state.modalIsOpen,
        Feedback: state.Feedback,
        zip: state.zip,
        gender: state.gender,
        rating: state.rating,
        Userimg1: state.Userimg1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        onNameChange: onNameChange,
        onAgeChange: onAgeChange,
        onPlaceChange: onPlaceChange,
        openModal: openModal,
        closeModal: closeModal,
        onFeedbackChange: onFeedbackChange,
        onZipChange: onZipChange,
        clearAll: clearAll,
        onGenderChange: onGenderChange,
        onStarClick: onStarClick
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);

