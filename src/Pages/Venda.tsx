import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import { Loading } from "../Components/Loading";

type VendaSemData = Omit<IVenda, "data">;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (data === null) return null;
  if (loading) return <Loading />;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">NOME: {data.nome}</div>
      <div className="box mb">
        PREÇO:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">STATUS: {data.status}</div>
      <div className="box mb">PAGAMENTO: {data.pagamento}</div>
    </div>
  );
};

export default Venda;
