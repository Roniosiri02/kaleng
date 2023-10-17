import a from './../assets/mesjid.png'
import b from './../assets/a.png'
import c from './../assets/b.png'
import d from './../assets/c.png'
import e from './../assets/d.png'
import f from './../assets/e.png'
import g from './../assets/f.png'
import h from './../assets/g.png'
import aa from './../assets/aa.png'
import bb from './../assets/bb.png'
import cc from './../assets/cc.png'
import dd from './../assets/dd.png'
import ee from './../assets/ee.png'
import ff from './../assets/ff.png'
import gg from './../assets/gg.png'
import hh from './../assets/hh.png'
import { Container, Row, Col } from 'react-bootstrap'

const Fasilitas = () =>{
    return(
        <main className="pt-[4px] bg-slate-200">
        <div className="relative w-full h-[400px] mb-6 mt-10 shadow-3xl">
          <div className='absolute brightness-[.35] bg-blue bg-fixed w-full h-[400px]'></div>
        <h1 className="xl:text-9xl text-center text-white z-10 absolute mx-auto right-0 left-0 pt-32 font-extrabold tracking-widest italic md:text-7xl text-4xl">FASILITAS</h1>
      </div>
        <div className='fasilitas min-vh-100 d-flex align-items-center'> 
            <Container>
            <h1 className=" text-xl font-LibraCaslonText text-center">Fasilitas Prodi Sistem Informasi Kelautan</h1>
            <div><p className="py-2">Sistem Informasi Kelautan (SIK) terus meningkatkan administrasi dan pelayanan kepada mahasiswa. Peningkatan pelayanan kepada mahasiswa bertujuan untuk memperlancar 
            kegiatan belajar mengajar dan kehidupan sosial mahasiswa di lingkungan kampus. Lingkungan kehidupan kampus ini diharapkan mampu membantu menghasilkan 
            mahasiswa yang cakap secara teknis, terampil, dan berwawasan humanis.</p></div>
            
            <h2 className='text-xl font-LibraCaslonText text-center'>Fasilitas Umum</h2><br></br>
                <Row className='row-cols-lg-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 g-4 row-cols-1'>
                    <Col>
                     <img src={a} className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={b}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={c} className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={d}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={e}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={f} className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={g}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={h}  className='w-100'/> 
                    </Col>
                </Row><br></br>
                <br/>
            <h2 className='text-xl font-LibraCaslonText text-center'>Laboratorium</h2><br></br>
            <br/>
                <Row className='row-cols-lg-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 g-4'>
                    <Col>
                     <img src={aa}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={bb}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={cc}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={dd}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={ee}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={ff}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={gg}  className='w-100'/> 
                    </Col>
                    <Col>
                     <img src={hh}  className='w-100'/> 
                    </Col>
                </Row>
            </Container>
            
        </div>
        </main>
    )
}

export default Fasilitas