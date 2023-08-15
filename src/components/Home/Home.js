import Product from "../product/Product";
import "../Home/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="header__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12345"
            title="Garmin Vivofit Activity Tracker (Black) "
            price={300.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ssKXbVdRL._AC_SL1500_.jpg"
          />
          <Product
            id="12346"
            title="The Legend of Zelda™: Tears of the Kingdom – Nintendo Switch"
            price={83.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91IR9O992-L._AC_SY741_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12347"
            title="
            Novation Bass Station II Analog Mono-Synth "
            price={699.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/611Czi6PY0L._AC_SL1000_.jpg"
          />
          <Product
            id="12348"
            title="Plugable USB 3.0 Laptop Docking Station for Windows"
            price={145}
            rating={3}
            image="https://m.media-amazon.com/images/I/711eO9eZpXL._AC_UL400_.jpg"
          />
          <Product
            id="12349"
            title="Sceptre 24-inch Professional Thin 1080p LED Monitor 99%"
            price={129}
            rating={5}
            image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12350"
            title="TORRAS [Ultra-Durable Cell Phone Holder for Car"
            price={74}
            rating={4}
            image="https://m.media-amazon.com/images/I/812zvrq5x+L._AC_SX679_.jpg"
          />
          <Product
            id="12351"
            title="
            Stanz (TM) Single-handed Guitar Trigger Capo Quick Change (Black)"
            price={5.87}
            rating={4}
            image="https://m.media-amazon.com/images/I/41EmuhYIDOL._AC_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12352"
            title='TCL 32" Class 3-Series HD LED Smart Android TV - 32S334-CA'
            price={168.95}
            rating={4}
            image="https://m.media-amazon.com/images/I/616MJIohX+L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12353"
            title="Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Personalized Spatial Audio, USB-C Lossless Audio, Apple & Android Compatibility, Up to 40 Hours Battery Life - Black"
            price={469.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61u-OaDSfQL._AC_SL1500_.jpg"
          />
          <Product
            id="12354"
            title="Water Resistant & Anti-Slip Grip"
            price={33}
            rating={4}
            image="https://m.media-amazon.com/images/I/91SuAEBg7ZS._AC_SX569_.jpg"
          />

          <Product
            id="12355"
            title="Nintendo Switch™ with Neon Blue and Neon Red Joy‑Con™ (New Box)"
            price={385.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pIS8f417L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
