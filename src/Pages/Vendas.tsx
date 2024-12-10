import { VendaItem } from "../Components/VendaItem";
import { useData } from "../Context/DataContext";

const Vendas = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <div>
      <ul>
        {data.map((venda) => (
          <li key={venda.id}>
            <VendaItem venda={venda} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendas;
