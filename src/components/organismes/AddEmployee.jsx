import CustomInput from "../atoms/Input";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import "./Form.css";

function AddEmployee(){
    return(
        <div className="form">
            <Text text="Expande tu equipo, incorpora un nuevo talento" size="large"/><br />
            <Text text="ID" size="medium"/>
            <CustomInput type="number" placeholder="ID" />
            <Text text="Contraseña" size="medium"/>
            <CustomInput type="password" placeholder="Contraseña"/>
            <Text text="Confimar Contraseña"size="medium"/>
            <CustomInput type="password" placeholder="Confirmar Contraseña"/>
            <Text text="Turno" size="medium"/>
            <CustomInput type="text" placeholder="Turno"/>
            <Text text="Numero de contacto" size="medium"/>
            <CustomInput type="number" placeholder="telefono"/>
            <Button caption="Agregar empleado"/>
        </div>
    );
}

export default AddEmployee;