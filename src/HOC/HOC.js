import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
        console.log(this.state.data);
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      const filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });

      return (
        <div>
          <h2>{entity}</h2>
          <input
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
            type="text"
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};
export default HOC;
