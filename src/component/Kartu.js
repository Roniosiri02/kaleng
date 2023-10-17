import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Kartu () {
    return(
      <main>
        <div className='container'>
          <div className='row' >         
            <div className='col-md-4'>
        <Card  style={{width:'18rem'}}> 
        <Card.Header as="h5">Sejarah</Card.Header>
        <Card.Body>
          <Card.Text>Universitas Pendidikan Indonesia (UPI) sebagai universitas pelopor dan unggul perlu berkontribusi dalam bidang tersebut dan juga dalam...</Card.Text>
          <Link to='/profile/sejarah'>
          <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
        </Card>
        </div>

        <div className='col-md-4'>
        <Card style={{width:'18rem'}} > 
        <Card.Header as="h5">Visi Misi</Card.Header>
        <Card.Body>
        <Card.Text>Sebagai universitas perguruan tinggi yang memiliki cita-cita, tentunya kegiatan belajar mengajar harus dilandasi dengan visi misi yang kuat...</Card.Text>
        <Link to='/profile/vimi'>
        <Button variant="primary">Go somewhere</Button>
        </Link>
        </Card.Body>
        </Card>
        </div> 
                    
        <div className='col-md-4'>
        <Card style={{width:'18rem'}} >
        <Card.Header as="h5">Fasilitas</Card.Header>
        <Card.Body>
        <Card.Text>Sistem Informasi Kelautan (SIK) terus meningkatkan administrasi dan pelayanan kepada mahasiswa. Peningkatan pelayanan kepada mahasiswa bertujuan...</Card.Text>
        <Link to='/fasilitas'>
        <Button variant="primary">Go somewhere</Button>
        </Link>
        </Card.Body> 
        </Card>             
        </div>
      
        
    
</div>
</div>
      </main>
    )
}
export default Kartu;