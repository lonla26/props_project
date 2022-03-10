import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

const Profile = ({ data, handleName, children }) => {
    console.log(children);
    // const styleObject = { marginTop: "30px", marginLeft: "40%" };
    const styleObject = { width:"25rem", margin:"30px auto" };
    return (
        <div style={styleObject}>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={children.props.src} />
                <Card.Body>
                    <Card.Title>{data.fullName}</Card.Title>
                    <Card.Title>{data.profession}</Card.Title>
                    <Card.Text>
                        {data.bio}
                    </Card.Text>
                    <Button variant="primary" onClick={handleName}>See more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

Profile.propTypes = {
    data: PropTypes.object,
    children:PropTypes.element,
    handleName:PropTypes.func
};

Profile.defaultProps = {
    data: {
        fullName:"User full name",
        bio:"User bio",
        profession:"User profession",
    },
    children:<img src="/default_picture.png" alt="Profile pic"/>,
    handleName:()=>{alert(`User full Name`)}
}
    


export default Profile