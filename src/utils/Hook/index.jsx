import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Gestion de fetch
// Temps de chargement, récupération des données et modale si erreur
/*******************************************************************/
export default function useFetchdatas(url) {
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

        const pathname = document.location.pathname;

        if (pathname === `/acco/${id}`) {
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
        } else {
          setState({
            items: response,
            loading: false,
          });
        }
      } catch (e) {
        setState((s) => ({ ...s, loading: false, modal: true }));
      }
    };
    fetchDatas();
  }, [id, navigate, url]);

  return [state.items, state.loading, state.modal];
}
