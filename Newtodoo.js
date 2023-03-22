import Newtodoo from "./components/Newtodoo"
const Newtodoo = (props) =>{
    return (
        <div className="new-todoo">
            <Header additem={props.additem} />
        </div>
    );
};
export default Newtodoo;