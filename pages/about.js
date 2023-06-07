import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    <>
    <Head>
      <title>jett</title>
    </Head>
  
  <header>
<nav className="navbar navbar-expand-lg bg-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Winz</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/.">หน้าแรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">!!!</a></li>
            <li><a className="dropdown-item" href="#">!!!</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">!!!</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact"> ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

</header>
<br />
<br />
<br /> 
<main>
<div className="container marketing">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
    <img src="/04.jpg" className="bd-placeholder-img rounded-circle" alt=""width={140} height={140} />
      <h2 className="fw-normal">Panasonic Lumix G100</h2>
      <p>Panasonic Lumix G100 จากร้าน Big Camera ฟอร์จูนทาวน์  กล้องถ่ายรูป Panasonic Lumix G100 ถือเป็นกล้องที่ถูกออกแบบมาเพื่อรองรับการใช้งานสำหรับคนที่ต้องการถ่าย Vlog โดยเฉพาะ คุณสามารถพกพากล้อง Lumix G100 เพื่อออกทริปนอกสถานที่ได้แบบสบาย ๆ อีกทั้งยังมี HYBRID I.S. 5 แกน* ที่ช่วยกันสั่น ทำให้เราสามารถถ่ายภาพโดยไม่มีปัญหาเรื่องการสั่น มี Black Mode และ Front Mode ช่วยให้กล้องสามารถรับเสียงทั้งข้างหน้า-ข้างหลังได้อย่างชัดเจน </p>
      <p><a className="btn btn-secondary" href="">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/05.jpg" className="bd-placeholder-img rounded-circle" alt=""width={140} height={140} />
      <h2 className="fw-normal">Canon EOS M200</h2>
      <p>Canon EOS M200 จากร้าน Digital2home แค่ชื่อแบรนด์ก็รู้แล้วว่ารุ่นนี้ต้องดีสมราคาแน่นอน! กล้องถ่ายรูป Canon EOS M200 เป็นกล้องที่ถูกออกแบบมาเพื่อตอบโจทย์อินฟลูเอนเซอร์ รวมถึงไลฟ์สไตล์คนรุ่นใหม่ที่ชื่นชอบการถ่ายภาพทุกคน กล้องถ่ายรูปรุ่นนี้มีความละเอียดสูงถึง 24.1 ล้านพิกเซล และวิดีโอคมชัดระดับ 4K ช่วยให้ภาพสวยคมชัด มาพร้อมกับ Smooth Skin ให้ผิวสวยเรียบเนียน </p>
      <p><a className="btn btn-secondary" href="">View details »</a></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <img src="/06.jpg" className="bd-placeholder-img rounded-circle" alt=""width={140} height={140} />
      <h2 className="fw-normal">Sony ZV-1</h2>
      <p>ถือเป็นกล้องถ่ายรูปที่ถูกออกแบบมาเพื่อถ่าย Casual Video โดยเฉพาะ เหมาะสำหรับมือใหม่หัดถ่ายรูป ไม่จำเป็นต้องมีประสบการณ์ก็สามารถถ่ายรูป ถ่ายวิดีโอแบบมืออาชีพได้! อีกทั้งไม่ต้องตั้งโปรแกรมให้ยุ่งยาก ใช้งานง่ายสุด ๆ  นอกจากนี้ยังมีโหมด Soft Skin Effect ช่วยให้ผิวดูสวยเป็นธรรมชาติยิ่งขึ้น</p>
      <p><a className="btn btn-secondary" href="">View details »</a></p>
    </div>{/* /.col-lg-4 */}
  </div>{/* /.row */}
</div>

</main>
<br />
<br />
<br />

<footer>

<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


</footer>
    </>
  )
}