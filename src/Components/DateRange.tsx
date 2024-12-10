import { useData } from "../Context/DataContext";
import DateInput from "./DateInput";

export const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};
