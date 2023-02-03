import React, { Component} from "react";
import api from "../../../services/api";
import style from "./ListCats.module.scss";


class LiParents extends Component {

  state = {
    catsParents: []
  };

  async componentDidMount() {
    const response = await api.get("");

    this.setState({ catsParents: response.data})
    console.log(response.data)
  }

  render() {
    const { catsParents } = this.state;

    return (
      <ul className={style["list__list-tag"]}>
        {catsParents.map((tag) => (
          <li key={tag.id} className={style["list__list-tag__tags"]}>
            {tag.tags}
          </li>
        ))}
      </ul>
    )
  }
}

export default LiParents;
