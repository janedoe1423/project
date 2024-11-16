import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            {/* Carousel Section */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://via.placeholder.com/1920x600" className="d-block w-100" alt="Slide 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Welcome to StartupHub</h1>
                            <p>Your one-stop platform to innovate, collaborate, and grow.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1920x600" className="d-block w-100" alt="Slide 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Empowering Innovation</h1>
                            <p>Connect with investors, mentors, and industry leaders.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://via.placeholder.com/1920x600" className="d-block w-100" alt="Slide 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Building a Sustainable Future</h1>
                            <p>Access essential resources to grow and thrive.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">About Us</h2>
                    <p className="text-center">
                        StartupHub is a collaborative digital ecosystem designed to streamline the growth journey for startups.
                        By connecting startups with investors, mentors, policymakers, and IPR professionals, we foster innovation and sustainability.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Features We Provide</h2>
                    <div className="row">
                        {/* Feature Card 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Unified Data Repository</h5>
                                    <p className="card-text">
                                        Centralized data storage for startup profiles, funding history, and resource allocation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature Card 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 2" />
                                <div className="card-body">
                                    <h5 className="card-title">Predictive Resource Allocation</h5>
                                    <p className="card-text">
                                        ML-driven resource predictions to allocate funding, mentorship, and support effectively.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature Card 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Feature 3" />
                                <div className="card-body">
                                    <h5 className="card-title">Intelligent IPR Management</h5>
                                    <p className="card-text">
                                        Track intellectual property filings, renewal alerts, and status updates with AI support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Add more cards as necessary */}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                    <div className="accordion" id="faqAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeadingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                                    What is StartupHub?
                                </button>
                            </h2>
                            <div id="faqOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    StartupHub is a digital ecosystem aimed at streamlining the growth process for startups.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeadingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                                    How can I register my startup on StartupHub?
                                </button>
                            </h2>
                            <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    You can register by signing up on our platform and creating a startup profile.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeadingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                                    Who can invest through StartupHub?
                                </button>
                            </h2>
                            <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Accredited investors can view startup profiles and make funding decisions.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeadingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                                    Is my information secure?
                                </button>
                            </h2>
                            <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Yes, we implement robust security measures to protect user data.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqHeadingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
                                    Can mentors access my startup's data?
                                </button>
                            </h2>
                            <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                <div className="accordion-body">
                                    Mentors can access startup data only if given permission for mentoring purposes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
