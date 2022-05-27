import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function Body2() {
    return (
        <>
            <h2>Explore trending categories on Freepik</h2>
            <div>Check what’s popular on Freepik and make your project look trendy and professional.</div>
            <Container>
                <div className='d-flex p-5 '>
                    <Card className='me-3' style={{ width: "600px", height: "450px", boxShadow: "10px 20px 50px grey" }}>
                        <Card.Img src="https://img.freepik.com/free-psd/top-view-stationery-wood_23-2148895233.jpg?size=626&ext=jpg"></Card.Img>
                        <Card.Img src="https://img.freepik.com/free-photo/beautiful-rendering-dating-app-concept_23-2149316400.jpg?size=626&ext=jpg"></Card.Img>

                    </Card>
                    <div>                   <Card className='me-3' style={{ width: "300px", height: "200px", boxShadow: "10px 20px 50px grey" }}>
                        <Card.Img src=" https://img.freepik.com/free-photo/medium-shot-pregnant-women-work_23-2149304134.jpg?size=626&ext=jpg"></Card.Img>

                    </Card>
                        <Card className='me-5 mt-5' style={{ width: "300px", height: "200px", boxShadow: "10px 20px 50px grey" }}>
                            <Card.Img src=" https://img.freepik.com/free-photo/gradient-collage-metaverse-concept_23-2149391493.jpg?size=626&ext=jpg"></Card.Img>
                        </Card></div>
                    <div className=''>
                        <Card className='me-5' style={{ width: "300px", height: "200px", boxShadow: "10px 20px 50px grey" }}>
                            <Card.Img src="https://img.freepik.com/free-photo/view-hanuman-statue-parmarth-niketan-ashram-rishikesh-india_380726-581.jpg?size=626&ext=jpg"></Card.Img>
                        </Card>
                        <Card className='me-5 mt-5' style={{ width: "300px", height: "200px", boxShadow: "10px 20px 50px grey" }}>
                            <Card.Img src="https://img.freepik.com/free-photo/two-3d-hands-reaching-each-other-metaverse_23-2149375735.jpg?size=626&ext=jpg"></Card.Img>
                        </Card></div>


                </div>
            </Container>
        </>
    )
}
