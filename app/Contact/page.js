import Navbar from '/app/component/nav';
import Footer from '/app/Footter/footter';
export default function Contact() {
    return (
      <>
      <Navbar />
      <h1 class="fw-bold">Contact</h1>
      <hr></hr>
      <p class="fst-normal">สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคเชียงใหม่</p>
      <hr></hr>
      <p class="fst-normal">Information Technology Of Chiangmai Technology College</p>
      <hr></hr>
      <img src="/img/10.png" class="card-img-top "
                        alt="Card Image"></img>
        <Footer />
      </>
    );
  }
  