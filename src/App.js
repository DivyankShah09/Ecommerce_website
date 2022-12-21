import "./App.css";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import { Item } from "./components/Item";
import charger1 from "./assets/images/charger1.png";
import camera from "./assets/images/camera.png";
import img1 from './assets/images/img1.jpg';
import { Image } from "./components/Image";
import { ItemTitle } from "./components/ItemTitle";
import {Footer} from "./components/Footer";
import './assets/css/footer.css';
import {Features} from "./components/Fetaures";

const Holder = styled.section`
  padding: 0rem 2rem;
  margin: 0.7rem 0.7rem;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  border-radius: 3px;
`;


function App() {
    return (
        <>
            <NavBar />
            <Image src={img1} width="100%" height="600px" />
            <Features />
            <Holder>
                <center>
                    <ItemTitle title="Featured Products" text="View More" />
                    <Item path={charger1} title="Super-fast Charger" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={camera} title="Sony Camera" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Holder>
                <center>
                    <ItemTitle title="Best of Electronics" text="View More" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Holder>
                <center>
                    <ItemTitle title="Best of Electronics" text="View More" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Holder>
                <center>
                    <ItemTitle title="Best of Electronics" text="View More" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Holder>
                <center>
                    <ItemTitle title="Best of Electronics" text="View More" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Holder>
                <center>
                    <ItemTitle title="Best of Electronics" text="View More" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                    <Item path={charger1} title="item 1" rating={4.5} review={452} dealprice={80} originalprice={100} discount="20% off" />
                </center>
            </Holder>
            <Footer />
        </>
    );
}

export default App;
