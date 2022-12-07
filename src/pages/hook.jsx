import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function useFetchDatas(url) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    items: [],
    loading: true,
    modal: false,
  });
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        let fetchconfig = await fetch(url);
        let response = await fetchconfig.json();

        // Si c'est la page housedetails
        const pathname = document.location.pathname;
        if (pathname === `acco/${id}`) {
          const currentAccommodation = response.find(
            (accommodation) => accommodation.id === id
          );
          if (currentAccommodation === undefined) {
            navigate("*");
          }
          setState({
            items: currentAccommodation,
            loading: false,
          });
        }
        // Si c'est la page home ou about
        setState({
          items: response,
          loading: false,
          modal: false,
        });
      } catch (e) {
        setState((s) => ({ ...s, loading: false, modal: true }));
      }
    };
    fetchDatas();
  }, []);
  return [state.items, state.loading, state.modal];
}
