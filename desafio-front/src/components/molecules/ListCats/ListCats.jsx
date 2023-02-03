import React, { Component} from "react";
import apiName from "../../../services/apiName";
import LiParents from "./liParents";
import style from './ListCats.module.scss'
class ListCats extends Component {

  state = {
    cats: [],
  };

  async componentDidMount() {
    const response = await apiName.get("");

    this.setState({ cats: response.data });
    // console.log(response.data)
  }

  render() {
    const { cats} = this.state;
    // console.log(catsParents)
    return (

      // <ul>
      //   {cats.map((cat) => (
      //     <li key={cat}>{cat}
      //       <LiParents />
      //     </li>
      //   ))}
      // </ul>
        <ul className={style["list"]}>
          {cats.map((cat) => (
            <li key={cat} id={cat}  className={style["list__name"]} onClick={() => {
              let id = document.getElementById(cat);
              let filho = id.children[1];

              if(id.classList.contains("open")) {
                id.classList.remove("open")


              } else {
                id.classList.add("open");
                filho.classList.add("opened");
              }
            }}>
              <strong>{cat}</strong>
              <LiParents />
            </li>
          ))}
        </ul>
    );
  }
}

export default ListCats;
