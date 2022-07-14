import React from 'react';

const home = {
  header: {
    fontSize: '72px',
    color: "purple"
  },
  images: {
    width: '180px',
    className: "card-img-top"
  },
  notThicc: {
    width: "300px"
  }
}

export default function Home() {
  return (

    <div>
      <h1 style={home.header}>Home Page</h1>
      <div class="card" style={home.notThicc}>
        <img src="https://images.wagwalkingweb.com/media/care/can-dogs-get-glasses/can-dogs-get-glasses.jpg" style={home.images} alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#contact" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
