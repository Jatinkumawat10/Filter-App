import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fooddata from "./data";
import "./new.css";
const Home = () => {
  const [menu, setmenu] = useState(Fooddata);
  const filteritems = (category) => {
    const updateitems = Fooddata.filter((cur, ind) => {
      return cur.category === category;
    });
    setmenu(updateitems);
  };
  // const [showDescription, setShowDescription] = useState(false);
  const [clickedButtons, setClickedButtons] = useState([]);
  const handleToggleDescription = (id) => {
    if (clickedButtons.includes(id)) {
      const newClickedButtons = clickedButtons.filter(
        (buttonId) => id !== buttonId
      );
      setClickedButtons(newClickedButtons);
    } else {
      const newClickedButtons = [...clickedButtons];
      newClickedButtons.push(id);
      setClickedButtons(newClickedButtons);
    }
  };
  return (
    <div>
      <section className="container mt-2">
        <h2 className="text-center" style={{ fontweight: 400 }}>
          Select Your Food Items{" "}
        </h2>
        <div className="btn-container mt-2 d-flex justify-content-around">
          <Button variant="primary" onClick={() => filteritems("punjabi")}>
            Punjabi
          </Button>
          <Button variant="secondary" onClick={() => filteritems("vadapav")}>
            Vadapav
          </Button>
          <Button variant="success" onClick={() => filteritems("Pizza")}>
            Pizza
          </Button>
          <Button variant="warning" onClick={() => filteritems("Momos")}>
            Momos
          </Button>
          <Button variant="danger" onClick={() => filteritems("Chai")}>
            Chai
          </Button>
          <Button variant="info" onClick={() => filteritems("Frankie")}>
            Frankie
          </Button>
          <Button variant="info" onClick={() => setmenu(Fooddata)}>
            All
          </Button>
        </div>

        {/* items information using cards from bootstrap */}
        <div className="container mt-3">
          <div className="row d-flex justify-content-around align-iteams-center">
            {menu.map((ele, index) => {
              return (
                <Card
                  style={{ width: "23rem", border: "none" }}
                  className="mx-2 mt-4"
                >
                  <Card.Img
                    variant="top"
                    src={ele.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{ele.rname}</Card.Title>
                    <Card.Text>
                      {clickedButtons.includes(ele.id) ? (
                        <Card.Text>{ele.description}</Card.Text>
                      ) : null}
                      price:{ele.price}
                    </Card.Text>
                    <div className="cont">
                      <Button
                        variant="primary"
                        className="custom-button"
                        onClick={() => handleToggleDescription(ele.id)}
                      >
                        {clickedButtons.includes(ele.id)
                          ? " Hide Description"
                          : "Show description"}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
// }
export default Home;
