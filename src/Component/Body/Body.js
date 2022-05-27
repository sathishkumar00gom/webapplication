import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import Body2 from './Body2'

export default function Body() {


    const round = [{
        img: "https://img.freepik.com/free-photo/_79603-1290.jpg?size=240&ext=jpg"
    },
    { img: "https://img.freepik.com/free-photo/_107791-8012.jpg?size=240&ext=jpg" },
    { img: "https://img.freepik.com/free-photo/_294094-27.jpg?size=240&ext=jpg" }, {
        img: "https://img.freepik.com/free-photo/_174241-61.jpg?size=240&ext=jpg"
    }, { img: "https://img.freepik.com/free-photo/_125755-678.jpg?size=240&ext=jpg" },
    { img: "https://img.freepik.com/free-photo/_149660-629.jpg?size=240&ext=jpg" }, {
        img: "https://img.freepik.com/free-photo/_53876-88891.jpg?size=240&ext=jpg"
    }, {
        img: "https://img.freepik.com/free-photo/_23-2149032949.jpg?size=240&ext=jpg"
    }
    ]
    return (
        <>
            <Container>
                <div style={{ backgroundColor: "linear-gradient(180deg, #2d2db0 -65%, #2c8cf4 110%)" }} >
                    <h1 style={{ fontWeight: "bold", fontFamily: "arial", marginTop: "70px" }}>All the assets you need, in one place</h1>
                    <h3 style={{ fontFamily: "arial" }}>Find and download the best high-quality photos, designs and mockups</h3>
                    <InputGroup style={{ width: "900px", height: "40px", paddingLeft: "200px", paddingTop: "20px" }} className="mb-3">
                        <InputGroup.Text id="basic-addon1">Resources</InputGroup.Text>
                        <FormControl
                            placeholder="Search all resources"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <div className='p-4'>
                        <Button className='me-3' >Wedding Invitation</Button>
                        <Button className='me-3'>Background</Button>
                        <Button>World Environment Day</Button>

                    </div>

                    <div className='p-5' style={{ display: "flex" }}>
                        {round.map((item) => {
                            return (
                                <div className='p-3'>
                                    <img style={{
                                        width: "100px", height: "100px", border: "2px solid white",
                                        borderRadius: "50%", boxShadow: "10px 20px 50px grey"
                                    }}
                                        src={item.img} alt="main"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
            <div style={{ display: "flex", justifyContent: "center", width: "100vw", height: "100px", backgroundColor: "#c7ebff" }}>
                <p style={{ paddingTop: "40px" }}>Get 10 free daily downloads</p> <Button className="p-1 m-4    " style={{ width: "200px", height: "50px" }}
                >Start Now</Button>

            </div>
            <Body2 />

        </>
    )
}
