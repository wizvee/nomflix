import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, TVApi } from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;
    this.isMoive = pathname.includes("/movie/");
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return push("/");
    let result = null;
    try {
      if (this.isMoive)
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      else ({ data: result } = await TVApi.showDetail(parsedId));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
      console.log(result);
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
