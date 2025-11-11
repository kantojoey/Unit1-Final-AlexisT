import VinylRecord from "../images/VinylRecord.png"

const AboutPage = () => {
    return (
        <main>
            <section className="about-divider">
                <div className="about-image-heading">
                    <h2>About Hit Record</h2>
                    <img src={VinylRecord} className="album-artwork"></img>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
            </section>
        </main>
    );
};

export default AboutPage;
