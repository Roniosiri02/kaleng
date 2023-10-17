import { Navbar,Container } from "react-bootstrap";

const Footer = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Prodi Sistem Informasi Kelautan</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Sik 3B <a href="#login">Amalia Rahma Dini </a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
export default Footer;