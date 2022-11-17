import "./App.css";
import Header from "./components/Header";
import Footer from "./components/footer";
import Item from "./components/item";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemsContainer">
        <Item
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          desc_link=""
          backgroundImg={Model3}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
        />
        <Item
          title="Model S"
          desc="Order Online for Touchless Delivery"
          desc_link=""
          backgroundImg={ModelS}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model X"
          desc="Order Online for Touchless Delivery"
          desc_link=""
          backgroundImg={ModelX}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
        />
        <Item
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          desc_link=""
          backgroundImg={ModelY}
          leftBtnTxt=" Custom Order"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
        />
        <Item
          title="Solar Panels"
          desc="Lowest Cost Solar Panels in America"
          desc_link=""
          backgroundImg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
        />
        <Item
          title="Solar Roof"
          desc="Produce Clean Energy From Your Roof"
          desc_link=""
          backgroundImg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnlink=""
          rightBtnTxt="Learn More"
          rightBtnlink=""
          twoButtons="true"
        />
        <Item
          title="Accessories"
          desc=""
          desc_link=""
          backgroundImg={Accessories}
          leftBtnTxt=" Shop Now"
          leftBtnlink=""
          rightBtnTxt=""
          rightBtnlink=""
          twoButtons="false"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
