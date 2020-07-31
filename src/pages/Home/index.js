import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu /> 

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Se você quer aprender a programar de verdade e conseguir um emprego como programador, treinar através de projetos interessantes é, na minha opinião, a melhor escolha para você aumentar as chances disto acontecer. Nesse vídeo eu agrego 10 projetos rápidos e interessantes para você programar que vai envolver vários conhecimentos em backend, frontend, desenvolvimento web, desenvolvimento mobile, aplicativo desktop e full stack num geral."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />          

      <Footer />
    </div>
  );
}

export default Home;