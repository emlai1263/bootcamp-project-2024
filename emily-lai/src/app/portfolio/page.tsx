import React from "react";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <main className="page-title">
        <div className="project">
          <img src="https://cdn.discordapp.com/attachments/683804226077589556/1291953819881832498/image.png?ex=6701f942&is=6700a7c2&hm=5db2cc691217e91fddae4a953e3e853f25b632f9f410b5328638c7a7043edf5a&" />
        </div>
        <div className="project-details">
          <p className="project-name">My old webpage</p>
          <p className="project-description">
            My old portfolio website with images of my older projects
          </p>
          <div className="project-details"></div>
        </div>
      </main>
      <footer className="footer">
        © 2024 Emily's Website | All Rights Reserved
      </footer>
    </>
  );
};

export default PortfolioPage;
