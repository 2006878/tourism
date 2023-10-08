import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Guia canastra</h1>
          <h3>Passeios | Restaurantes | Guias</h3>
          <Button outline color="warning" href="#about">
            Saiba mais
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
