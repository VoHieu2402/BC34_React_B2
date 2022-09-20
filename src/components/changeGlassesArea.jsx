import React, { Component } from "react";
import dataGlasses from "../components/dataGlasses.json";
import "./changeGlassesArea.css";

export default class ChangeGlassesArea extends Component {
  state = {
    glassesDetail: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "../glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  render() {
    let { glassesDetail } = this.state;
    return (
      <div className="change-glasses-area">
        <div className="container">
          <div className="showcase">
            <img
              className="model"
              src="../glassesImage/model.jpg"
              alt="Model"
            />
            <img
              className="glasses-on-model"
              src={glassesDetail.url}
              alt={glassesDetail.name}
            />
          </div>
          <div className="table-glasses">
            {dataGlasses.map((glassesDetail, index) => {
              let srcImg =
                "../glassesImage/g" + (index + 1).toString() + ".jpg";
              return (
                <img
                  src={srcImg}
                  alt={glassesDetail.name}
                  onClick={() => {
                    this.setState({ glassesDetail });
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
