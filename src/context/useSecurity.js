import SecurityContext from "context/SecurityContext";
import { useContext } from "react";

const useSecurity = () => useContext(SecurityContext);

export default useSecurity;
