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
        console.log("response");
        let response = await fetchconfig.json();

        const pathname = document.location.pathname;

        // Si c'est la page housedetails
        if (pathname === `/acco/${id}`) {
          const currentAccommodation = response.find(
            (accommodation) => accommodation.id === id
          );
          if (currentAccommodation === undefined) {
            navigate("*");
          }
          return setState({
            items: currentAccommodation,
            loading: false,
            modal: false,
          });
        }
        // si c'est la page home ou about
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
  }, [id, url]);

  return [state.items, state.loading, state.modal];
}
