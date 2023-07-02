import React from "react";

const About = () => {
  return (
    <>
      <div className="container my-2">
        <div className="container">
          <h2>ABOUT US</h2>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.cityneeds.info/img/volunteer.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.iimpact.org/wp-content/uploads/2022/12/donation-img.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://ufi.org.in/wp-content/uploads/2021/05/cropped-bg-01-free-img.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br></br>
        <br></br>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://img.freepik.com/premium-vector/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7887.jpg?w=2000"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Sponsor A Student</h5>
                  <p className="card-text">
                    Regular sponsoring is the best way to support children. It
                    gives them confidence that their educational prospects are
                    secured and encourages them to work hard to achieve their
                    goals. your donation will be used entirely to cover their
                    college, university, or specialized institutions fee and
                    exams, private tuition, textbooks, school equipment, and
                    transportation costs.
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://thumbs.dreamstime.com/b/ngo%E7%BB%84%E7%BB%87%E9%A2%9C%E8%89%B2%E7%BA%BF%E5%9B%BE%E6%A0%87-%E9%9D%9E%E7%9B%88%E5%88%A9%E7%A4%BE%E5%8C%BA-%E7%94%A8%E4%BA%8E%E7%BD%91%E9%A1%B5%E3%80%81%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E3%80%81%E7%A8%8B%E5%BA%8F%E7%9A%84%E8%B1%A1%E5%BD%A2%E5%9B%BE-%E7%9F%A2%E9%87%8F%E6%8F%92%E5%9B%BE-187299586.jpg"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Volunteer</h5>
                  <p className="card-text">
                    Volunteers are the backbone of every organization – they not
                    only carry the organization’s ideals within them but also
                    spread the message far and beyond, sensitizing society
                    towards the cause and a mission to support education in the
                    lives of downtrodden children irrespective of their
                    Religion, Caste & Community and to work towards the uplift
                    of those children.
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://img.freepik.com/premium-vector/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7901.jpg?w=2000"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Social Activities</h5>
                  <p className="card-text">
                    These social skills activities can help kids forge positive
                    relationships — and better understand what other people are
                    feeling and thinking. It is an extracurricular activity that
                    can be offered through school, community, and organizations.
                    In the present situation most of rural Bengaluru both the
                    men and women are not able to participate in social
                    activities.
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://img.freepik.com/premium-vector/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7898.jpg?w=2000"
                className="card-img-top"
                alt="..."
                height={400}
                width={400}
              />
              <div className="card-body">
                <center>
                  <h5 className="card-title">Support A Study Center</h5>
                  <p className="card-text">
                    The Lamp Educational and Charitable Trust serve towards the
                    establishment of the rights of the students & women.
                    Providing them with quality education, Education is the
                    major activity of the trust addition to this systematic
                    empowerment of the rural communities particularly the women
                    is also a key area of our NGO. We provide a “Free Study
                    Center” for needy and poor students.
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
