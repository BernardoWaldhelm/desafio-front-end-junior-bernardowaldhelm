import React, { Component} from "react";
import api from "../../../services/api";
import style from './ListCats.module.scss'

class ListCats extends Component {

  state = {
    cats: [],
  };

  async componentDidMount() {
    const response = await api.get("");

    this.setState({ cats: response.data });
  }

  render() {
    const { cats } = this.state;

    return (
        <ul className={style["list"]}>
          {cats.map((cat) => (
            <li key={cat?._id} id={cat._id}  className={style["list__name"]} onClick={() => {
              let id = document.getElementById(cat._id);
              let filho = id.children[1];

              if(id.classList.contains("open")) {
                id.classList.remove("open")


              } else {
                id.classList.add("open");
                filho.classList.add("opened");
              }
            }}>
              <strong>{cat?._id}</strong>
              <ul className={style["list__list-tag"]}>
                {(cat.tags).map((tag) => (
                  <li key={tag} className={style["list__list-tag__tags"]}>
                    {tag}
                  </li>
                ))}

              </ul>
            </li>
          ))}
        </ul>
    );
  }
}

export default ListCats;
