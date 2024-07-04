import Navbar from '../app/component/nav';
import Footer from '../app/Footter/footter';
export default function Home() {
  return (
    <>
      <Navbar />

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/4.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <br />
      </div>
      
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/8.png" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">วันเสาร์ที่ 4 ต.ค. 2563</h5>
                <p className="card-text">
                แผนกวิชาเทคโนโลยีสารสนเทศประชุมผู้ปกครอง ระดับ ปวส. ชั้นปีที่ 1 ปีการศึกษา 2563
                </p>
                <a href="#" className="btn btn-primary">เพิ่มเติม</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="public\img\img-con-2.jpg" className="custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">วันเสาร์ที่ 3 ต.ค. 2563</h5>
                <p className="card-text">
                แผนกวิชาเทคโนโลยีสารสนเทศประชุมผู้ปกครอง ระดับ ปวช. ชั้นปีที่ 1 ปีการศึกษา 2563
                </p>
                <a href="#" className="btn btn-primary">เพิ่มเติม</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-3">
              <img src="/img/9.png" className="card-img-top custom-img" alt="Card Image" />
              <div className="card-body text-center">
                <h5 className="card-title">ประถมนิเทศ</h5>
                <p className="card-text">
                สาขาวิชาเทคโนโลยีสารสนเทศ ประถมนิเทศการออกฝึกประสบการณ์นักศึกษา ประจำปีการศึกษา 2563
                </p>
                <a href="#" className="btn btn-primary">เพิ่มเติม</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
