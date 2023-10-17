import { Row, Col } from 'react-bootstrap'
import aa from './../../assets/23.jpg'
import ab from './../../assets/22.jpg'


const Vimi = () =>{
    return(
        <main className="pt-[4px]">
     <h1 className="text-center text-xl bg-celo font-bold italic tracking-wider">Visi Misi</h1> <br/><br/>

      <div className=" px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed pb-6" >
      <Row className='row-cols-lg-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 g-3'>
                    <Col>
                     <img src={aa}  className='w-100'/> <br/><br/>
                    </Col>
                    <Col><br/><br/><br/><br/>
                    <h3 className="pb-4 font-semibold">Visi </h3>
                    <p className="pb-6 ">Mengembangkan dan mengimplementasikan sistem informasi untuk mendukung perkembangan teknologi pada bidang kelautan dan menghasilkan lulusan yang berdayasaing serta ahli dalam pengolahan data numerik maupun spatial.</p>
                    </Col>
                    </Row>
      <Row className='row-cols-lg-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 g-3'>
                    
                    <Col>
                    <h3 className="pb-4 font-semibold">Misi</h3>
                    <p className="pb-4 text-justfy">Menyelenggarakan layanan pendidikan dan pengajaran berstandar nasional bidang keahlian sistem informasi kelautan.</p>
                    <p>Melaksanakan penelitian di bidang sistem informasi kelautan dan inovasinya dalam upaya mengembangkan potensi sumberdaya hayati pesisir dan laut di daerah dan nasional</p>
                    <p>pendidikan, penelitian, dan pengabdian serta pemberdayaan kepada masyarakat berbasis hasil penelitian.</p>
                    <p>Mengembangkan dan menyebarluaskan keilmuan dan teknologi bidang kelautan yang berbasis pada kebutuhan masyarakat dan industri.</p>
                    
                    </Col>
                    <Col>
                     <img src={ab}  className='w-100'/> 
                    </Col>
                    <Col></Col>
                    </Row>
      </div>
    </main>
    )   
}
export default Vimi